import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleHero from '../effects/ParticleHero'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      
      {/* Particle effect */}
      <ParticleHero />

      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">
              Hi, I'm Mahizhnan.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Cybersecurity Enthusiast • Full-Stack Developer • CTF Player
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            3rd-year CSE student building security systems, solving CTFs, and creating real-world software projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-semibold"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
            </a>
            <a
              href="https://github.com/MahizhnanC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass hover:bg-white/10 text-white rounded-lg transition-colors duration-300 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahizhnanc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass hover:bg-white/10 text-white rounded-lg transition-colors duration-300 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-400 transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default Hero
