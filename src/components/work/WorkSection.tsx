"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const projects = [
  { 
    id: 1, 
    name: "Project Alpha", 
    year: "2023", 
    role: "Frontend", 
    tech: "React, WebGL", 
    color: "from-zinc-700 to-zinc-900" 
  },
  { 
    id: 2, 
    name: "System Beta", 
    year: "2022", 
    role: "Fullstack", 
    tech: "Next.js, Node", 
    color: "from-slate-700 to-slate-900" 
  },
  { 
    id: 3, 
    name: "Nexus Core", 
    year: "2021", 
    role: "Design Engineering", 
    tech: "Framer Motion, CSS", 
    color: "from-neutral-700 to-neutral-900" 
  },
];

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Calculate velocity for distortion
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Initialize on first move
      if (lastTime.current === 0) {
        lastTime.current = now;
        lastMouseX.current = e.clientX;
        lastMouseY.current = e.clientY;
      }
      
      const dt = Math.max(1, now - lastTime.current);
      
      const vx = (e.clientX - lastMouseX.current) / dt;
      const vy = (e.clientY - lastMouseY.current) / dt;
      
      velocityX.set(vx);
      velocityY.set(vy);

      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
      lastTime.current = now;

      // Center the image on the cursor (assuming image is 300x400)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, prefersReducedMotion, mouseX, mouseY, velocityX, velocityY]);

  // Map velocity to distortion scale
  const smoothVx = useSpring(velocityX, { damping: 50, stiffness: 400 });
  const smoothVy = useSpring(velocityY, { damping: 50, stiffness: 400 });
  
  const scaleX = useTransform(smoothVx, [-5, 5], [1.1, 0.9]);
  const scaleY = useTransform(smoothVy, [-5, 5], [1.1, 0.9]);

  return (
    <section className="relative py-32 px-8 md:px-24 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm mb-16 uppercase tracking-widest text-foreground/60">01 / Selected Work</p>
        
        <div className="space-y-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-foreground/10 hover:border-foreground/30 transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              // For accessibility, showing inline on focus
              tabIndex={0}
            >
              <h3 className="text-3xl md:text-5xl font-serif group-hover:italic transition-all duration-300">
                {project.name}
              </h3>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-4 md:mt-0 font-mono text-xs md:text-sm text-foreground/60">
                <span>{project.year}</span>
                <span>{project.role}</span>
                <span className="hidden md:inline-block">{project.tech}</span>
              </div>

              {/* Mobile/Touch Inline Image (hidden on desktop hover) */}
              <div className="md:hidden mt-8 w-full h-48 rounded bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-white mix-blend-difference" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Floating Cursor Image Reveal */}
      {isDesktop && !prefersReducedMotion && (
        <motion.div
          className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 overflow-hidden mix-blend-difference"
          style={{
            x: smoothX,
            y: smoothY,
            scaleX,
            scaleY,
            opacity: hoveredProject ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.3 } }}
        >
          {projects.map((project) => (
            <div
              key={`img-${project.id}`}
              className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 ${
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center font-mono text-sm uppercase tracking-widest text-white/50 border border-white/20">
                [Project Image]
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
