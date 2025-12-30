
import React from 'react';

const WhyUs: React.FC = () => {
  const features = [
    { title: "Serious Foundations", text: "Built for students and institutions requiring true academic integrity." },
    { title: "Zero Distractions", text: "A clean, zen-like interface that helps you enter 'the flow' of testing." },
    { title: "Intelligent Analytics", text: "Predictive scoring that tells you when you're actually ready for the real thing." }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2 reveal">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-8 leading-tight">
            Why ExamMaster is <span className="text-neonPurple italic">Different</span>
          </h2>
          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-neonPurple flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">{f.title}</h4>
                  <p className="text-gray-400">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 reveal relative">
          <div className="glass-card aspect-square rounded-full flex items-center justify-center relative z-10 p-12 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue/20 to-neonPurple/20 animate-pulse"></div>
             <div className="text-center z-20">
                <div className="font-heading font-black text-8xl md:text-9xl text-white mb-2">98%</div>
                <p className="text-neonBlue font-bold tracking-widest uppercase">Confidence Score</p>
                <p className="text-gray-400 mt-4 text-sm max-w-[200px] mx-auto">Reported improvement in exam readiness after just 3 simulations.</p>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-neonEmerald/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neonBlue/10 rounded-full blur-3xl animate-float delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
