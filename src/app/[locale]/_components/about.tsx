import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('AboutComponent')

  return (
    <div className="space-y-4 text-muted-foreground">
      {t('content')
        .split('\n\n')
        .map((paragraph, index) => (
          <p key={index} className="text-justify leading-relaxed">
            {paragraph}
          </p>
        ))}
    </div>
  )
}
