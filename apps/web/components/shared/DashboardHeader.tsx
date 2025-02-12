'use client'

import { BiMoney, BiPieChart, BiTargetLock, BiWallet } from 'react-icons/bi'
import { LinkNav } from '../ui/LinkNav'
import { Logo } from '../ui/Logo'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'

export const DashboardHeader = () => {
  const pathname = usePathname()

  const navigation_links = [
    { href: '/dashboard', icon: BiWallet, text: 'Carteira' },
    { href: '/dashboard/assets', icon: BiMoney, text: 'Ativos' },
    { href: '/dashboard/charts', icon: BiPieChart, text: 'Graficos' },
    { href: '/dashboard/goals', icon: BiTargetLock, text: 'Metas' },
  ]

  return (
    <header className="flex justify-between items-center p-4 bg-muted">
      <div>
        <Logo />
      </div>
      <nav className="flex bg-background rounded-lg p-0 m-0">
        {navigation_links.map(({ href, text }) => {
          return (
            <LinkNav key={href} href={href} active={pathname === href}>
              {text}
            </LinkNav>
          )
        })}
      </nav>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
