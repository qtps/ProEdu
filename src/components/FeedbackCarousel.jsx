import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import quoteIcon from '../assets/icons/quate.svg'
import { testimonials } from '../data/landingContent.js'
import SectionHeading from './SectionHeading.jsx'

function FeedbackCarousel() {
  const [activeFeedback, setActiveFeedback] = useState(0)
  const carouselRef = useRef(null)
  const previousFeedback = useRef(activeFeedback)
  const slideDirection = useRef(1)
  const visibleTestimonials = [
    testimonials[activeFeedback],
    testimonials[(activeFeedback + 1) % testimonials.length],
  ]

  useEffect(() => {
    if (previousFeedback.current === activeFeedback) return undefined
    previousFeedback.current = activeFeedback

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const context = gsap.context(() => {
      const cards = carouselRef.current.querySelectorAll('.testimonial-card')
      gsap.fromTo(
        cards,
        { autoAlpha: 0, x: slideDirection.current * 38, scale: 0.97 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
        },
      )
    }, carouselRef.current)

    return () => context.revert()
  }, [activeFeedback])

  const changeFeedback = (step) => {
    slideDirection.current = step
    setActiveFeedback(
      (current) => (current + step + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section
      aria-label="Student testimonials"
      className="feedback-section section-space mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10"
      data-scroll-reveal
    >
      <SectionHeading
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        title="Some Students Feedback"
      />
      <div className="feedback-carousel relative mx-auto mt-10 max-w-5xl" ref={carouselRef}>
        <div aria-live="polite" className="grid gap-5 md:grid-cols-2">
          {visibleTestimonials.map((testimonial) => (
            <article
              className="testimonial-card rounded border border-gray-200 p-5 sm:p-7"
              data-gsap-hover="card"
              data-reveal-item
              key={testimonial.name}
            >
              <div className="flex items-start justify-between">
                <img alt="" className="h-8 w-9" src={quoteIcon} />
                <div aria-label="5 out of 5 stars" className="tracking-wider text-[#ff9900]">
                  ★★★★★
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">{testimonial.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.avatar}
                />
                <div>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="mt-0.5 text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          aria-label="Previous feedback"
          className="feedback-arrow feedback-prev"
          data-gsap-hover="control"
          onClick={() => changeFeedback(-1)}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Next feedback"
          className="feedback-arrow feedback-next"
          data-gsap-hover="control"
          onClick={() => changeFeedback(1)}
          type="button"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default FeedbackCarousel
