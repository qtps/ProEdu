import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import AboutSection from '../components/AboutSection.jsx'
import CoursesSection from '../components/CoursesSection.jsx'
import FAQSection from '../components/FAQSection.jsx'
import FeedbackCarousel from '../components/FeedbackCarousel.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import JoinBanner from '../components/JoinBanner.jsx'
import StudentsSection from '../components/StudentsSection.jsx'
import TrustedCompanies from '../components/TrustedCompanies.jsx'
import useLandingAnimations from '../hooks/useLandingAnimations.js'

const routeSections = {
  '/': null,
  '/courses': 'courses',
  '/deals': 'join',
  '/success': 'students',
  '/about': 'about',
  '/register': 'join',
}

function LandingPage() {
  const { pathname } = useLocation()
  const pageRef = useRef(null)

  useLandingAnimations(pageRef)

  useEffect(() => {
    const sectionId = routeSections[pathname]
    const frame = window.requestAnimationFrame(() => {
      if (sectionId) {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'instant', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-[#292929]" ref={pageRef}>
      <Header />
      <main>
        <HeroCarousel />
        <CoursesSection />
        <AboutSection />
        <JoinBanner />
        <StudentsSection />
        <FeedbackCarousel />
        <FAQSection />
        <TrustedCompanies />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
