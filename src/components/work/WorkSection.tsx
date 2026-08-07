"use client";

import { useState } from "react";

const systems = [
  { 
    id: 1, 
    name: "Decision Systems", 
    desc: "Context-aware decisioning for selecting appropriate transaction routes from user, banking, currency, and regulatory inputs.",
    diagram: "[ DECISION TREE ]"
  },
  { 
    id: 2, 
    name: "Concurrent Processing", 
    desc: "Modernizing sequential financial workflows into concurrent pipelines with an emphasis on latency, availability, and safe processing.",
    diagram: "[ CONCURRENT PIPELINE ]"
  },
  { 
    id: 3, 
    name: "Financial Messaging", 
    desc: "Extracting, modeling, and classifying standards-based financial messages for downstream validation and risk workflows.",
    diagram: "[ MESSAGE SCHEMA ]"
  },
  { 
    id: 4, 
    name: "Rules and Cutoffs", 
    desc: "Configuration-driven processing for transaction rules, bank metadata, regional constraints, and time-zone-sensitive cutoffs.",
    diagram: "[ RULES GRAPH ]"
  },
  { 
    id: 5, 
    name: "Data Workflow Automation", 
    desc: "Automated validation and performance testing for ingestion, transformation, and integration workflows.",
    diagram: "[ THROUGHPUT TIMELINE ]"
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
                
                <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/50 lg:text-right max-w-md leading-relaxed">
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
