function Header() {
  return (
    <header className="relative w-full py-8 px-8 md:px-16">
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-open-sans">
            M. Bilal
            <br />
            Mehmood
          </h1>
        </div>
        <div className="flex-1 flex center">
          <nav className="flex gap-8">
            <a href="/" className="text-white hover:text-gray-400 transition-colors">
              Main
            </a>
            <a href="#about" className="text-white hover:text-gray-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-white hover:text-gray-400 transition-colors">
              Projects
            </a>
            <a href="#articles" className="text-white hover:text-gray-400 transition-colors">
              Articles
            </a>
          </nav>
        </div>
        
      </div>
    </header>
  )
}



export default Header