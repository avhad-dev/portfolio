import LocalTime from "./LocalTime";

export default function FooterSection() {
  return (
    <footer className="py-32 px-8 md:px-24 border-t border-foreground/10 flex flex-col items-center">
      {/* 
        The large call-to-action text acting as a mailto link.
        The hover effect adds the text-accent or foreground color transition.
      */}
      <a 
        href="mailto:hello@example.com" 
        className="relative group inline-block text-5xl md:text-8xl lg:text-9xl font-serif hover:italic transition-all duration-500 text-foreground"
      >
        Let&apos;s connect
      </a>
      
      <div className="mt-32 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center font-mono text-sm text-foreground/60 gap-8">
        <p>Local time: <LocalTime /></p>
        
        <div className="flex gap-8 uppercase tracking-widest">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
