'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'auto', size = 'md' }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizes = {
    sm: { width: 130, height: 36 },
    md: { width: 180, height: 50 },
    lg: { width: 240, height: 66 },
  }

  const dimensions = sizes[size]

  // Determine which variant to use
  let displayVariant = variant
  if (variant === 'auto' && mounted) {
    displayVariant = theme === 'dark' ? 'dark' : 'light'
  } else if (variant === 'auto') {
    displayVariant = 'dark' // default to dark on first load
  }

  // Dark variant colors
  const darkColors = {
    gradient: 'url(#sil-dark)',
    wordmark: '#C4952A',
    subtitle: '#E8A0B4',
  }

  // Light variant colors
  const lightColors = {
    gradient: 'url(#sil-light)',
    wordmark: '#8B1A6B',
    subtitle: '#8B4A6B',
  }

  const colors = displayVariant === 'dark' ? darkColors : lightColors

  return (
    <svg
      viewBox="0 0 260 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="She's and Hers Beauty Palace"
      width={dimensions.width}
      height={dimensions.height}
    >
      <defs>
        <linearGradient id="sil-dark" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#8B1A6B" />
          <stop offset="100%" stopColor="#C4527A" />
        </linearGradient>
        <linearGradient id="sil-light" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#8B1A6B" />
          <stop offset="100%" stopColor="#C4527A" />
        </linearGradient>
      </defs>

      {/* Flowing hair */}
      <path
        d="M30,2 C36,0 44,2 46,9 C48,15 44,11 41,16 C46,13 50,16 48,23 C46,18 42,20 41,26 C44,23 47,25 45,32 C43,27 39,28 38,34 L32,34 C33,26 30,22 28,15 C26,8 23,5 30,2 Z"
        fill={colors.gradient}
      />

      {/* Head */}
      <path
        d="M18,14 C18,6 24,2 30,3 C36,4 40,9 39,17 C38,24 34,29 28,29 C22,29 18,22 18,14 Z"
        fill={colors.gradient}
      />

      {/* Neck */}
      <rect x="24" y="28" width="8" height="7" rx="3" fill={colors.gradient} />

      {/* Shoulders */}
      <path
        d="M10,35 C14,32 20,31 24,32 C28,32 33,31 38,35 C40,37 38,42 36,42 L12,42 C10,42 8,37 10,35 Z"
        fill={colors.gradient}
      />

      {/* Wordmark */}
      <text
        x="56"
        y="24"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="17"
        fontWeight="700"
        fill={colors.wordmark}
        letterSpacing="1.5"
      >
        {"SHE'S &"}
      </text>
      <text
        x="56"
        y="44"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="17"
        fontWeight="700"
        fill={colors.wordmark}
        letterSpacing="1.5"
      >
        {"HER'S"}
      </text>

      {/* Gold underline */}
      <rect
        x="56"
        y="48"
        width="108"
        height="1.5"
        rx="1"
        fill={colors.wordmark}
        opacity="0.45"
      />

      {/* Subtitle */}
      <text
        x="56"
        y="60"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="8.5"
        fontWeight="400"
        fill={colors.subtitle}
        letterSpacing="3"
      >
        BEAUTY PALACE
      </text>
    </svg>
  )
}
