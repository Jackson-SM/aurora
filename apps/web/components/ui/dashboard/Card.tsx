import { cn } from '@/lib/utils'
import { convertCash, Currency, Locale } from '@/utils/convert_cash'
import { Poppins } from 'next/font/google'
import { JSX } from 'react'

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

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

export const Card = ({
  info,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & CardProps) => {
  const { title, amount, header, footer, content } = info

  return (
    <div
      className={cn('w-full max-w-sm p-4 rounded-md bg-card', className)}
      {...props}
    >
      <div className="flex flex-col justify-between h-full">
        {header ?? (
          <header className="">
            <h3 className="text-lg text-muted-foreground">{title}</h3>
          </header>
        )}
        {content ??
          (typeof amount == 'number' ? (
            <div>
              <h4 className={`text-3xl w-full text-right ${poppins.className}`}>
                {convertCash(amount, Locale.BR, Currency.BRL)}
              </h4>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {amount.map((item) => {
                return (
                  <div key={item.key} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground text-sm">
                      {item.key}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        {footer ?? (
          <footer className="flex justify-between items-center"></footer>
        )}
      </div>
      {children}
    </div>
  )
}

export const GeneralFooter = ({
  children,
  className,
  footerStyle,
  chart,
  ...props
}: React.ComponentProps<'div'> & {
  footerStyle?: string
  chart: React.ReactNode
}) => {
  return (
    <footer
      className={cn('flex justify-between items-center', footerStyle)}
      {...props}
    >
      {children}
      <div className={cn('h-full w-24', className)}>{chart}</div>
    </footer>
  )
}
