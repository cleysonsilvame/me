import { useTranslations } from 'next-intl'

import { AnimatedProfile } from '@/app/[locale]/_components/animated-profile'
import { CursorText } from '@/components/cursor-text'

export function Hero() {
  const t = useTranslations('HeroComponent')

  return (
    <div className="flex items-center justify-between gap-2 md:justify-around md:gap-4">
      <h1 className="flex flex-col text-4xl font-bold leading-tight md:text-6xl md:leading-snug">
        <span>
          {t('title')}{' '}
          <span className="inline-block origin-bottom-right animate-wave">
            👋
          </span>
          ,
        </span>
        <span>{t('presentation')}</span>
        <CursorText>Cleyson Silva.</CursorText>
        <span>{t('description')}</span>
      </h1>
      <AnimatedProfile />
    </div>
  )
}
