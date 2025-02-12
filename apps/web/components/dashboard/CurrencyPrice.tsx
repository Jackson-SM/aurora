import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/Card'
import { CurrencyCard } from './CurrencyCard'

export const CurrencyPrice = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div>
          <CardTitle>Cotação</CardTitle>
          <CardDescription>Conversão entre moedas</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex gap-2">
        <CurrencyCard />
        <CurrencyCard />
      </CardContent>
    </Card>
  )
}
