/**
 * SplineScene - lazy-loaded Spline 3D scene wrapper
 * Adapted from original splite.tsx (TypeScript removed, 'use client' removed - not Next.js)
 */
import { Suspense, lazy } from 'react'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'var(--red-primary)', borderTopColor: 'transparent' }}
        aria-label="Memuat scene 3D"
      />
    </div>
  )
}

export function SplineScene({ scene, className }) {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene={scene}
        className={cn('w-full h-full', className)}
      />
    </Suspense>
  )
}
