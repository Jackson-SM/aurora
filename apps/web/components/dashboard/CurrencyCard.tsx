import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import Image from 'next/image'
import { convertCash, Currency, Locale } from '@/utils/convert_cash'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const poppins = Poppins({ weight: ['500'], style: ['normal'] })

type CurrencyCardProps = React.ComponentProps<typeof Card> & {
  currency: Currency
  format: Locale
  flag: string
}

export const CurrencyCard = ({
  className,
  currency,
  format,
  flag,
  ...props
}: CurrencyCardProps) => {
  return (
    <Card className={cn('w-full h-full', className)} {...props}>
      <CardHeader>
        <Image
          src={`https://flagcdn.com/w320/${flag}.png`}
          alt="flag"
          width={120}
          height={120}
          className="w-10 h-10 rounded-full object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className={`${poppins.className}`}>
          {convertCash(159.31, format, currency)}
        </p>
        <p className={`text-muted-foreground ${poppins.className}`}>BRL</p>
      </CardContent>
    </Card>
  )
}
