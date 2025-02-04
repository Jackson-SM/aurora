import { AllocationChart } from '@/components/ui/dashboard/AllocationChart'
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
      footer: <></>,
    },
    {
      title: 'Dividendos',
      amount: 7913.21,
    },
    {
      title: 'Alocação',
      amount: [
        { key: 'Ações', amount: 40 },
        { key: 'FIIs', amount: 40 },
        { key: 'Renda Fixa', amount: 20 },
      ],
      footer: <></>,
    },
  ]

  return (
    <div className="p-4">
      <div className="flex gap-2">
        {cards.map((card) => {
          return (
            <Card
              key={card.title}
              info={card}
              className={card.title === 'Alocação' ? 'flex' : ''}
            >
              {card.title === 'Alocação' && <AllocationChart />}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
