import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card'
import { convertCash, Currency, Locale } from '@/utils/convert_cash'
import { Poppins } from 'next/font/google'

// Deverá ter propriedades: title, amount, upMoney, chart

const poppins = Poppins({ weight: ['600'], style: ['normal'] })

type CardSummaryProps = {
  title: string
  amount: number
  upMoney: number
  chart: React.ReactNode
}

export const CardSummary = ({
  amount,
  title,
  upMoney,
  chart,
}: CardSummaryProps) => {
  return (
    <Card className="border-0 shadow-none rounded-none w-full h-auto">
      <CardHeader>
        <CardTitle className="text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 items-center">
        <h3 className={`text-3xl ${poppins.className}`}>
          {convertCash(amount + upMoney, Locale.BR, Currency.BRL)}
        </h3>
        {chart}
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          <span className="text-primary-foreground">
            {((upMoney / amount) * 100).toFixed(2)}%
          </span>{' '}
          em janeiro
        </p>
      </CardFooter>
    </Card>
  )
}
