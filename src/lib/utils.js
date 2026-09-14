import { clsx } from 'clsx'

/**
 * Utility to merge class names cleanly.
 * Lightweight version (no tailwind-merge needed for Tailwind v4).
 */
export function cn(...inputs) {
  return clsx(inputs)
}
