"use client";

import { useState } from "react";

const DecisionTree = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-70 text-foreground">
    <circle cx="60" cy="10" r="4" fill="currentColor" />
    <path d="M60 14 L30 30 M60 14 L90 30" />
    <circle cx="30" cy="34" r="4" />
    <circle cx="90" cy="34" r="4" />
    <path d="M30 38 L15 54 M30 38 L45 54 M90 38 L75 54 M90 38 L105 54" />
    <circle cx="15" cy="54" r="2" />
    <circle cx="45" cy="54" r="2" />
    <circle cx="75" cy="54" r="2" />
    <circle cx="105" cy="54" r="2" />
  </svg>
);

const Pipeline = () => (
  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-70 text-foreground">
    <rect x="10" y="10" width="20" height="20" rx="2" />
    <rect x="50" y="10" width="20" height="20" rx="2" />
    <rect x="90" y="10" width="20" height="20" rx="2" />
    <path d="M30 20 L50 20 M70 20 L90 20 M110 20 L130 20" strokeDasharray="2 2" />
    <circle cx="135" cy="20" r="4" fill="currentColor" />
  </svg>
);

const Schema = () => (
  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-70 text-foreground">
    <rect x="10" y="5" width="80" height="50" rx="4" />
    <line x1="10" y1="20" x2="90" y2="20" />
    <line x1="20" y1="30" x2="60" y2="30" strokeDasharray="2 2" />
    <line x1="20" y1="40" x2="80" y2="40" strokeDasharray="2 2" />
    <circle cx="80" cy="12.5" r="2" fill="currentColor" />
  </svg>
);

const Graph = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-70 text-foreground">
    <circle cx="20" cy="30" r="4" />
    <circle cx="60" cy="15" r="6" fill="currentColor" />
    <circle cx="60" cy="45" r="4" />
    <circle cx="100" cy="30" r="4" />
    <path d="M24 30 L54 15 M24 30 L56 45 M66 15 L96 30 M64 45 L96 30" />
  </svg>
);

const Timeline = () => (
  <svg width="160" height="40" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-70 text-foreground">
    <line x1="10" y1="20" x2="150" y2="20" />
    <circle cx="30" cy="20" r="3" fill="currentColor" />
    <circle cx="70" cy="20" r="3" fill="currentColor" />
    <circle cx="110" cy="20" r="3" fill="currentColor" />
    <line x1="30" y1="10" x2="30" y2="30" />
    <line x1="70" y1="10" x2="70" y2="30" />
    <line x1="110" y1="10" x2="110" y2="30" />
  </svg>
);

const systems = [
  { 
    id: 1, 
    name: "Decision Systems", 
    desc: "Context-aware decisioning for selecting appropriate transaction routes from user, banking, currency, and regulatory inputs.",
    diagram: <DecisionTree />
  },
  { 
    id: 2, 
    name: "Concurrent Processing", 
    desc: "Modernizing sequential financial workflows into concurrent pipelines with an emphasis on latency, availability, and safe processing.",
    diagram: <Pipeline />
  },
  { 
    id: 3, 
    name: "Financial Messaging", 
    desc: "Extracting, modeling, and classifying standards-based financial messages for downstream validation and risk workflows.",
    diagram: <Schema />
  },
  { 
    id: 4, 
    name: "Rules and Cutoffs", 
    desc: "Configuration-driven processing for transaction rules, bank metadata, regional constraints, and time-zone-sensitive cutoffs.",
    diagram: <Graph />
  },
  { 
    id: 5, 
    name: "Data Workflow Automation", 
    desc: "Automated validation and performance testing for ingestion, transformation, and integration workflows.",
    diagram: <Timeline />
  },
];

export default function WorkSection() {
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-32 px-8 md:px-24 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-8">
          <div>
            <p className="font-mono text-xs mb-6 uppercase tracking-widest text-foreground/50">02 / Selected Systems</p>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter text-foreground">
              Engineering Depth
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs uppercase tracking-widest text-foreground/50 leading-relaxed text-left md:text-right">
            Anonymized capability studies derived from backend data engineering and financial transaction environments.
          </p>
        </div>
        
        <div className="border-b border-foreground/10">
          {systems.map((system) => (
            <div 
              key={system.id} 
              className="group flex flex-col py-12 md:py-16 border-t border-foreground/10 hover:border-foreground/40 transition-colors focus:outline-none focus:bg-foreground/5"
              onMouseEnter={() => setHoveredSystem(system.id)}
              onMouseLeave={() => setHoveredSystem(null)}
              tabIndex={0}
            >
              <div className="flex flex-col lg:flex-row lg:items-baseline justify-between w-full">
                <h3 className="text-4xl md:text-6xl font-serif tracking-tight group-hover:italic transition-all duration-300 mb-6 lg:mb-0">
                  {system.name}
                </h3>
                
                <div className="font-mono text-sm md:text-base tracking-wide text-foreground/70 lg:text-right max-w-md leading-relaxed">
                  {system.desc}
                </div>
              </div>

              {/* Inline Abstract Diagram */}
              <div className={`mt-8 w-full h-32 md:h-48 rounded border border-foreground/10 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-foreground/40 transition-all duration-500 overflow-hidden relative bg-foreground/5 ${hoveredSystem === system.id ? 'opacity-100 h-48' : 'opacity-50 h-32'} group-focus:opacity-100 group-focus:h-48`}>
                {system.diagram}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
