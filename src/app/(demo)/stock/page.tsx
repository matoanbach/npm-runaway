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
  chartData: { month: string; product: number }[];
  productInsights: string;
  batches: Batch[];
};

const productOptions = ["apple", "banana", "blueberry", "grapes", "pineapple"];

const sampleProductCharts: ProductChart[] = productOptions.map((productName) => {
  // Define product-specific insights
  let insights = "";
  switch (productName) {
    case "apple":
      insights = "Apple: High consumer demand and robust turnover ensure minimal waste.";
      break;
    case "banana":
      insights = "Banana: Stable performance with occasional supply fluctuations requiring monitoring.";
      break;
    case "blueberry":
      insights = "Blueberry: Premium quality with lower volumes, leading to high customer satisfaction.";
      break;
    case "grapes":
      insights = "Grapes: Steady demand with seasonal variations; inventory levels are well-managed.";
      break;
    case "pineapple":
      insights = "Pineapple: Strong growth with extended shelf life and low waste levels.";
      break;
    default:
      insights = "No insights available.";
  }

  // Generate chart data for months January to June
  const months = ["January", "February", "March", "April", "May", "June"];
  const chartData = months.map((month) => ({
    month,
    product: Math.floor(Math.random() * 300), // Random stock level between 0 and 299
  }));

  // Define sample batches for expiry tracking with random progress values
  const batches: Batch[] = [
    {
      id: "A",
      label: "Batch A",
      products: [
        {
          name: "Product 1",
          expiryDescription: "Expires in 5 days",
          dateRange: "Day 1 - Day 5",
          duration: "5 days",
          progress: Math.floor(Math.random() * 100),
        },
        {
          name: "Product 2",
          expiryDescription: "Expires in 6 days",
          dateRange: "Day 2 - Day 7",
          duration: "6 days",
          progress: Math.floor(Math.random() * 100),
        },
      ],
    },
    {
      id: "B",
      label: "Batch B",
      products: [
        {
          name: "Product 3",
          expiryDescription: "Expires in 15 days",
          dateRange: "Day 8 - Day 22",
          duration: "15 days",
          progress: Math.floor(Math.random() * 100),
        },
        {
          name: "Product 4",
          expiryDescription: "Expires in 14 days",
          dateRange: "Day 7 - Day 20",
          duration: "14 days",
          progress: Math.floor(Math.random() * 100),
        },
      ],
    },
  ];

  return {
    chartName: productName.charAt(0).toUpperCase() + productName.slice(1),
    chartData,
    productInsights: insights,
    batches,
  };
});

const chartColors = [
  "hsl(210, 80%, 50%)",
  "hsl(180, 70%, 40%)",
  "hsl(330, 90%, 45%)",
  "hsl(50, 70%, 45%)",
  "hsl(90, 80%, 40%)",
]

export default function StockPage() {
  // State for the selected product chart; default to first product ("apple")
  const [selectedProductChart, setSelectedProductChart] = useState(sampleProductCharts[0])

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
            <BreadcrumbPage>Stock</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {/* Product select placed inside the breadcrumb list */}
            <Select
              onValueChange={(value) => {
                const index = productOptions.indexOf(value)
                if (index !== -1) {
                  setSelectedProductChart(sampleProductCharts[index])
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
                      {product.charAt(0).toUpperCase() + product.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Chart and Insights Row */}
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          {/* Chart Column */}
          <div className="rounded-xl h-full w-full">
            <LinearLineChartComponent
              chartName={selectedProductChart.chartName}
              chartData={selectedProductChart.chartData}
              lineColor={
                chartColors[Math.floor(Math.random() * chartColors.length)]
              }
            />
          </div>
          {/* Insights Column */}
          <div className="rounded-xl bg-muted/50 h-full w-full">
            <Card className="h-full p-10">
              <span className="font-semibold">Product Insights</span>
              <p>{selectedProductChart.productInsights}</p>
            </Card>
          </div>
        </div>
        {/* Additional section: Gantt Chart for expiry tracking */}
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="grid auto-rows-min gap-2 md:col-span-2">
            <div className="rounded-xl bg-muted/50">
              <GanttChartComponent batches={selectedProductChart.batches} />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
