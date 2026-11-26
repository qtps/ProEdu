import { Link } from 'react-router-dom'
import { students } from '../data/landingContent.js'

function StudentsSection() {
  return (
    <section
      className="section-space mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10"
      data-scroll-reveal
      id="students"
    >
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold leading-tight">Meet Our Successful Students</h2>
        <p className="mt-4 text-sm leading-6 text-gray-500">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {students.map((student) => (
          <article
            className="student-card overflow-hidden rounded border border-gray-200"
            data-gsap-hover="card"
            data-reveal-item
            key={student.name}
          >
            <img
              alt={student.name}
              className="student-image w-full object-cover"
              src={student.image}
            />
            <div className="px-4 py-3">
              <h3 className="font-semibold">{student.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{student.role}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-7 text-center">
        <Link
          className="primary-button inline-flex rounded px-6 py-3 font-semibold text-white"
          data-gsap-hover="button"
          to="/success"
        >
          View All
        </Link>
      </div>
    </section>
  )
}

export default StudentsSection
