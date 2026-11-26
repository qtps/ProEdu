function SectionHeading({ title, description }) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  )
}

export default SectionHeading
