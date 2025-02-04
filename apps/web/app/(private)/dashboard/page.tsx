import { Card, CardInfo } from '@/components/ui/dashboard/Card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aurora Dashboard',
  description: 'Aurora - Carteira',
}

export default function Dashboard() {
  const cards: CardInfo[] = [
    {
      title: 'Patrimonio',
      amount: 132801.98,
    },
    {
      title: 'Rendimentos',
      amount: 13029.32,
    },
    {
      title: 'Dividendos',
      amount: 7913.21,
    },
    {
      title: 'Alocação',
      amount: 100000,
    },
  ]

  return (
    <div className="p-4">
      <div className="flex gap-2">
        {cards.map((card) => {
          return <Card key={card.title} info={card} />
        })}
      </div>
    </div>
  )
}
