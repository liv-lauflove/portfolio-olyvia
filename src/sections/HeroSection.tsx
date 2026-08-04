'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SnowEffect } from "@/components/ui/snow-effect";

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLDivElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen w-full relative bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient & Noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50 opacity-80 z-0"></div>

      {/* Snow Effect */}
      <SnowEffect />

      <Card className="w-full h-screen bg-transparent border-none relative overflow-hidden flex flex-col items-center justify-center rounded-none shadow-none z-10">
        
        {/* Spotlight Effect - Brighter and Larger */}
        <Spotlight
          className="z-10"
          size={500}
        />
        
        <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row relative z-20 items-center">
          
          {/* Left content: Hero Quote */}
          <div className="flex-1 relative z-20 flex flex-col justify-center text-center lg:text-left pointer-events-none">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                "Every expert was once a <span className="text-secondary dark:text-soft-accent">beginner</span> who chose to <span className="text-primary">start</span>."
              </h1>
            </motion.div>
          </div>

          {/* Right content: 3D Scene */}
          <div className="flex-1 relative w-full h-[50vh] lg:h-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity z-30 cursor-pointer pointer-events-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={(e: any) => handleScrollTo(e, "#intro")}
        >
          <span className="text-sm font-medium mb-2 text-foreground">Scroll to Explore</span>
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </Card>
    </section>
  )
}
