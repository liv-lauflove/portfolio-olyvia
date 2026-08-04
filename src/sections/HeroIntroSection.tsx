import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroIntroSection() {
  const whatsappUrl = "https://wa.me/6282339393859?text=Halo%20Olyvia%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20kesempatan%20proyek%2Fmagang.";

  return (
    <section 
      id="intro" 
      className="min-h-screen relative overflow-hidden flex flex-col justify-between pt-14 md:pt-20 pb-0 px-6 md:px-12 lg:px-16 bg-background text-foreground select-none"
    >
      {/* Background Gradient & Luminous Radial Glow */}
      <div className="absolute inset-0 bg-background z-0"></div>
      
      {/* Dynamic Radial Glow Sphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[600px] sm:h-[850px] lg:h-[1100px] rounded-full blur-[120px] sm:blur-[180px] pointer-events-none opacity-90 dark:opacity-75 z-0"
        style={{
          background: 'radial-gradient(circle, var(--soft-accent) 0%, var(--accent) 40%, var(--primary) 70%, transparent 85%)'
        }}
      ></div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#081821_1px,transparent_1px)] dark:bg-[radial-gradient(#F5FFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0"></div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between flex-1">
        
        {/* Top Centered Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pt-2 md:pt-4 z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground font-sans">
            Hi I'm <span className="font-semibold">Olyvia</span>
          </h1>
          
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.5rem] font-serif italic text-foreground tracking-tight leading-[0.85] md:leading-[0.8] mt-1 md:mt-2 drop-shadow-sm">
            Full Stack Developer
          </h2>
        </motion.div>

        {/* Center Main Row: Left Description + Center Large Portrait Cutout (Flush to bottom) + Right CTA Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-2 mt-auto relative z-20">
          
          {/* Left Side: PRD Description */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 flex lg:justify-start justify-center pb-8 lg:pb-16 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-foreground/85 font-sans font-normal text-sm sm:text-base md:text-lg leading-relaxed max-w-xs md:max-w-sm">
              I enjoy building modern, responsive, and user-friendly web applications. I'm passionate about transforming ideas into meaningful digital experiences while continuously learning new technologies.
            </p>
          </motion.div>

          {/* Center Column: Extra Large Portrait Cutout sitting flush at the bottom edge */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 flex justify-center items-end relative -mt-10 sm:-mt-20 md:-mt-32 lg:-mt-44 xl:-mt-52 z-20 pointer-events-auto order-1 lg:order-2"
          >
            <div className="relative group flex items-end">
              {/* Subtle halo behind photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <img 
                src="/profile.png" 
                alt="Olyvia Audy Djohari" 
                className="h-[460px] sm:h-[580px] md:h-[700px] lg:h-[780px] xl:h-[860px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] grayscale contrast-110 brightness-105 group-hover:grayscale-0 transition-all duration-700 block mb-0 align-bottom"
              />
            </div>
          </motion.div>

          {/* Right Side: Get in Touch Button (Same Line Alignment) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 flex lg:justify-end justify-center pb-8 lg:pb-16 order-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-base sm:text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <span>Get in Touch</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
