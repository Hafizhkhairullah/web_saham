/**
 * Spotlight component - adapted from ibelick/spotlight
 * Original: framer-motion → adapted to motion/react (already installed)
 *
 * Attaches mousemove/mouseenter/mouseleave to its parentElement.
 * Place this component INSIDE the element you want to spotlight.
 * The parent must be position:relative and overflow:hidden.
 */
import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useSpring, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

export function Spotlight({
  className,
  style,
  size = 200,
  springOptions = { bounce: 0 },
}) {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [parentElement, setParentElement] = useState(null)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop  = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement
      if (parent) {
        // Ensure parent is position:relative + overflow:hidden
        parent.style.position = 'relative'
        parent.style.overflow = 'hidden'
        setParentElement(parent)
      }
    }
  }, [])

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return
      const { left, top } = parentElement.getBoundingClientRect()
      mouseX.set(event.clientX - left)
      mouseY.set(event.clientY - top)
    },
    [mouseX, mouseY, parentElement]
  )

  useEffect(() => {
    if (!parentElement) return

    const onEnter = () => setIsHovered(true)
    const onLeave = () => setIsHovered(false)

    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseenter', onEnter)
    parentElement.addEventListener('mouseleave', onLeave)

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove)
      parentElement.removeEventListener('mouseenter', onEnter)
      parentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [parentElement, handleMouseMove])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full blur-xl transition-opacity duration-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 80%)',
        ...style,
      }}
    />
  )
}
