"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { LinearLineChartComponent } from "@/components/charts/linear-line-chart/linear-line-chart";

// Define how many rows and charts per row you want
const numberOfRows = 5; // Total rows of charts
const chartsPerRow = 3; // Charts per row

// Total number of charts
const totalCharts = numberOfRows * chartsPerRow;

const chartColors = [
  "hsl(210, 80%, 50%)", // Color for Chart 1
  "hsl(180, 70%, 40%)", // Color for Chart 2
  "hsl(330, 90%, 45%)", // Color for Chart 3
  // ... add as many as needed
]

// Generate sample data for each chart
const sampleProductCharts = Array.from({ length: totalCharts }, (_, i) => ({
  chartName: `Product ${i + 1}`,
  chartData: [
    { month: "January", product: Math.floor(Math.random() * 300) },
    { month: "February", product: Math.floor(Math.random() * 300) },
    { month: "March", product: Math.floor(Math.random() * 300) },
    { month: "April", product: Math.floor(Math.random() * 300) },
    { month: "May", product: Math.floor(Math.random() * 300) },
    { month: "June", product: Math.floor(Math.random() * 300) },
    { month: "January", product: Math.floor(Math.random() * 300) },
    { month: "February", product: Math.floor(Math.random() * 300) },
    { month: "March", product: Math.floor(Math.random() * 300) },
    { month: "April", product: Math.floor(Math.random() * 300) },
    { month: "May", product: Math.floor(Math.random() * 300) },
    { month: "June", product: Math.floor(Math.random() * 300) },
  ],
}));

export default function StockPage() {

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
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4 p-4">
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid auto-rows-min gap-4 md:grid-cols-3">
            {Array.from({ length: chartsPerRow }).map((_, colIndex) => {
              const chartIndex = rowIndex * chartsPerRow + colIndex;
              const chart = sampleProductCharts[chartIndex];
              return (
                <div
                  key={colIndex}
                  className="rounded-xl bg-muted/50"
                >
                  <LinearLineChartComponent
                    chartName={chart.chartName}
                    chartData={chart.chartData}
                    lineColor={chartColors[Math.floor(Math.random() * 300) % chartColors.length]}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

    </ContentLayout>
  );
}
