import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['300'], subsets: ['latin'] })
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
