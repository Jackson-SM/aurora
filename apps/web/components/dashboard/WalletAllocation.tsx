'use client'

import { Pie, PieChart } from 'recharts'

import { Card, CardContent } from '@/components/ui/Card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { assets: 'FIIs', percentage: 20, fill: 'hsl(var(--chart-1))' },
  { assets: 'Ações', percentage: 45, fill: 'hsl(var(--chart-2))' },
  { assets: 'Renda Fixa', percentage: 35, fill: 'hsl(var(--chart-3))' },
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

export function WalletAllocation() {
  return (
    <Card className="flex-1 flex items-center">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              labelFormatter={(value) => value}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="assets"
              stroke="0"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
