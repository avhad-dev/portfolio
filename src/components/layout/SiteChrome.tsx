

export default function SiteChrome() {
  return (
    <header className="fixed top-0 left-0 w-full p-8 md:px-24 flex justify-between items-start z-[100] mix-blend-difference text-white pointer-events-none">
      <div className="font-mono text-xs md:text-sm uppercase tracking-widest pointer-events-auto select-none">
        SYSTEMS / PORTFOLIO
      </div>
      <nav className="font-mono text-xs md:text-sm uppercase tracking-widest flex gap-8 pointer-events-auto">
        <a href="#about" className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black">PROFILE</a>
        <a href="#work" className="hover:opacity-70 transition-opacity hidden md:block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black">SYSTEMS</a>
        <a href="#stack" className="hover:opacity-70 transition-opacity hidden md:block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black">STACK</a>
      </nav>
    </header>
  );
}
