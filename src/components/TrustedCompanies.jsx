import { companies } from '../data/landingContent.js'

function TrustedCompanies() {
  return (
    <section
      className="trusted-section mx-auto max-w-[1220px] px-5 pb-16 sm:px-8 lg:px-10"
      data-scroll-reveal
    >
      <h2 className="text-center text-3xl font-bold" data-reveal-item>
        Trusted by over 800+ companies
      </h2>
      <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {companies.map((company) => (
          <img
            alt={company.name}
            className="company-logo"
            data-gsap-hover="logo"
            data-reveal-item
            key={company.name}
            src={company.logo}
          />
        ))}
      </div>
    </section>
  )
}

export default TrustedCompanies
