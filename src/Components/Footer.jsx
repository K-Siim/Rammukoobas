const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl h-28 md:h-32 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <div className="text-white text-xs">
            <p className="font-semibold">Toeta meid!</p>
            <p className="text-gray-300">MTÜ Rammuklubi</p>
            <p className="font-mono text-gray-300">EE2722200221077993385</p>
          </div>
        </div>
        <a href="/" className="inline-flex items-center" aria-label="Avaleht">
          <img
            src="/rammukoobas.svg"
            alt="Rammukoobas"
            className="h-20 sm:h-24 md:h-28 w-auto mix-blend-screen"
            loading="eager"
            decoding="async"
          />
        </a>
        <div className="flex-1 flex justify-end">
          <p className="text-white text-sm font-medium">Autor: Kevin Siim</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
