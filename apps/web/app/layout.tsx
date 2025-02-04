'use client'
import { ThemeProvider } from 'next-themes'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['300'], subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${poppins.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    storageKey="aurora-theme"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
