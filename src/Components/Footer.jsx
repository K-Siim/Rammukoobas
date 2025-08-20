const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl h-28 md:h-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <a href="/" className="inline-flex items-center" aria-label="Avaleht">
          <img
            src="/rammukoobas.svg"
            alt="Rammukoobas"
            className="h-20 sm:h-24 md:h-28 w-auto mix-blend-screen"
            loading="eager"
            decoding="async"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
