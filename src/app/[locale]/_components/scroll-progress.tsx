'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-2 origin-[0%] bg-gradient-to-r from-blue-600 to-green-500"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
