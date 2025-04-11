import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa"

function Header() {
  return (
    <header className="relative w-full py-8 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-7xl font-bold font-playwrite">
            M. Bilal
            <br />
            Mehmood
          </h1>
          <p className="text-xl md:text-2xl mt-2 font-doto text-gray-400">
            Full-stack
            <br />
            developer
          </p>
        </div>

        <div className="hidden md:flex">
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

      <div className="mt-16 flex flex-wrap gap-4">
        <SocialLink href="https://github.com/" icon={<FaGithub />} label="Github" />
        <SocialLink href="https://linkedin.com/" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="mailto:email@example.com" icon={<FaEnvelope />} label="E-mail" />
        <SocialLink href="https://t.me/" icon={<FaTelegram />} label="Telegram" />
        <SocialLink href="https://facebook.com/" icon={<FaFacebook />} label="Facebook" />
        <SocialLink href="https://instagram.com/" icon={<FaInstagram />} label="Instagram" />
      </div>
    </header>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
    >
      {icon}
      <span className="font-mono">{label}</span>
    </a>
  )
}

export default Header
