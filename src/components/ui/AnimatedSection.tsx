'use client'
import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({
  children,
  className = '',
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}
