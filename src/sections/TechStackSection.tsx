import { motion } from "framer-motion";
import MarqueeRaw from "react-fast-marquee";
import { 
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiLaravel, SiPhp,
  SiMysql, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiFigma, SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

const Marquee = (MarqueeRaw as any).default || MarqueeRaw;

const techStackRow1 = [
  { name: "HTML", icon: <SiHtml5 size={45} /> },
  { name: "CSS", icon: <FaCss3Alt size={45} /> },
  { name: "JavaScript", icon: <SiJavascript size={45} /> },
  { name: "TypeScript", icon: <SiTypescript size={45} /> },
  { name: "React", icon: <SiReact size={45} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={45} /> },
  { name: "Next.js", icon: <SiNextdotjs size={45} /> },
  { name: "Node.js", icon: <SiNodedotjs size={45} /> },
  { name: "Laravel", icon: <SiLaravel size={45} /> },
];

const techStackRow2 = [
  { name: "PHP", icon: <SiPhp size={45} /> },
  { name: "MySQL", icon: <SiMysql size={45} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={45} /> },
  { name: "Supabase", icon: <SiSupabase size={45} /> },
  { name: "Git", icon: <SiGit size={45} /> },
  { name: "GitHub", icon: <SiGithub size={45} /> },
  { name: "VS Code", icon: <VscVscode size={45} /> },
  { name: "Figma", icon: <SiFigma size={45} /> },
  { name: "Vercel", icon: <SiVercel size={45} /> },
];

const TechCard = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="group relative mx-4 flex flex-col items-center justify-center bg-card/20 backdrop-blur-md border border-border/50 rounded-[1.5rem] w-32 h-32 hover:bg-card hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(44,172,173,0.3)] my-4">
    <div className="text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:-translate-y-3">
      {icon}
    </div>
    <span className="absolute bottom-4 text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
      {name}
    </span>
  </div>
);

export function TechStackSection() {
  return (
    <section id="skills" className="py-32 flex items-center justify-center border-b border-border/10 overflow-hidden relative bg-background">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-0 w-full">
        <div className="text-center mb-16 px-6 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-soft-accent">Use</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 font-light"
          >
            These are the technologies and tools I use to build modern web applications.
          </motion.p>
        </div>

        <div className="flex flex-col space-y-4 w-full relative">
          
          {/* Edge Fades for the Carousels */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 - Left to Right */}
          <div className="w-full">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {techStackRow1.map((tech, index) => (
                <TechCard key={`row1-${index}`} name={tech.name} icon={tech.icon} />
              ))}
            </Marquee>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="w-full">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true}>
              {techStackRow2.map((tech, index) => (
                <TechCard key={`row2-${index}`} name={tech.name} icon={tech.icon} />
              ))}
            </Marquee>
          </div>
          
        </div>

      </div>
    </section>
  )
}
