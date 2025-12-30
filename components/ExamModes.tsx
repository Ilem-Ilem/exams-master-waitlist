
import React, { useState } from 'react';

const ExamModes: React.FC = () => {
  const [activeMode, setActiveMode] = useState(0);

  const modes = [
    {
      title: "Prepared (Strict)",
      desc: "Admin-curated simulations that mirror high-stakes certification standards.",
      features: ["Fixed Timer & Difficulty", "Randomized Question Pools", "Instant Auto-Grading", "NCLEX/ASCP Mimicry"],
      accent: "border-neonBlue",
      bg: "bg-neonBlue/5",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Personal (Custom)",
      desc: "User-defined practice sessions tailored to individual study roadmaps.",
      features: ["Custom Difficulty (Easy-Hard)", "Multi-Course Selection", "Untimed/Timed Options", "Topic-Specific Filtering"],
      accent: "border-neonPurple",
      bg: "bg-neonPurple/5",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      title: "Course-Specific",
      desc: "Deep focus on single curriculum units for granular mastery.",
      features: ["Weak-Area Drill Down", "Subject Mastery Scores", "Curriculum Alignment", "Topic Heatmaps"],
      accent: "border-neonEmerald",
      bg: "bg-neonEmerald/5",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Conference (Group)",
      desc: "Synchronized multiplayer testing for classrooms and study groups.",
      features: ["Live Multiplayer Scoreboards", "Real-time Progress Sync", "Public/Private Rooms", "Post-Exam Group Chat"],
      accent: "border-white",
      bg: "bg-white/5",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  return (
    <section id="modes" className="py-32 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4 italic">Core Mastery Modes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From disciplined strict mocks to collaborative social testing.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Selector Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-4 reveal">
            {modes.map((mode, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMode(idx)}
                className={`flex items-center gap-6 p-6 rounded-2xl border transition-all text-left group ${
                  activeMode === idx 
                    ? `glass-card ${mode.accent} translate-x-4 shadow-[0_0_30px_rgba(255,255,255,0.05)]` 
                    : 'border-transparent hover:bg-white/5 opacity-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-colors ${activeMode === idx ? 'text-white' : 'text-gray-500'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mode.icon} />
                  </svg>
                </div>
                <div>
                  <div className={`font-bold text-lg ${activeMode === idx ? 'text-white' : 'text-gray-400'}`}>{mode.title}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Explore Mode</div>
                </div>
              </button>
            ))}
          </div>

          {/* Details Display */}
          <div className="lg:w-2/3 reveal">
            <div className={`glass-card rounded-[40px] p-10 md:p-16 h-full flex flex-col border-2 ${modes[activeMode].accent} transition-all duration-500`}>
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-8">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={modes[activeMode].icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6">{modes[activeMode].title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed mb-12">{modes[activeMode].desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                {modes[activeMode].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-2 h-2 rounded-full ${modes[activeMode].accent.replace('border-', 'bg-')} animate-pulse`}></div>
                    <span className="text-gray-300 font-bold tracking-tight group-hover:text-white transition-colors">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamModes;
