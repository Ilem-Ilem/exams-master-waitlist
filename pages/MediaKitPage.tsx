
import React from 'react';

const MediaKitPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="reveal mb-16">
        <div className="inline-block bg-neonEmerald/10 text-neonEmerald text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 border border-neonEmerald/20">
          Brand Assets
        </div>
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-white mb-8">
          Media <span className="text-neonEmerald">Kit.</span>
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
          Resources for our partners, press, and the global academic community. Help us tell the story of ExamMaster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-10 rounded-[32px] reveal">
            <h3 className="text-2xl font-bold text-white mb-6">Mission Statement</h3>
            <p className="text-gray-400 leading-relaxed italic text-lg mb-4">
              "To revolutionize academic assessment through ultra-modern, data-driven, and ethical simulation tools that build true confidence in the next generation of healthcare professionals."
            </p>
          </div>

          <div className="glass-card p-10 rounded-[32px] reveal">
            <h3 className="text-2xl font-bold text-white mb-6">Visual Identity</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Neon Blue', hex: '#00D4FF', bg: 'bg-neonBlue' },
                { name: 'Neon Purple', hex: '#9D4BFF', bg: 'bg-neonPurple' },
                { name: 'Neon Emerald', hex: '#00FFA3', bg: 'bg-neonEmerald' },
                { name: 'Deep Black', hex: '#050505', bg: 'bg-darkBg', border: 'border-white/10' },
                { name: 'Glass White', hex: 'RGBA(255, 255, 255, 0.05)', bg: 'bg-white/10' }
              ].map((color, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className={`aspect-square rounded-2xl ${color.bg} ${color.border || ''}`}></div>
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest">{color.name}</div>
                  <div className="text-[10px] text-gray-500 font-mono">{color.hex}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-10 rounded-[32px] reveal flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-neonBlue border border-white/10">
               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
            </div>
            <h4 className="text-white font-bold mb-2">Official Logo</h4>
            <button className="text-[10px] font-bold uppercase tracking-widest text-neonBlue border-b border-neonBlue py-1 hover:text-white hover:border-white transition-all">
              Download PNG/SVG
            </button>
          </div>

          <div className="glass-card p-10 rounded-[32px] reveal text-center">
             <h4 className="text-white font-bold mb-4">Typography</h4>
             <div className="space-y-4">
                <div className="font-heading font-extrabold text-2xl text-white">Montserrat</div>
                <div className="font-sans text-xl text-gray-400">Inter</div>
                <div className="font-hand text-2xl text-neonEmerald">Caveat</div>
             </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 reveal">
        <button 
          onClick={onBack}
          className="px-8 py-4 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white transition-all"
        >
          Back to Overview
        </button>
      </div>
    </div>
  );
};

export default MediaKitPage;
