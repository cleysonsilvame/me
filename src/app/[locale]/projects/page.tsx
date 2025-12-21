import { useTranslations } from 'next-intl'

import { Header } from '@/components/header'

import { ProjectsList } from '../_components/projects-list'

export default function Projects() {
  const t = useTranslations('HomePage.header')

  return (
    <div className="my-10 flex-1">
      <div className="space-y-3">
        <Header title={t('title')} subtitle={t('subtitle')} />
      </div>

      <ProjectsList className="mt-8 justify-center" />
    </div>
  )
}
