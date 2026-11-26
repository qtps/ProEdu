import { Link } from 'react-router-dom'
import { courses } from '../data/landingContent.js'
import SectionHeading from './SectionHeading.jsx'

function CoursesSection() {
  return (
    <section
      className="section-space mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10"
      id="courses"
    >
      <SectionHeading
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        title="Discover Our Popular Courses"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2" data-scroll-reveal>
        {courses.map((course) => (
          <article
            className="course-card flex overflow-hidden rounded border border-gray-200"
            data-gsap-hover="card"
            data-reveal-item
            key={course.title}
          >
            <img alt="" className="course-image shrink-0 object-cover" src={course.image} />
            <div className="flex min-w-0 flex-col justify-center px-4 py-3 sm:px-5">
              <h3 className="text-base font-semibold leading-snug text-[#4a4a4a] sm:text-lg">
                {course.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-gray-500">
                Some quick example text to build on the card title and make up the bulk of the card.
              </p>
              <p className="mt-2 text-sm font-semibold text-[#168bd0]">Price : 20$</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          className="primary-button inline-flex rounded px-6 py-3 font-semibold text-white"
          data-gsap-hover="button"
          to="/courses"
        >
          See More Courses
        </Link>
      </div>
    </section>
  )
}

export default CoursesSection
