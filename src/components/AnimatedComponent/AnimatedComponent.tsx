'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants: Variants = {
  hidden: (custom: { direction: string }) => ({
    opacity: 0,
    x: custom.direction === 'left' ? -50 : 
       custom.direction === 'right' ? 50 : 
       custom.direction === 'none' ? 0 : 0,
    y: custom.direction === 'top' ? -50 : 
       custom.direction === 'bottom' ? 50 : 
       custom.direction === 'none' ? 0 : 0,
  }),
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function AnimatedComponent({
  children,
  direction = 'left', // Default remains 'left' for backward compatibility
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'none'
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      custom={{ direction, delay }}
      style={{ display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
