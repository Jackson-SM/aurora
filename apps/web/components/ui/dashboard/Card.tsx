import { JSX } from 'react'
import { WealthChart } from './WealthChart'
import { cn } from '@/lib/utils'

type amountType = {
  key: string
  amount: number
}

export type CardInfo = {
  title: string
  amount: number | amountType[]
  header?: JSX.Element
  content?: JSX.Element
  footer?: JSX.Element
}

type CardProps = {
  info: CardInfo
}

export const Card = ({
  info,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & CardProps) => {
  const { title, amount, header, footer, content } = info

  return (
    <div className={cn('w-96 rounded-md bg-card p-2', className)} {...props}>
      <div className="w-full flex flex-col gap-2">
        {header ?? (
          <header>
            <h3 className="text-lg text-muted-foreground">{title}</h3>
          </header>
        )}
        {content ?? (
          <div>
            {typeof amount == 'number' ? (
              <h4 className="text-2xl font-medium">
                {amount.toLocaleString('pt-BR', {
                  currency: 'BRL',
                  currencyDisplay: 'narrowSymbol',
                  signDisplay: 'negative',
                  style: 'currency',
                })}
              </h4>
            ) : (
              amount.map((item) => {
                return (
                  <div key={item.key} className="">
                    <span>{item.key}</span>
                  </div>
                )
              })
            )}
          </div>
        )}
        {footer ?? (
          <footer className="flex justify-between items-center">
            <p>+2%</p>
            <div className="h-full w-24">
              <WealthChart />
            </div>
          </footer>
        )}
      </div>
      {children}
    </div>
  )
}
