import { cn } from '@/lib/utils'
import Link from 'next/link'

export const LinkNav = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        'hover:text-primary transition-colors duration-100 text-base flex gap-1 items-center',
        className
      )}
    >
      {children}
    </Link>
  )
}
