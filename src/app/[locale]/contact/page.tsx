import { useTranslations } from 'next-intl'

import { CursorText } from '@/components/cursor-text'

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
