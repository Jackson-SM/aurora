'use client'

import { Area, AreaChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
import { chartData } from '@/data/chatData'

export const description = 'An area chart with gradient fill'

const chartConfig = {
  words: {
    label: 'Words',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function WealthChart() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillWords" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-words)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-words)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="words"
          type="natural"
          fill="url(#fillWords)"
          fillOpacity={0.4}
          stroke="var(--color-words)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
