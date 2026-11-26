import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hoverEffects = {
  card: {
    y: -6,
    scale: 1.01,
    boxShadow: '0 14px 30px rgba(15, 47, 74, 0.12)',
  },
  button: { y: -2, scale: 1.03 },
  control: { y: -2, scale: 1.1 },
  logo: { y: -3, scale: 1.06 },
}

function useLandingAnimations(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        container.querySelectorAll('[data-scroll-reveal]').forEach((section) => {
          const items = section.querySelectorAll('[data-reveal-item]')
          const targets = items.length ? items : [section]

          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 84%',
                once: true,
              },
            },
          )
        })
      }, container)

      const tweenTargets = new Set()

      const handlePointerOver = (event) => {
        const element = event.target.closest('[data-gsap-hover]')
        if (!element || !container.contains(element) || element.contains(event.relatedTarget)) {
          return
        }

        tweenTargets.add(element)
        const type = element.dataset.gsapHover
        gsap.to(element, {
          ...(hoverEffects[type] ?? hoverEffects.card),
          duration: 0.24,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const handlePointerOut = (event) => {
        const element = event.target.closest('[data-gsap-hover]')
        if (!element || !container.contains(element) || element.contains(event.relatedTarget)) {
          return
        }

        tweenTargets.add(element)
        gsap.to(element, {
          y: 0,
          scale: 1,
          boxShadow: '0 0 0 rgba(15, 47, 74, 0)',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      container.addEventListener('pointerover', handlePointerOver)
      container.addEventListener('pointerout', handlePointerOut)

      return () => {
        container.removeEventListener('pointerover', handlePointerOver)
        container.removeEventListener('pointerout', handlePointerOut)
        gsap.killTweensOf([...tweenTargets])
        context.revert()
      }
    }, container)

    return () => media.revert()
  }, [containerRef])
}

export default useLandingAnimations
