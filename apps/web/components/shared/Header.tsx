import Link from 'next/link'
import { BiMoney, BiPieChart, BiTargetLock, BiWallet } from 'react-icons/bi'
import { Button } from '../ui/Button'
import { LinkNav } from '../ui/LinkNav'
import { Logo } from '../ui/Logo'

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <div>
                <Logo />
            </div>
            <nav className="flex space-x-4">
                <LinkNav href="/">
                    <BiWallet className="w-6 h-6" /> Carteira
                </LinkNav>
                <LinkNav href="/">
                    <BiMoney className="w-6 h-6" /> Ativos
                </LinkNav>
                <LinkNav href="/">
                    <BiPieChart className="w-6 h-6" /> Graficos
                </LinkNav>
                <LinkNav href="/">
                    <BiTargetLock className="w-6 h-6" /> Metas
                </LinkNav>
            </nav>
            <div className="flex items-center gap-2">
                <Link href="/login">Login</Link>
                <Button asChild>
                    <Link href="/register">Cadastro</Link>
                </Button>
            </div>
        </header>
    )
}
