import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <Link href="/">Carteira</Link>
                <Link href="/">Ativos</Link>
                <Link href="/">Graficos</Link>
                <Link href="/">Metas</Link>
            </nav>
            <div>
                <Link href="/">Login</Link>
                <Link href="/">Cadastro</Link>
            </div>
        </header>
    )
}
