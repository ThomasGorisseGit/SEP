import { useEffect, useRef } from 'react'

export function usePageScroll() {
  const isScrolling = useRef(false)
  const touchStart = useRef(0)

  useEffect(() => {
    const sections = () =>
      Array.from(document.querySelectorAll('section[data-snap]')) as HTMLElement[]

    const getActive = () => {
      const mid = window.scrollY + window.innerHeight * 0.4
      const all = sections()
      let idx = 0
      for (let i = 0; i < all.length; i++) {
        if (all[i].offsetTop <= mid) idx = i
      }
      return idx
    }

    const goto = (dir: 1 | -1) => {
      if (isScrolling.current) return
      const all = sections()
      const next = getActive() + dir
      if (next < 0 || next >= all.length) return
      isScrolling.current = true
      all[next].scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => { isScrolling.current = false }, 900)
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (Math.abs(e.deltaY) < 20) return
      goto(e.deltaY > 0 ? 1 : -1)
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStart.current - e.changedTouches[0].clientY
      if (Math.abs(delta) < 50) return
      goto(delta > 0 ? 1 : -1)
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goto(1) }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goto(-1) }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
    }
  }, [])
}
