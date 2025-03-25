"use client"

import { useState } from "react"
import Link from "next/link"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { LinearLineChartComponent } from "@/components/charts/linear-line-chart/linear-line-chart"
import { Card } from "@/components/ui/card"
import GanttChartComponent from "@/components/charts/gantt-chart/gantt-chart-component"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { useEmail } from "@/hooks/use-email"
import { SupplierTableComponent } from "@/components/supplier-table/supplier-table"

// Type definitions
type ProductExpiry = {
  name: string;
  expiryDescription: string;
  dateRange: string;
  duration: string;
  progress: number;
};

type Batch = {
  id: string;
  label: string;
  products: ProductExpiry[];
};

type ProductChart = {
  chartName: string;
  qr: string;
  chartData: { month: string; product: number }[];
  productInsights: string;
  batches: Batch[];
  suppliers: CertificateData[];
  alternative_suppliers: CertificateData[];
};

const chartColors = [
  "hsl(210, 80%, 50%)",
  "hsl(180, 70%, 40%)",
  "hsl(330, 90%, 45%)",
  "hsl(50, 70%, 45%)",
  "hsl(90, 80%, 40%)",
];

// Import the JSON data
import products from "../../../mock/stock/products/products.json"
import { CertificateData } from "@/components/pdf-generator.tsx/pdf-generator"
import { QRScanComponent } from "@/components/qr-scan/qr-scan"

// Assume the JSON is in the format { "data": ProductChart[] }
const sampleProductCharts: ProductChart[] = products.data;

// Derive product options from the JSON data
const productOptions = sampleProductCharts.map((chart) => chart.chartName);

export default function StockPage() {
  // State for the selected product chart; default to first product
  const [selectedProductChart, setSelectedProductChart] = useState<ProductChart>(sampleProductCharts[0]);
  const { settings } = useEmail();

  let sender: string;
  let receiver: string;
  let password: string;

  if (settings.senderEmail && settings.senderAppPassword) {
    sender = settings.senderEmail;
    password = settings.senderAppPassword;
    receiver = settings.receiverEmail;
  } else {
    sender = process.env.NEXT_PUBLIC_MAIL_USERNAME || "";
    password = process.env.NEXT_PUBLIC_MAIL_PASSWORD || "";
    receiver = process.env.NEXT_PUBLIC_MAIL_RECEIVERNAME || "";
  }

  const handleSendEmail = async () => {
    const emailData = {
      from: sender,
      to: receiver,
      subject: "Alert: Near-Expiry Product Notification & Recommendations",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h1 style="color: #d9534f; text-align: center;">Product Expiry Notification</h1>
          <p>Dear Store Supervisor,</p>
          <p>The following product(s) are nearing their expiry date:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Product Name</th>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Expiry Date</th>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Days Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Product XYZ</td>
                <td style="border: 1px solid #ddd; padding: 8px;">2025-03-30</td>
                <td style="border: 1px solid #ddd; padding: 8px;">3 days</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Product ABC</td>
                <td style="border: 1px solid #ddd; padding: 8px;">2025-04-02</td>
                <td style="border: 1px solid #ddd; padding: 8px;">5 days</td>
              </tr>
            </tbody>
          </table>
          <p>Please review the inventory and take the necessary actions to handle these near-expiry products.</p>
          <h2 style="color: #d9534f;">Recommendations</h2>
          <p>As a store supervisor, we highly recommend the following options:</p>
          <ul style="margin-left: 20px;">
            <li>Apply a discount on these near-expiry products to boost sales.</li>
            <li>Redistribute the products to other store locations if needed.</li>
            <li>Consider donating them to non-profit organizations.</li>
          </ul>
          <p>These automatic expiry alerts help you manage inventory effectively, minimize losses, and even support your community.</p>
          <p>Thank you,<br>Your Inventory Management Team</p>
        </div>
      `,
      userCredentials: {
        user: sender,
        pass: password,
      },
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Email Sent Successfully",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Error Sending Email",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(data.error, null, 2)}
              </code>
            </pre>
          ),
        });
      }
    } catch (error) {
      toast({
        title: "Error Sending Email",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(error, null, 2)}
            </code>
          </pre>
        ),
      });
    }
  };

  return (
    <ContentLayout title="Stock">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage onClick={handleSendEmail}>Stock</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Select
              onValueChange={(value) => {
                const selectedChart = sampleProductCharts.find(
                  (chart) => chart.chartName.toLowerCase() === value.toLowerCase()
                );
                if (selectedChart) {
                  setSelectedProductChart(selectedChart);
                }
              }}
            >
              <SelectTrigger className="ml-2 w-[180px] bg-white dark:bg-black">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Products</SelectLabel>
                  <Separator />
                  {productOptions.map((product) => (
                    <SelectItem key={product} value={product}>
                      {product}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <QRScanComponent qr={selectedProductChart.qr}/>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="rounded-xl h-full w-full">
            <LinearLineChartComponent
              chartName={selectedProductChart.chartName}
              chartData={selectedProductChart.chartData}
              lineColor={
                chartColors[Math.floor(Math.random() * chartColors.length)]
              }
            />
          </div>
          <div className="rounded-xl bg-muted/50 h-full w-full">
            <Card className="h-full p-10">
              <span className="font-semibold">Product Insights</span>
              <p>{selectedProductChart.productInsights}</p>
            </Card>
          </div>
        </div>
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="grid auto-rows-min gap-2 md:col-span-2">
            <div className="rounded-xl bg-muted/50">
              <GanttChartComponent batches={selectedProductChart.batches} />
            </div>
          </div>
        </div>
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="grid auto-rows-min gap-2 md:col-span-2">
            <div className="rounded-xl bg-muted/50">
              <SupplierTableComponent suppliers={selectedProductChart.suppliers} alternative_suppliers={selectedProductChart.alternative_suppliers} />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
