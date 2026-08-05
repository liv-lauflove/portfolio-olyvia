import { ArrowUp } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 border-t border-border/40 bg-background text-foreground relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Copy */}
        <div className="text-center md:text-left text-sm text-foreground/75 font-sans">
          <p className="font-medium">
            Designed & Developed by <span className="font-semibold text-foreground">Olyvia Audy Djohari</span> © 2026
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/liv-lauflove"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/olyviaaudy/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/6282339393859"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="WhatsApp"
          >
            <SiWhatsapp className="w-4 h-4" />
          </a>
        </div>

        {/* Right Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-semibold text-foreground/75 hover:text-accent transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <div className="p-2 rounded-full bg-card border border-border/40 group-hover:border-accent group-hover:-translate-y-1 transition-all">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>

      </div>
    </footer>
  );
}
