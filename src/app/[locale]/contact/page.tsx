import { useTranslations } from 'next-intl'

import { CursorText } from '@/components/cursor-text'
import { generateMetadata as generateMeta } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const metadata = {
    'pt-br': {
      title: 'Entre em Contato - Desenvolvedor Web | Cleyson Silva',
      description:
        'Entre em contato comigo através do LinkedIn. Vamos conversar sobre desenvolvimento web, projetos e oportunidades.',
    },
    en: {
      title: 'Get in Touch - Web Developer | Cleyson Silva',
      description:
        "Get in touch with me through LinkedIn. Let's talk about web development, projects and opportunities.",
    },
  }

  const meta = metadata[locale as keyof typeof metadata] || metadata.en

  return generateMeta(
    {
      title: meta.title,
      description: meta.description,
      url: '/contact',
    },
    locale,
  )
}

export default function Contact() {
  const t = useTranslations('ContactPage')
  return (
    <div className="flex flex-1 items-center text-center">
      <h2 className="text-3xl font-bold leading-tight md:text-6xl md:leading-snug">
        {t.rich('description', {
          link: (children) => (
            <a
              href="http://linkedin.com/in/cleyson-silva-639b01188"
              target="_blank"
              title="Linkedin"
            >
              <CursorText>{children}</CursorText>
            </a>
          ),
        })}
      </h2>
    </div>
  )
}
