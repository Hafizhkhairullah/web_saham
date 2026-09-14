/**
 * Card components - adapted from shadcn/ui
 * TypeScript removed, forwardRef preserved, cn utility wired to @/lib/utils
 */
import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-[var(--radius-lg)] border border-[var(--border-card)] bg-[var(--bg-card)] shadow-sm',
        className
      )}
      {...props}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
})
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn('text-sm', className)}
      style={{ color: 'var(--gray-light)' }}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
})
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
})
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
