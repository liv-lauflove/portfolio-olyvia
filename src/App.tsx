import { useEffect } from 'react'
import Lenis from 'lenis'
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
      {/* Navbar will go here */}
      
      <main>
        {/* Phase 2: Hero Quote */}
        {/* Phase 3: Hero Intro */}
        {/* Phase 4: About Me */}
        {/* Phase 5: Tech Stack */}
        {/* Phase 6: Featured Projects */}
        {/* Phase 7: Contact */}
      </main>

      {/* Footer will go here */}
    </div>
  )
}

export default App
