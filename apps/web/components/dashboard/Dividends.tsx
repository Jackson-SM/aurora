'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import { Card, CardContent } from '@/components/ui/Card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { month: 'January', dividends: 40 },
  { month: 'February', dividends: 42 },
  { month: 'March', dividends: 45 },
  { month: 'April', dividends: 48 },
  { month: 'May', dividends: 52 },
  { month: 'June', dividends: 58 },
  { month: 'July', dividends: 63 },
  { month: 'August', dividends: 70 },
  { month: 'September', dividends: 78 },
  { month: 'October', dividends: 88 },
  { month: 'November', dividends: 98 },
  { month: 'December', dividends: 110 },
]

const chartConfig = {
  dividends: {
    label: 'Dividendos',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function Dividends() {
  return (
    <Card className="flex-1">
      <CardContent className="h-full">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="dividends" fill="var(--color-dividends)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
