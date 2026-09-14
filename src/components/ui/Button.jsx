import { forwardRef } from 'react'

/**
 * Reusable Button component.
 * variant: 'primary' | 'secondary' | 'ghost'
 */
const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    icon,
    iconPosition = 'right',
    ...props
  },
  ref
) {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-semibold leading-none whitespace-nowrap',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-3',
    'disabled:opacity-50 disabled:pointer-events-none',
    'cursor-pointer',
  ]

  const sizes = {
    sm: 'text-sm px-4 py-2.5 min-h-[40px]',
    md: 'text-base px-6 py-3.5 min-h-[48px]',
    lg: 'text-base px-8 py-4 min-h-[52px]',
  }

  const variants = {
    primary: [
      'bg-[var(--red-primary)] text-white',
      'rounded-[var(--radius-pill)]',
      'hover:bg-[var(--red-bright)]',
      'hover:-translate-y-0.5',
      'hover:shadow-[0_0_24px_rgba(225,29,46,0.4)]',
      'active:translate-y-0 active:scale-[0.98]',
      'focus-visible:outline-[var(--red-bright)]',
    ],
    secondary: [
      'bg-transparent text-[var(--white)]',
      'border border-[rgba(255,255,255,0.15)]',
      'rounded-[var(--radius-pill)]',
      'hover:bg-[rgba(255,255,255,0.06)]',
      'hover:border-[rgba(255,255,255,0.25)]',
      'hover:-translate-y-0.5',
      'active:translate-y-0 active:scale-[0.98]',
      'focus-visible:outline-[var(--white)]',
    ],
    ghost: [
      'bg-transparent text-[var(--gray-light)]',
      'rounded-[var(--radius-md)]',
      'hover:text-[var(--white)] hover:bg-[rgba(255,255,255,0.06)]',
      'active:scale-[0.98]',
      'focus-visible:outline-[var(--white)]',
    ],
  }

  const classes = [
    ...base,
    sizes[size],
    ...variants[variant],
    className,
  ].join(' ')

  return (
    <button ref={ref} className={classes} {...props}>
      {icon && iconPosition === 'left' && (
        <span aria-hidden="true" className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span aria-hidden="true" className="shrink-0">{icon}</span>
      )}
    </button>
  )
})

export default Button
