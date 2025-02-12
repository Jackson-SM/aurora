import { cn } from '@/lib/utils'
import Link from 'next/link'

type LinkNavProps = {
  active?: boolean
}

export const LinkNav = ({
  children,
  className,
  active,
  ...props
}: React.ComponentProps<typeof Link> & LinkNavProps) => {
  return (
    <Link
      {...props}
      className={cn(
        'hover:text-primary transition-colors duration-100 text-sm flex gap-1 items-center p-2 px-4 rounded-sm',
        className,
        active && 'bg-primary text-white hover:text-white'
      )}
    >
      {children}
    </Link>
  )
}
