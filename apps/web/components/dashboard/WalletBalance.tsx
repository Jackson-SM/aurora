'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/Chart'
const chartData = [
  { month: 'January', cdi: 222, ibov: 150, wallet: 320 },
  { month: 'February', cdi: 97, ibov: 180, wallet: 290 },
  { month: 'March', cdi: 105, ibov: 110, wallet: 280 },
  { month: 'April', cdi: 150, ibov: 170, wallet: 260 },
  { month: 'May', cdi: 250, ibov: 120, wallet: 250 },
  { month: 'June', cdi: 107, ibov: 150, wallet: 240 },
  { month: 'July', cdi: 100, ibov: 130, wallet: 230 },
  { month: 'August', cdi: 150, ibov: 170, wallet: 220 },
  { month: 'September', cdi: 200, ibov: 180, wallet: 210 },
  { month: 'October', cdi: 250, ibov: 170, wallet: 200 },
  { month: 'November', cdi: 300, ibov: 200, wallet: 190 },
  { month: 'December', cdi: 350, ibov: 220, wallet: 180 },
]

const chartConfig = {
  Percentage: {
    label: 'Porcentagem',
  },
  cdi: {
    label: 'CDI',
    color: '#f7b32b',
  },
  ibov: {
    label: 'IBOV',
    color: '#5f0a87',
  },
  wallet: {
    label: 'Carteira',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function WalletBallance() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Carteira comparada aos índices</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillCdi" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cdi)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cdi)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillIbov" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-ibov)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-ibov)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWallet" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-wallet)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-wallet)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={0}
              tickFormatter={(value) => {
                return value.slice(0, 3)
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return value
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="ibov"
              type="natural"
              fill="url(#fillIbov)"
              stroke="var(--color-ibov)"
              stackId="a"
            />
            <Area
              dataKey="cdi"
              type="natural"
              fill="url(#fillCdi)"
              stroke="var(--color-cdi)"
              stackId="a"
            />
            <Area
              dataKey="wallet"
              type="natural"
              fill="url(#fillWallet)"
              stroke="var(--color-wallet)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
