import { useTranslations } from 'next-intl'

import { Header } from '@/components/header'
import { generateMetadata as generateMeta } from '@/lib/metadata'

import { ProjectsList } from '../_components/projects-list'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const metadata = {
    'pt-br': {
      title: 'Projetos Web - React, TypeScript & Next.js | Cleyson Silva',
      description:
        'Confira os projetos que construí até agora, incluindo aplicações web com React, TypeScript, Next.js e muito mais.',
    },
    en: {
      title: 'Web Projects - React, TypeScript & Next.js | Cleyson Silva',
      description:
        'Check out the projects I have built so far, including web applications with React, TypeScript, Next.js and more.',
    },
  }

  const meta = metadata[locale as keyof typeof metadata] || metadata.en

  return generateMeta(
    {
      title: meta.title,
      description: meta.description,
      url: '/projects',
    },
    locale,
  )
}

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
