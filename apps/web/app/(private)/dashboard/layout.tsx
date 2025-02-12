import { DashboardHeader } from '@/components/shared/DashboardHeader'
import { Suspense } from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
    </div>
  )
}
