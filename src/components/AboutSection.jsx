import { Link } from 'react-router-dom'
import learningImage from '../assets/images/elearning.png'

function AboutSection() {
  return (
    <section
      className="section-space mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10"
      data-scroll-reveal
      id="about"
    >
      <div className="about-card grid overflow-hidden bg-[#f2f9fd] md:grid-cols-2" data-reveal-item>
        <img
          alt="Student studying with a laptop"
          className="about-image h-full w-full object-cover"
          src={learningImage}
        />
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Explore The elearning Institute
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don’t
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
            the Internet tend to repeat predefined.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat value="3.2K+" label="Online Course" />
            <Stat value="600+" label="Expert member" />
            <Stat value="1K+" label="Rating & Review" />
          </div>
          <Link
            className="primary-button mt-6 w-fit rounded px-5 py-2.5 font-semibold text-white"
            data-gsap-hover="button"
            to="/about"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-xl font-bold sm:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</p>
    </div>
  )
}

export default AboutSection
