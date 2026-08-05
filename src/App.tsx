import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { HeroIntroSection } from './sections/HeroIntroSection'
import { AboutSection } from './sections/AboutSection'
import { TechStackSection } from './sections/TechStackSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Navbar />
      
      <main>
        {/* Phase 2: Hero Quote & Intro */}
        <HeroSection />

        {/* Phase 3: Hero Introduction */}
        <HeroIntroSection />

        {/* Phase 4: About Me */}
        <AboutSection />

        {/* Phase 5: Tech Stack */}
        <TechStackSection />

        {/* Phase 6: Featured Projects */}
        <ProjectsSection />

        {/* Phase 7: Contact */}
        <ContactSection />
      </main>

      {/* Phase 8: Footer */}
      <Footer />
    </div>
  )
}

export default App
