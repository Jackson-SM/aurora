import { JSX } from 'react'

type amountType = {
    key: string
    amount: number
}

export type CardInfo = {
    title: string
    amount: number | amountType[]
}

type CardProps = {
    info: CardInfo
    header?: JSX.Element
    content?: JSX.Element
    footer?: JSX.Element
}

export const Card = ({ info, header, content, footer }: CardProps) => {
    const { title, amount } = info

    return (
        <div className="w-96 rounded-md bg-card p-2 flex flex-col gap-4">
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
                        amount.map((item) => (
                            <span key={item.key}>{item.key}</span>
                        ))
                    )}
                </div>
            )}
            {footer ?? (
                <footer>
                    <p>+12%</p>
                </footer>
            )}
        </div>
    )
}
