import Image from 'next/image'

import { CursorText } from '@/components/cursor-text'

export function Hero() {
  return (
    <div className="flex items-center justify-between gap-2 md:justify-around md:gap-4">
      <h1 className="flex flex-col text-4xl font-bold leading-tight md:text-6xl md:leading-snug">
        <span>Hi 👋,</span>
        <span>My name is</span>
        <CursorText>Cleyson Silva.</CursorText>
        <span>I build things for web.</span>
      </h1>
      <div className="">
        <div className="relative max-h-48 min-h-48 min-w-48 max-w-48 overflow-hidden rounded-full border-8 border-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-origin-border md:max-h-72 md:min-h-72 md:min-w-72 md:max-w-72 ">
          <Image
            alt="Cleyson Silva"
            src="/me.jpg"
            width={400}
            height={400}
            className="absolute grayscale transition-all hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  )
}
