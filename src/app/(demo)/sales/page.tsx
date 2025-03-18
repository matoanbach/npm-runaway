"use client"

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { StepAreaChartComponent } from "@/components/charts/step-area-chart/step-area-chart";
import { LabelLineChartComponent } from "@/components/charts/label-line-chart/label-line-chart";
import { MixedBarChartComponent } from "@/components/charts/mixed-bar-chart/mixed-bar-chart";
import { Card } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { Activity } from "lucide-react";

const chartColors = [
  "hsl(210, 80%, 50%)",
  "hsl(180, 70%, 40%)",
  "hsl(330, 90%, 45%)",
  "hsl(50, 70%, 45%)",
  "hsl(90, 80%, 40%)",
]

// SalesChart: used for the LabelLineChartComponent (e.g., monthly sales data)
type SalesChart = {
  chartName: string;               // Name of the chart (or product)
  chartConfig: ChartConfig;        // Configuration for the sales chart (labels, colors, etc.)
  data: { month: string; sales: number }[]; // Array of monthly sales data
};

// SellerChart: used for the MixedBarChartComponent (e.g., sales by seller)
type SellerChart = {
  chartName: string;               // Name of the chart (or product)
  chartConfig: ChartConfig;        // Configuration for the seller chart (labels, colors, etc.)
  data: { seller: string; sales: number, fill: string }[]; // Array of seller-specific sales data
};

// DiscountChart: used for the StepAreaChartComponent (e.g., discount periods)
type DiscountChart = {
  chartName: string;               // Name of the chart (or product)
  chartConfig: ChartConfig;        // Configuration for the discount chart (labels, colors, icons, etc.)
  data: { period: string; discount: number }[]; // Array of discount data (per period)
};

// Overall ProductChart: combines all datasets for one product.
type ProductChart = {
  product: string;                 // Product name
  salesChart: SalesChart;        // Array of sales chart data (could be one element)
  sellersChart: SellerChart;     // Array of seller chart data (could be one element)
  discountChart: DiscountChart;  // Array of discount chart data (could be one element)
  productInsights: string;         // Overall insights about the product
};

const productOptions = ["apple", "banana", "blueberry", "grapes", "pineapple"];
const sellersOptions = ["Amazon", "Walmart", "Target", "BestBuy", "Costco"];
const months = ["January", "February", "March", "April", "May", "June"];

// Example Sales Chart Config for LabelLineChartComponent
const salesChartConfig: ChartConfig = {
  sales: {
    label: "Sales",
    color: chartColors[Math.floor(Math.random() * chartColors.length)],
  },
} satisfies ChartConfig

// Example Seller Chart Config for MixedBarChartComponent
const sellerChartConfig: ChartConfig = {
  sales: {
    label: "Units sold",
  },
  amazon: { label: "Amazon", color: "hsl(var(--chart-1))" },
  walmart: { label: "Walmart", color: "hsl(var(--chart-2))" },
  target: { label: "Target", color: "hsl(var(--chart-3))" },
  bestbuy: { label: "BestBuy", color: "hsl(var(--chart-4))" },
  costco: { label: "Costco", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig

// Example Discount Chart Config for StepAreaChartComponent
const discountChartConfig: ChartConfig = {
  discount: {
    label: "Discount",
    color: chartColors[Math.floor(Math.random() * chartColors.length)],
    icon: Activity,
  },
} satisfies ChartConfig


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

  // Sales data: generate monthly sales values
  const salesData = months.map((month) => ({
    month,
    sales: Math.floor(Math.random() * 300),
  }));
  const salesChart: SalesChart = {
    chartName: productName.charAt(0).toUpperCase() + productName.slice(1) + " Sales",
    chartConfig: salesChartConfig,
    data: salesData,
  };

  // Seller data: generate random sales for each seller
  const sellerData = sellersOptions.map((seller) => ({
    seller: seller.toLowerCase(),
    sales: Math.floor(Math.random() * 500),
    fill: "var(--color-" + seller.toLowerCase() +  ")"
  }));

  const sellerChart: SellerChart = {
    chartName: productName.charAt(0).toUpperCase() + productName.slice(1) + " by Seller",
    chartConfig: sellerChartConfig,
    data: sellerData,
  };

  // Discount data: generate random discount percentage for each month
  const discountData = months.map((month) => ({
    period: month,
    discount: Math.floor(Math.random() * 30), // discount percentage between 0 and 29%
  }));
  const discountChart: DiscountChart = {
    chartName: productName.charAt(0).toUpperCase() + productName.slice(1) + " Discount",
    chartConfig: discountChartConfig,
    data: discountData,
  };

  return {
    product: productName.charAt(0).toUpperCase() + productName.slice(1),
    salesChart: salesChart,
    sellersChart: sellerChart,
    discountChart: discountChart,
    productInsights: insights,
  };
});



export default function SalesPage() {
  // Default to the first product chart (e.g., "Apple")
  const [selectedProductChart, setSelectedProductChart] = useState<ProductChart>(sampleProductCharts[0])

  return (
    <ContentLayout title="Sales">
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
            <BreadcrumbPage>Sales</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {/* Product select placed in breadcrumb */}
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
        {/* Row 1: Sales Chart and Discount Chart */}
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="rounded-xl h-full w-full">
            <LabelLineChartComponent
              chartName={selectedProductChart.salesChart.chartName}
              chartData={selectedProductChart.salesChart.data}
              chartConfig={selectedProductChart.salesChart.chartConfig}
            />
          </div>
          <div className="rounded-xl bg-muted/50 h-full w-full">
            <StepAreaChartComponent
              chartName={selectedProductChart.discountChart.chartName}
              chartData={selectedProductChart.discountChart.data}
              chartConfig={selectedProductChart.discountChart.chartConfig}
            />
          </div>
        </div>
        {/* Row 2: Sellers Chart and Product Insights */}
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="rounded-xl h-full w-full">
            <MixedBarChartComponent
              chartName={selectedProductChart.sellersChart.chartName}
              chartData={selectedProductChart.sellersChart.data}
              chartConfig={selectedProductChart.sellersChart.chartConfig}
            />
          </div>
          <div className="rounded-xl bg-muted/50 h-full w-full">
            <Card className="h-full p-10">
              <span className="font-semibold">Product Insights</span>
              <p>{selectedProductChart.productInsights}</p>
            </Card>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
