'use client'

import { Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { type: 'FIIs', percentage: 43.4, fill: 'var(--color-fiis)' },
  { type: 'Ações', percentage: 46.5, fill: 'var(--color-acoes)' },
  { type: 'Renda Fixa', percentage: 10.1, fill: 'var(--color-rf)' },
]

const chartConfig = {
  percentage: {
    label: 'Porcentagem',
  },
  fiis: {
    label: 'Fundos Imobiliarios',
    color: 'hsl(var(--chart-1))',
  },
  acoes: {
    label: 'Ações',
    color: 'hsl(var(--chart-2))',
  },
  rf: {
    label: 'Renda Fixa',
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Pie data={chartData} dataKey="percentage" nameKey="type" />
      </PieChart>
    </ChartContainer>
  )
}
