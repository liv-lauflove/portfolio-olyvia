import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Key, Lightbulb, AlertTriangle, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/projectsData";
import { useEffect } from "react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
        />

        {/* Modal Window */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border/60 rounded-3xl shadow-2xl overflow-y-auto z-50 flex flex-col my-auto"
        >
          {/* Sticky Header Bar */}
          <div className="sticky top-0 bg-card/90 backdrop-blur-md px-6 py-4 border-b border-border/40 flex items-center justify-between z-20">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Image Preview Banner */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-inner group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>

            {/* Action Buttons & Credentials Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-muted/40 border border-border/40">
              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-all hover:scale-105"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-md shadow-accent/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Website</span>
                  </a>
                )}
              </div>

              {/* Demo Credentials Box */}
              {project.demoCredentials && (
                <div className="flex items-center gap-2 text-xs font-mono bg-card px-4 py-2 rounded-xl border border-accent/30 text-foreground">
                  <Key className="w-3.5 h-3.5 text-accent" />
                  <span>
                    Demo Email: <strong>{project.demoCredentials.email}</strong> | Pass: <strong>{project.demoCredentials.password}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Project Overview */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                Project Overview
              </h4>
              <p className="text-foreground/80 leading-relaxed font-sans text-sm md:text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-card border border-destructive/20 shadow-sm space-y-2">
                <h5 className="text-sm font-bold text-destructive flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  The Problem
                </h5>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-accent/30 shadow-sm space-y-2">
                <h5 className="text-sm font-bold text-accent flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  The Solution
                </h5>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border/40">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-foreground/85">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Used */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 border border-accent/20 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
