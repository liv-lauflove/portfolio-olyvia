import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { HeroIntroSection } from './sections/HeroIntroSection'
import { AboutSection } from './sections/AboutSection'
import { TechStackSection } from './sections/TechStackSection'
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
        <section id="projects" className="min-h-screen flex items-center justify-center border-b border-border/10 bg-muted/20">
          <h2 className="text-3xl font-bold opacity-50">Projects Section Placeholder</h2>
        </section>

        {/* Phase 7: Contact */}
        <section id="contact" className="min-h-[80vh] flex items-center justify-center">
          <h2 className="text-3xl font-bold opacity-50">Contact Section Placeholder</h2>
        </section>
      </main>

      {/* Footer will go here */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        Designed & Developed by Olyvia Audy Djohari © 2026
      </footer>
    </div>
  )
}

export default App
