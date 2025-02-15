import { CardSummary } from '@/components/dashboard/CardSummary'
import { CurrencyPrice } from '@/components/dashboard/CurrencyPrice'
import { Dividends } from '@/components/dashboard/Dividends'
import { LineChartCard } from '@/components/dashboard/LineChartCard'
import { WalletAllocation } from '@/components/dashboard/WalletAllocation'
import { WalletBallance } from '@/components/dashboard/WalletBalance'
import { convertCash, Currency, Locale } from '@/utils/convert_cash'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aurora Dashboard',
  description: 'Aurora - Carteira',
}

export default function Dashboard() {
  const cards = [
    {
      title: 'Patrimônio',
      amount: 235.13 + 12,
      upMoney: 12,
      chart: <LineChartCard />,
    },
    {
      title: 'Rentabilidade',
      amount: 12,
      upMoney: 0,
      chart: <LineChartCard />,
    },
    {
      title: 'Dividendos',
      amount: 12,
      upMoney: 12,
      chart: <LineChartCard />,
    },
  ]

  return (
    <main className="flex p-2 gap-2 bg-gradient-to-t from-bg-primary to-bg-secondary h-full">
      <div className="flex-1 flex flex-col rounded-lg overflow-hidden gap-3">
        <div className="flex bg-card justify-around border border-border rounded-lg p-2">
          {cards.map((card) => (
            <CardSummary key={card.title} {...card} />
          ))}
        </div>
        <div className="flex gap-2">
          <WalletBallance />
        </div>
        <div className="flex gap-2">
          <Dividends />
          <WalletAllocation />
          <CurrencyPrice />
        </div>
      </div>
      <aside className="rounded-md relative h-full bg-primary">
        <div className="bg-card border border-border p-2 rounded-lg flex-1">
          <h2 className="text-lg">Movimentações</h2>
          <ul>
            <li>{convertCash(20.43, Locale.BR, Currency.BRL)}</li>
            <li>{convertCash(18.9, Locale.BR, Currency.BRL)}</li>
            <li>{convertCash(41.09, Locale.BR, Currency.BRL)}</li>
            <li>{convertCash(55.12, Locale.BR, Currency.BRL)}</li>
            <li>{convertCash(29.85, Locale.BR, Currency.BRL)}</li>
          </ul>
        </div>
        <div className="bg-card border border-border p-2 rounded-lg flex-1">
          <h2 className="text-lg">Ativos</h2>
        </div>
        <div className="bg-card border border-border p-2 rounded-lg flex-1">
          <h2 className="text-lg">Criptomoedas</h2>
        </div>
      </aside>
    </main>
  )
}
