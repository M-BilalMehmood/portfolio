import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa"

function Hero() {
    return (
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-bold font-playwrite mb-6">
            Full-stack
            <br />
            Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl font-doto text-gray-400">
            My goal is to write maintainable, clean and understandable code to process requirements and implement them.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex gap-5">
            <SocialLink href="https://github.com/" icon={<FaGithub />} label="Github" />
            <SocialLink href="https://linkedin.com/" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="mailto:email@example.com" icon={<FaEnvelope />} label="E-mail" />
            <SocialLink href="https://t.me/" icon={<FaTelegram />} label="Telegram" />
            <SocialLink href="https://facebook.com/" icon={<FaFacebook />} label="Facebook" />
            <SocialLink href="https://instagram.com/" icon={<FaInstagram />} label="Instagram" />
          </div>
        </div>
      </section>
    )
  }
  
  function SocialLink({ href, icon, label }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors text-sm"
      >
        {icon}
        <span className="font-mono">{label}</span>
      </a>
    )
  }

  export default Hero
  