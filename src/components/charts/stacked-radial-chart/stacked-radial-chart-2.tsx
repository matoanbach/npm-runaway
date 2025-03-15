"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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

// Example data: 43% "bad", 67% "good"
const chartData = [
  { month: "January", bad: 19, good: 81 },
]

// Updated chart config to reflect "bad" and "good"
const chartConfig = {
  bad: {
    label: "Bad",
    color: "hsl(var(--chart-1))",
  },
  good: {
    label: "Good",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function StackedRadialChartTwoComponent() {
  // If you want the center label to show total:
  // const total = chartData[0].bad + chartData[0].good;
  // Or just show the 'good' portion:
  const totalGood = chartData[0].good

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Supplier Delivery Statistics</CardTitle>
        <CardDescription>January - Present 2025</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalGood.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          % Good
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            {/* First RadialBar for "bad" */}
            <RadialBar
              dataKey="bad"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-bad)"
              className="stroke-transparent stroke-2"
            />
            {/* Second RadialBar for "good" */}
            <RadialBar
              dataKey="good"
              fill="var(--color-good)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing delivery distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
