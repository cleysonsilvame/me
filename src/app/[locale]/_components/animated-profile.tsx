'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AnimatedProfile() {
  return (
    <motion.div
      className="relative max-h-48 min-h-48 min-w-48 max-w-48 overflow-hidden border-8 border-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-origin-border md:max-h-72 md:min-h-72 md:min-w-72 md:max-w-72"
      initial={{ borderRadius: '100%' }}
      whileHover={{ borderRadius: '10%' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <Image
          alt="Cleyson Silva"
          src="/me.jpg"
          width={400}
          height={400}
          className="grayscale transition-all hover:grayscale-0"
        />
      </motion.div>
    </motion.div>
  )
}
