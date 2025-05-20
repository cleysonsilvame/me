import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { NavLink } from './nav-link'

interface BurgerMenuProps {
  className?: string
}

export function BurgerMenu({ className }: BurgerMenuProps) {
  const t = useTranslations('NavBarComponent')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <NavLink href="/">{t('homeLink')}</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink href="/projects">{t('projectsLink')}</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink href="/contact">{t('contactLink')}</NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
