
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Choose Exam Type",
      desc: "Select from Prepared, Course-based, Conference, or build your own Custom exam.",
      tag: "01",
      accent: "border-neonBlue"
    },
    {
      title: "Set Your Mode",
      desc: "Focus on specific subjects in Practice Mode or test your limits in Timed Mode.",
      tag: "02",
      accent: "border-neonPurple"
    },
    {
      title: "Write Under Pressure",
      desc: "Our immersive interface blocks distractions while you navigate real-world constraints.",
      tag: "03",
      accent: "border-neonEmerald"
    },
    {
      title: "Review & Improve",
      desc: "Get instant feedback and a roadmap to fix your weak points before the real thing.",
      tag: "04",
      accent: "border-white"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-darkBg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neonPurple/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">How it Works</h2>
          <div className="w-24 h-1 bg-neonEmerald"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-10 rounded-2xl border-l-4 ${step.accent} reveal`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="font-heading font-black text-5xl opacity-10 mb-6">{step.tag}</div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
