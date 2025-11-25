import { useState, useEffect, useCallback } from 'react'

const CursorBlob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
    
    // Check if hovering over interactive element
    const target = e.target
    const isInteractive = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.closest('a') || 
                          target.closest('button')
    setIsPointer(isInteractive)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  // Don't render on touch devices
  if ('ontouchstart' in window) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out',
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isPointer ? 'w-16 h-16' : 'w-10 h-10'
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          opacity: isVisible ? 0.3 : 0,
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full bg-primary-500 blur-xl transition-all duration-500 ${
            isPointer ? 'w-40 h-40' : 'w-28 h-28'
          }`}
        />
      </div>
    </>
  )
}

export default CursorBlob
