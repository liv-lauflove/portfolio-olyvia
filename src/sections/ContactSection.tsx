import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MagneticButton } from "@/components/MagneticButton";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "olyviaaudydj@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/olyviaaudy/";
  const githubUrl = "https://github.com/liv-lauflove";
  const whatsappUrl = "https://wa.me/6282339393859?text=Halo%20Olyvia%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20kesempatan%20proyek%2Fmagang.";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      name: "Email",
      handle: email,
      href: `mailto:${email}`,
      icon: <Mail className="w-6 h-6 text-accent" />,
      actionText: "Send Email",
      isEmail: true,
    },
    {
      name: "LinkedIn",
      handle: "in/olyviaaudy",
      href: linkedinUrl,
      icon: <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />,
      actionText: "Connect",
      isEmail: false,
    },
    {
      name: "GitHub",
      handle: "liv-lauflove",
      href: githubUrl,
      icon: <SiGithub className="w-6 h-6 text-foreground" />,
      actionText: "View GitHub",
      isEmail: false,
    },
    {
      name: "WhatsApp",
      handle: "+62 823 3939 3859",
      href: whatsappUrl,
      icon: <SiWhatsapp className="w-6 h-6 text-[#25D366]" />,
      actionText: "Direct Chat",
      isEmail: false,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-36 relative overflow-hidden bg-background text-foreground border-b border-border/10 select-none"
    >
      {/* Background Luminous Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1050px] h-[600px] sm:h-[850px] lg:h-[1050px] rounded-full blur-[130px] sm:blur-[180px] pointer-events-none opacity-80 dark:opacity-65 -z-10"
        style={{
          background: 'radial-gradient(circle, var(--soft-accent) 0%, var(--accent) 35%, var(--primary) 70%, transparent 85%)'
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-soft-accent">Something Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-sans font-normal text-base md:text-xl leading-relaxed"
          >
            I'm currently open for internship opportunities & full-stack development projects. Feel free to connect via any of the channels below!
          </motion.p>
        </div>

        {/* Magnetic Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactChannels.map((channel, idx) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              className="flex justify-center"
            >
              <MagneticButton
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.3}
                className="w-full"
              >
                <div className="group relative w-full h-full p-6 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/60 hover:border-accent/80 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(44,172,173,0.3)] flex flex-col justify-between space-y-6">
                  
                  {/* Top Row: Icon + External Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-muted/50 border border-border/40 group-hover:scale-110 transition-transform">
                      {channel.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Channel Name & Handle */}
                  <div className="space-y-1 text-left">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                      {channel.name}
                    </span>
                    <p className="text-sm font-bold text-foreground truncate group-hover:text-accent transition-colors">
                      {channel.handle}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-2 flex items-center justify-between border-t border-border/20 text-xs font-semibold text-accent">
                    <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      {channel.actionText} &rarr;
                    </span>

                    {channel.isEmail && (
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-lg bg-muted/60 hover:bg-accent hover:text-accent-foreground text-foreground transition-colors cursor-pointer"
                        title="Copy email address"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
