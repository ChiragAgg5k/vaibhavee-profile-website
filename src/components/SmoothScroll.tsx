import { useEffect } from 'react'

/**
 * Intercepts clicks on same-page anchor links and smooth-scrolls to the
 * target section, matching the prototype behaviour.
 */
export function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#') || href.length < 2) return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      const top = (el as HTMLElement).offsetTop - 20
      window.scrollTo({ top, behavior: 'smooth' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
