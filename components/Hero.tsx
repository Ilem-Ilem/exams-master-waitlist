
import React from 'react';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neonBlue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neonPurple/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="z-10 text-center max-w-4xl">
        {/* Subtle ASCII ART Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none select-none">
          <pre className="hidden md:block font-mono text-[6px] lg:text-[8px] leading-[1.1] text-neonBlue">
{`███████╗██╗  ██╗ █████╗ ███╗   ███╗
██╔════╝╚██╗██╔╝██╔══██╗████╗ ████║
█████╗   ╚███╔╝ ███████║██╔████╔██║
██╔══╝   ██╔██╗ ██╔══██║██║╚██╔╝██║
███████╗██╔╝ ██╗██║  ██║██║ ╚═╝ ██║`}
          </pre>
        </div>

        <div className="inline-block relative mb-2">
          <div className="absolute -inset-4 bg-neonBlue/10 blur-2xl rounded-full opacity-30"></div>
          <h1 className="relative font-heading font-extrabold text-5xl md:text-8xl leading-tight tracking-tighter text-white">
            EXAM<span className="text-neonBlue">MASTER</span>
          </h1>
        </div>
        
        <p className="font-hand text-2xl md:text-4xl text-neonEmerald neon-glow-emerald tracking-wide mb-8 -rotate-1">
          Prepare. Practice. Conquer.
        </p>
        
        <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
          The most powerful exam preparation platform ever built. 
          Stop guessing and start <span className="text-white border-b border-neonBlue/30 italic">mastering</span> with intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToWaitlist}
            className="group relative px-8 py-4 bg-white text-black font-bold text-base rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">Get Early Access</span>
            <div className="absolute inset-0 bg-neonEmerald opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={scrollToProcess}
            className="px-8 py-4 border border-white/10 hover:border-neonBlue/40 text-white font-semibold text-base rounded-xl backdrop-blur-sm transition-all hover:bg-white/5 flex items-center gap-2"
          >
            Explore Methodology
            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[9px] tracking-[0.5em] font-bold uppercase">Discover</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
