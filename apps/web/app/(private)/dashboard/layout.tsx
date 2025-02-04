import { Header } from '@/components/shared/Header'
import { Suspense } from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <main>{children}</main>
      </Suspense>
    </>
  )
}
