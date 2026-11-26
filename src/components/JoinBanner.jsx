import { Link } from 'react-router-dom'

function JoinBanner() {
  return (
    <section
      className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10"
      data-scroll-reveal
      id="join"
    >
      <div
        className="join-banner flex flex-col items-start justify-between gap-6 rounded bg-[#2c9cdb] px-7 py-8 text-white sm:flex-row sm:items-center sm:px-10 lg:px-16"
        data-gsap-hover="card"
        data-reveal-item
      >
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold">Ready to join?</h2>
          <p className="mt-3 text-sm leading-6 text-white/90">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
        <Link
          className="rounded bg-white px-6 py-3 font-semibold text-[#168bd0] transition hover:bg-blue-50"
          data-gsap-hover="button"
          to="/register"
        >
          Register Now
        </Link>
      </div>
    </section>
  )
}

export default JoinBanner
