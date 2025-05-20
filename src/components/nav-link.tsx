'use client'

import { usePathname } from 'next/navigation'

import { Link } from '@/i18n/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const currentPath = usePathname()
  return (
    <Link
      href={href}
      data-current={currentPath === href}
      className={
        'w-full text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary data-[current=true]:text-primary'
      }
    >
      {children}
    </Link>
  )
}
