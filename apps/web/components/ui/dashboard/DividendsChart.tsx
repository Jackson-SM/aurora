'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { month: 'January', dividend: 1 },
  { month: 'February', dividend: 2 },
  { month: 'March', dividend: 3 },
  { month: 'April', dividend: 5 },
  { month: 'May', dividend: 7 },
  { month: 'June', dividend: 11 },
  { month: 'July', dividend: 14 },
  { month: 'August', dividend: 18 },
  { month: 'September', dividend: 25 },
  { month: 'October', dividend: 31 },
  { month: 'November', dividend: 38 },
  { month: 'December', dividend: 49 },
]

const chartConfig = {
  dividend: {
    label: 'Dividendos',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function DividendsChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={0}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="dividend" fill="var(--color-dividend)" radius={3} />
      </BarChart>
    </ChartContainer>
  )
}
