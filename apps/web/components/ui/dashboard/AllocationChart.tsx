'use client'

import { Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { browser: 'chrome', visitors: 50, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 40, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 10, fill: 'var(--color-firefox)' },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function AllocationChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={chartData} dataKey="visitors" nameKey="browser" />
      </PieChart>
    </ChartContainer>
  )
}
