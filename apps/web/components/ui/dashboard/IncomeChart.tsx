'use client'

import { Area, AreaChart, CartesianGrid } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { month: 'January', acoes: 186, fiis: 80, rf: 30 },
  { month: 'February', acoes: 305, fiis: 200, rf: 90 },
  { month: 'March', acoes: 237, fiis: 120, rf: 48 },
  { month: 'April', acoes: 73, fiis: 190, rf: 106 },
  { month: 'May', acoes: 209, fiis: 130, rf: 209 },
  { month: 'June', acoes: 214, fiis: 140, rf: 94 },
]

const chartConfig = {
  acoes: {
    label: 'Ações',
    color: 'hsl(var(--chart-1))',
  },
  fiis: {
    label: 'FIIs',
    color: 'hsl(var(--chart-2))',
  },
  rf: {
    label: 'Renda Fixa',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function IncomeChart() {
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
        <CartesianGrid vertical={false} />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillAcoes" x1="1" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-acoes)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-acoes)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillFIIs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-fiis)" stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor="var(--color-fiis)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillRf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-rf)" stopOpacity={0.8} />
            <stop offset="75%" stopColor="var(--color-rf)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="fiis"
          type="natural"
          fill="url(#fillFIIs)"
          fillOpacity={0.4}
          stroke="var(--color-fiis)"
          stackId="a"
        />
        <Area
          dataKey="acoes"
          type="natural"
          fill="url(#fillAcoes)"
          fillOpacity={0.4}
          stroke="var(--color-acoes)"
          stackId="a"
        />
        <Area
          dataKey="rf"
          type="natural"
          fill="url(#fillRf)"
          fillOpacity={0.4}
          stroke="var(--color-rf)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
