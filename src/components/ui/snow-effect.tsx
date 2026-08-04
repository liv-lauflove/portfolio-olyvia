'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SnowEffect() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    // Menghasilkan 40 partikel salju secara acak saat klien dimuat
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // posisi horizontal acak
      delay: Math.random() * -20, // delay negatif agar animasi langsung menyebar dari awal
      duration: Math.random() * 10 + 15, // durasi lambat antara 15-25 detik
      size: Math.random() * 3 + 1 // ukuran 1-4px
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-5%] rounded-full bg-secondary/20 dark:bg-soft-accent/30"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            filter: "blur(1px)",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: ["0vw", `${(Math.random() - 0.5) * 10}vw`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
