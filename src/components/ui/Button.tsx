import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'font-lato font-medium rounded-full px-6 py-2.5 transition-all duration-300 inline-block text-center'

  const variantStyles = {
    primary: 'bg-sh-plum hover:bg-sh-magenta text-white',
    secondary: 'border border-sh-plum text-sh-plum hover:bg-sh-plum hover:text-white',
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
