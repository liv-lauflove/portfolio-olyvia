import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
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
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 border-b border-border/10">
          <h1 className="text-4xl font-bold opacity-50">Hero Section Placeholder</h1>
        </section>

        {/* Phase 4: About Me */}
        <section id="about" className="min-h-screen flex items-center justify-center border-b border-border/10 bg-muted/20">
          <h2 className="text-3xl font-bold opacity-50">About Section Placeholder</h2>
        </section>

        {/* Phase 5: Tech Stack */}
        <section id="skills" className="min-h-[50vh] flex items-center justify-center border-b border-border/10">
          <h2 className="text-3xl font-bold opacity-50">Skills Section Placeholder</h2>
        </section>

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
