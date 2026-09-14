import { useReducedMotion as useMotionReducedMotion } from 'motion/react'

/**
 * Returns true if the user has requested reduced motion.
 * Wraps Motion's built-in hook for use across the app.
 */
export function useReducedMotion() {
  return useMotionReducedMotion()
}
