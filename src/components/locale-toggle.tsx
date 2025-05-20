'use client'

import { Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const locales = [
  { value: 'en', label: 'English' },
  { value: 'pt-br', label: 'Português' },
]

export function LocaleToggle() {
  const pathname = usePathname()

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="size-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale.value} asChild>
            <Link href={redirectedPathname(locale.value)}>{locale.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
