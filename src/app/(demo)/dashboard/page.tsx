"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { LabelPieChartComponent } from "@/components/charts/label-pie-chart/label-pie-chart";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { HorizontalBarChartComponent } from "@/components/charts/horizontal-bar-chart/horizontal-bar-chart";
import { StackedRadialChartOneComponent } from "@/components/charts/stacked-radial-chart/stacked-radial-chart-1";
import { StackedRadialChartTwoComponent } from "@/components/charts/stacked-radial-chart/stacked-radial-chart-2";
import { InteractiveAreaChart } from "@/components/charts/interactive-area-chart/interactive-area-chart";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <div className="rounded-xl bg-muted/50 md:col-span-2">
            {/* Placeholder for another chart (e.g., Chart2) */}
            <InteractiveAreaChart />
          </div>
        </div>
        {/* Grid with two columns */}
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          {/* Left grid cell with a resizable panel group */}
          <div className="rounded-xl bg-muted/50">
            {/* Horizontal Resizable Panel Group */}
            <Card className="h-full">
              <ResizablePanelGroup
                direction="horizontal"
                className="w-full rounded-lg border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <p>We spent<span className="font-semibold"> less for Q1</span> with<span className="font-semibold"> $45,100,00</span></p>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <ResizablePanelGroup direction="vertical" className="w-full h-full">
                    <ResizablePanel defaultSize={25}>
                      <div className="flex h-full items-center justify-center p-6">
                        <p>We got back<span className="font-semibold"> more for Q1</span> with<span className="font-semibold"> $455,100,00</span> in revenue</p>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                      <div className="flex h-full items-center justify-center p-6">
                        <p>We reduced<span className="font-semibold"> a lot of waste</span> with<span className="font-semibold"> 8900 tons less</span> compared to last year</p>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
              </ResizablePanelGroup>
            </Card>
          </div>
          <div className="rounded-xl bg-muted/50">
            <LabelPieChartComponent />
          </div>
        </div>
        <div className="grid auto-rows-min gap-2 md:grid-cols-[30%_70%]">
          <div className=" rounded-xl bg-muted/50 w-full h-full" >
            <Card className="h-full p-10">
              <span className="font-semibold">Waste Summary</span>
              <p>We&apos;re doing ok for the past 3 months.</p>
              <p>Keep it up. </p>
            </Card>
          </div>
          <div className=" rounded-xl bg-muted/50 w-full h-full" >
            <HorizontalBarChartComponent />
          </div>
        </div>
        <div className="grid auto-rows-min gap-2 md:grid-cols-3">
          <div className="rounded-xl bg-muted/50 w-full h-full" >
            <StackedRadialChartOneComponent />
          </div>
          <div className="rounded-xl bg-muted/50 w-full h-full" >
            <StackedRadialChartTwoComponent />
          </div>
          <div className="rounded-xl bg-muted/50 w-full h-full" >
            <Card className="h-full p-10">
              <span className="font-semibold">Supplier Summary</span>
              <p>We&apos;re doing ok for the past 3 months.</p>
              <p>Keep it up. </p>
            </Card>
          </div>
        </div>

        {/* Third grid row for additional charts */}

      </div>
    </ContentLayout>
  );
}
