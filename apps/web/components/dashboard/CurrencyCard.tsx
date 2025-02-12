import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import Image from 'next/image'
import { convertCash, Currency, Locale } from '@/utils/convert_cash'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['500'], style: ['normal'] })

export const CurrencyCard = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <Image
          src="https://flagcdn.com/w320/us.png"
          alt="br flag"
          width={120}
          height={120}
          className="w-10 h-10 rounded-full object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className={`${poppins.className}`}>
          {convertCash(159.31, Locale.BR, Currency.BRL)}
        </p>
        <p className={`text-muted-foreground ${poppins.className}`}>BRL</p>
      </CardContent>
    </Card>
  )
}
