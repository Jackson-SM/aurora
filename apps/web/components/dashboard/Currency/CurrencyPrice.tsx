import React from 'react'
import { CurrencyCard } from './CurrencyCard'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { Currency, Locale } from '@/utils/convert_cash'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'

export const CurrencyPrice = () => {
  const convertFrom = {
    currency: Currency.BRL,
    format: Locale.BR,
    flag: 'br',
  }
  const convertTo = {
    currency: Currency.USD,
    format: Locale.BR,
    flag: 'us',
  }

  return (
    <Card className="flex-1 flex flex-col justify-around">
      <CardHeader>
        <div>
          <CardTitle>Cotação</CardTitle>
          <CardDescription>Conversão entre moedas</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex gap-2 items-center">
        <CurrencyCard className="flex-1" {...convertFrom} />
        <FaArrowRightArrowLeft className="w-7 h-7" />
        <CurrencyCard className="flex-1" {...convertTo} />
      </CardContent>
    </Card>
  )
}
