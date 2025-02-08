import { AllocationChart } from '@/components/ui/dashboard/AllocationChart'
import { Card, CardInfo, GeneralFooter } from '@/components/ui/dashboard/Card'
import { DividendsChart } from '@/components/ui/dashboard/DividendsChart'
import { IncomeChart } from '@/components/ui/dashboard/IncomeChart'
import { WealthChart } from '@/components/ui/dashboard/WealthChart'
import { WealthGeneralChart } from '@/components/ui/dashboard/WealthGeneralCard'
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
      footer: (
        <GeneralFooter chart={<WealthChart />} footerStyle="flex items-end">
          <p className="text-xs">
            <span>{(0.2 * 132801.98).toFixed(2) + '%'}</span> este mês
          </p>
        </GeneralFooter>
      ),
    },
    {
      title: 'Rendimentos',
      amount: 13029.32,
      footer: (
        <GeneralFooter chart={<IncomeChart />}>
          <p>hello</p>
        </GeneralFooter>
      ),
    },
    {
      title: 'Dividendos',
      amount: 3203.21,
      footer: (
        <GeneralFooter
          className="w-32"
          chart={<DividendsChart />}
        ></GeneralFooter>
      ),
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
    <div className="p-4 flex h-full w-full gap-2">
      <div className="flex flex-col gap-2 w-full">
        <div className="grid grid-cols-4 gap-2">
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
        <div>
          <WealthGeneralChart />
        </div>
      </div>
      <div className="p-2 bg-card w-96 rounded-md">
        <p>Ativos</p>
      </div>
    </div>
  )
}
