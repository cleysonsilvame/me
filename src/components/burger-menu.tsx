import { Menu } from 'lucide-react'

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
          <NavLink href="/">Home</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink href="/projects">Projects</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink href="/contact">Contact</NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
