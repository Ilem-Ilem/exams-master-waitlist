
import React from 'react';

const TrustSection: React.FC = () => {
  const levels = ["BEGINNERS", "UNDERGRADS", "FINALISTS", "CANDIDATES", "PROFESSIONALS", "MASTERS"];

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-12 reveal">
          Built to scale with your academic journey
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-20 hover:opacity-100 transition-all duration-1000 reveal">
          {levels.map((level, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-2 bg-white/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative font-heading font-black text-xl md:text-2xl tracking-widest text-white/80 hover:text-white transition-colors cursor-default">
                {level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
