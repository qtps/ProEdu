import { Link } from 'react-router-dom'
import { socialLinks } from '../data/landingContent.js'

function Footer() {
  return (
    <footer className="bg-[#1d1d1d] px-5 py-14 text-center text-white">
      <h2 className="text-2xl font-bold">Pro Edu</h2>
      <address className="mt-3 not-italic text-sm leading-6 text-white/75">
        Office 41, Zawaya Building, Al Muscat,
        <br /> Sultanate of Oman
      </address>
      <div className="mt-3 flex justify-center gap-2 text-sm text-white/75">
        <Link className="hover:text-white" to="/about">
          Privacy Policy
        </Link>
        <span aria-hidden="true">|</span>
        <Link className="hover:text-white" to="/about">
          Terms of use
        </Link>
      </div>
      <div aria-label="Social media" className="mt-5 flex justify-center gap-3">
        {socialLinks.map((social) => (
          <a
            aria-label={social.name}
            className="social-link"
            data-gsap-hover="button"
            href="#"
            key={social.name}
            onClick={(event) => event.preventDefault()}
          >
            <img alt="" src={social.icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
