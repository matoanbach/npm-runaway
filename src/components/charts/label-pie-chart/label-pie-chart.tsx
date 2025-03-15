"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Brocoli", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Bokchoy", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Soy sause", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Eggs", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Inventory",
  },
  chrome: {
    label: "Brocoli",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Bokchoy",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Soy sause",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Eggs",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function LabelPieChartComponent() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Inventory Status</CardTitle>
        <CardDescription>January - Present</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 6.9% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total items for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
