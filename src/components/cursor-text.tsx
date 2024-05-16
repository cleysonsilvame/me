'use client'
import { useRef } from 'react'

interface CursorTextProps {
  children: React.ReactNode
}

export function CursorText({ children }: CursorTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <span
      className="group relative bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text font-poppins text-transparent"
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ref.current!.style.backgroundPositionX = `${x}px`
        ref.current!.style.backgroundPositionY = `${y}px`
      }}
    >
      {children}
    </span>
  )
}
