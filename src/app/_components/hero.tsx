import { AnimatedProfile } from '@/app/_components/animated-profile'
import { CursorText } from '@/components/cursor-text'

export function Hero() {
  return (
    <div className="flex items-center justify-between gap-2 md:justify-around md:gap-4">
      <h1 className="flex flex-col text-4xl font-bold leading-tight md:text-6xl md:leading-snug">
        <span>
          Hi{' '}
          <span className="inline-block origin-bottom-right animate-wave">
            👋
          </span>
          ,
        </span>
        <span>My name is</span>
        <CursorText>Cleyson Silva.</CursorText>
        <span>I build things for web.</span>
      </h1>
      <AnimatedProfile />
    </div>
  )
}
