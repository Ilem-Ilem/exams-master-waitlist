
import React from 'react';

const PlatformIntro: React.FC = () => {
  const cards = [
    {
      title: "Real Exam Structure",
      desc: "Authentic question formatting and timing rules that mirror your actual exam environment.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "text-neonBlue"
    },
    {
      title: "Timed Simulations",
      desc: "Battle the clock with auto-submit features and high-pressure countdowns.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "text-neonPurple"
    },
    {
      title: "Smart Analytics",
      desc: "Deep dive into your performance with granular subject-level breakthroughs.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "text-neonEmerald"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">Designed for Mastery</h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          ExamMaster offers everything from course-based prep to conference exams, 
          all powered by a seamless, distraction-free interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 mb-6 ${card.color}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon} />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-white">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformIntro;
