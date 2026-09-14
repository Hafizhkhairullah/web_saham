/**
 * Page container with max-width and horizontal padding.
 * Expands for QHD (2560px) and 4K (3840px) displays.
 */
export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`w-full max-w-[1400px] 3xl:max-w-[2000px] 4xl:max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-12 3xl:px-20 4xl:px-28 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
