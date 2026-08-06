import LocalTime from "./LocalTime";

export default function FooterSection() {
  return (
    <footer className="pt-32 pb-16 px-8 md:px-24 border-t border-foreground/10 flex flex-col items-start w-full">
      <a 
        href="mailto:hello@example.com" 
        className="relative group inline-flex flex-wrap items-center gap-4 md:gap-8 text-6xl md:text-8xl lg:text-9xl font-serif text-foreground transition-all duration-500"
      >
        <span className="group-hover:italic transition-all duration-500 tracking-tight">Let&apos;s connect</span>
        <span className="text-4xl md:text-6xl lg:text-7xl group-hover:translate-x-8 transition-transform duration-500 font-sans font-light">→</span>
      </a>
      
      <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-xs uppercase tracking-widest text-foreground/50 gap-16 border-t border-foreground/10 pt-16">
        <div>
          <p className="mb-4">Local time</p>
          <p className="text-foreground"><LocalTime /></p>
        </div>
        
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <p>Social</p>
            <div className="flex flex-col gap-4 text-foreground">
              <a href="#" className="hover:opacity-70 transition-opacity">GitHub</a>
              <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Contact</p>
            <div className="flex flex-col gap-4 text-foreground">
              <a href="mailto:hello@example.com" className="hover:opacity-70 transition-opacity">Email</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
