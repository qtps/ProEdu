import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Deals', path: '/deals' },
  { label: 'Success', path: '/success' },
  { label: 'About', path: '/about' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <Link className="text-[27px] font-bold tracking-tight text-[#4a4a4a]" to="/">
        Pro Edu
      </Link>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="menu-toggle rounded-md border border-gray-200 p-2 text-gray-700 md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span className="block h-0.5 w-5 bg-current" />
        <span className="mt-1 block h-0.5 w-5 bg-current" />
        <span className="mt-1 block h-0.5 w-5 bg-current" />
      </button>
      <nav
        aria-label="Main navigation"
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
      >
        {navItems.map((item) => (
          <Link
            className="nav-link"
            key={item.label}
            onClick={() => setMenuOpen(false)}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="mobile-register rounded border border-[#2c9cdb] px-5 py-2 font-semibold text-[#168bd0] transition hover:bg-[#2c9cdb] hover:text-white md:hidden"
          data-gsap-hover="button"
          onClick={() => setMenuOpen(false)}
          to="/register"
        >
          Register
        </Link>
      </nav>
      <Link
        className="hidden rounded border border-[#2c9cdb] px-5 py-2 font-semibold text-[#168bd0] transition hover:bg-[#2c9cdb] hover:text-white md:inline-flex"
        data-gsap-hover="button"
        to="/register"
      >
        Register
      </Link>
    </header>
  )
}

export default Header
