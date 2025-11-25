import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/MahizhnanC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahizhnanc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:acmahizhnan@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
