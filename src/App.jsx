import { useState, useEffect } from 'react'
import CursorBlob from './components/effects/CursorBlob'
import ParticleHero from './components/effects/ParticleHero'
import ScrollReveal from './components/effects/ScrollReveal'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorBlob />
      <Navigation />
      
      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
