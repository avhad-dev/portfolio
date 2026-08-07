export default function FooterSection() {
  return (
    <footer className="pt-32 pb-16 px-8 md:px-24 border-t border-foreground/10 flex flex-col items-start w-full cursor-default select-none">
      <div className="relative inline-block text-6xl md:text-8xl lg:text-9xl font-serif text-foreground/60 italic tracking-tight hover:text-foreground transition-colors duration-500">
        Reliable by design.
      </div>
      
      <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-xs uppercase tracking-widest text-foreground/60 gap-8 border-t border-foreground/10 pt-16">
        <p>Correctness / Throughput / Traceability</p>
        <p>End of System</p>
      </div>
    </footer>
  );
}
