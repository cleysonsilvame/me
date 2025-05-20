'use client'

import { Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function LocaleToggle() {
  const t = useTranslations('LocaleToggle')
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="size-[1.2rem]" />
          <span className="sr-only">{t('button')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={pathname} locale={locale}>
              {t('locale', { locale: locale.replaceAll('-', '_') })}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
