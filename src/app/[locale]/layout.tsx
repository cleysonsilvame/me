import './globals.css'

import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { ScrollProgress } from '@/app/[locale]/_components/scroll-progress'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Cleyson Silva',
  description: 'Software Engineer',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          poppins.variable,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
