import { CardSummary } from '@/components/dashboard/CardSummary'
import { CurrencyPrice } from '@/components/dashboard/Currency'
import { Dividends } from '@/components/dashboard/Dividends'
import { LineChartCard } from '@/components/dashboard/LineChartCard'
import { WalletAllocation } from '@/components/dashboard/WalletAllocation'
import { WalletBallance } from '@/components/dashboard/WalletBalance'
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
    <main className="p-2 bg-gradient-to-t from-bg-primary to-bg-secondary h-full flex-1 col-span-2">
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
    </main>
  )
}
