

export default function SiteChrome() {
  return (
    <header className="fixed top-0 left-0 w-full p-8 md:px-24 flex justify-between items-start z-[100] mix-blend-difference text-white pointer-events-none">
      <div className="font-serif text-2xl tracking-wide pointer-events-auto select-none">
        John Doe
      </div>
      <nav className="font-mono text-xs md:text-sm uppercase tracking-widest flex gap-8 pointer-events-auto">
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#work" className="hover:opacity-70 transition-opacity hidden md:block">Work</a>
      </nav>
    </header>
  );
}
