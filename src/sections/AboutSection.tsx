import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

export function AboutSection() {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Building modern and user-friendly web applications using React, Next.js, Laravel, PHP, Node.js, PostgreSQL, and MySQL."
    },
    {
      icon: <Cpu className="w-8 h-8 text-soft-accent" />,
      title: "Emerging Tech",
      description: "Expanding my knowledge in IoT, electronics, and AI/ML to explore how intelligent systems solve real-world problems."
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Internship Seeking",
      description: "Looking for opportunities to collaborate, gain hands-on industry experience, and grow as a Full Stack Developer."
    }
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden border-y border-border/10">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-soft-accent">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light"
          >
            I enjoy learning by creating real projects that challenge me to think critically and write clean, maintainable code. Here is a glimpse of what I do.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative p-8 rounded-[2rem] bg-card/20 backdrop-blur-xl border border-border/50 hover:bg-card/40 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(44,172,173,0.2)]"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-10 -right-10 p-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-150 transition-all duration-700 pointer-events-none">
                {/* Large Background Icon */}
                <div className="w-40 h-40 [&>svg]:w-full [&>svg]:h-full text-primary">
                  {card.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted border border-border group-hover:scale-110 group-hover:border-primary/30 transition-transform duration-500 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
