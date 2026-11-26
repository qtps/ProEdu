import { useState } from 'react'
import { faqAnswer, questions } from '../data/landingContent.js'
import SectionHeading from './SectionHeading.jsx'

function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <section
      className="faq-section mx-auto max-w-[860px] px-5 pb-20 sm:px-8"
      data-scroll-reveal
      id="faq"
    >
      <SectionHeading
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        title="Frequently Asked Questions"
      />
      <div className="mt-9 space-y-3">
        {questions.map((question, index) => (
          <div
            className="faq-item overflow-hidden rounded-xl border border-gray-200"
            data-reveal-item
            key={`${question}-${index}`}
          >
            <button
              aria-expanded={activeQuestion === index}
              className={`faq-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold ${activeQuestion === index ? 'is-open' : ''}`}
              onClick={() =>
                setActiveQuestion(activeQuestion === index ? -1 : index)
              }
              type="button"
            >
              {question}
              <span aria-hidden="true" className="faq-chevron text-lg font-normal">
                {activeQuestion === index ? '⌃' : '⌄'}
              </span>
            </button>
            {activeQuestion === index && (
              <p className="px-5 py-4 text-sm leading-6 text-gray-500">{faqAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
