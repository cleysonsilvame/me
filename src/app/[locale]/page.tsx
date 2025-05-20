import { useTranslations } from 'next-intl'

import { Header } from '@/components/header'

import { About } from './_components/about'
import { Hero } from './_components/hero'
import { ProjectsList } from './_components/projects-list'
import { TechStack } from './_components/tech-stack'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="my-16 space-y-20 md:space-y-24">
      <Hero />

      <About />

      <TechStack />
      <div className="space-y-3 text-center">
        <Header title={t('header.title')} subtitle={t('header.subtitle')} />

        <ProjectsList variant="compact" />
      </div>
    </main>
  )
}
