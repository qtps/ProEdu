import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { heroSlides } from '../data/landingContent.js'

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]
  const slideImageRef = useRef(null)
  const slideContentRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.fromTo(
        slideImageRef.current,
        { scale: 1.05, autoAlpha: 0.75 },
        { scale: 1, autoAlpha: 1, duration: 0.65, ease: 'power2.out' },
      )
      gsap.fromTo(
        slideContentRef.current,
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power2.out' },
      )
    })

    return () => context.revert()
  }, [activeSlide])

  const changeSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      aria-label="Featured courses"
      className="hero-carousel relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10"
    >
      <div className="hero-slide relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-md sm:min-h-[500px] lg:min-h-[570px]">
        <img
          alt=""
          className="hero-background absolute inset-0 h-full w-full object-cover"
          key={slide.image}
          ref={slideImageRef}
          src={slide.image}
        />
        <div className="absolute inset-0 bg-black/60" />
        <button
          aria-label="Previous featured slide"
          className="carousel-arrow left-4 sm:left-7"
          data-gsap-hover="control"
          onClick={() => changeSlide(-1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div
          aria-live="polite"
          className="relative z-10 mx-auto max-w-3xl px-12 text-center text-white"
          ref={slideContentRef}
        >
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
            {slide.description}
          </p>
          <Link
            className="primary-button mt-7 inline-flex rounded px-6 py-3 font-semibold text-white"
            data-gsap-hover="button"
            to="/courses"
          >
            Get Started
          </Link>
          <div aria-label="Choose a featured slide" className="mt-7 flex justify-center gap-2">
            {heroSlides.map((item, index) => (
              <button
                aria-label={`Show slide ${index + 1}: ${item.title}`}
                aria-pressed={activeSlide === index}
                className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-7 bg-white' : 'w-2.5 bg-white/55'}`}
                key={item.title}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            ))}
          </div>
        </div>
        <button
          aria-label="Next featured slide"
          className="carousel-arrow right-4 sm:right-7"
          data-gsap-hover="control"
          onClick={() => changeSlide(1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  )
}

export default HeroCarousel
