import { motion } from "framer-motion";

export function AboutSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen py-24 flex items-center bg-background border-b border-border/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-soft-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-soft-accent/10 transition-colors duration-500"></div>
          
          <div className="relative z-10 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-2">
              Hello, I'm Olyvia Audy Djohari
            </h2>
            <h3 className="text-xl text-primary font-medium mb-6">
              Information Technology Student & Aspiring Full Stack Developer
            </h3>
            
            <p>
              I am passionate about building modern and user-friendly web applications. I've worked with technologies such as <strong className="text-foreground">React, Next.js, Laravel, PHP, Node.js, PostgreSQL and MySQL</strong>, to build full stack web applications. I enjoy learning by creating real projects that challenge me to think critically and write clean, maintainable code.
            </p>
            <p>
              Beyond web development, I'm currently expanding my knowledge in <strong className="text-foreground">Internet of Things (IoT), electronics, and Artificial Intelligence/Machine Learning (AI/ML)</strong>. I enjoy exploring how software can interact with hardware and how intelligent systems can be used to solve real-world problems.
            </p>
            <p>
              I'm currently seeking an internship opportunity where I can collaborate with a team, gain hands-on industry experience, and continue growing as a Full Stack Developer while broadening my expertise in emerging technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                View Projects
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
