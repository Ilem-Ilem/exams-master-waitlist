
import React from 'react';

const EthicsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="reveal mb-12">
        <div className="inline-block bg-neonPurple/10 text-neonPurple text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 border border-neonPurple/20">
          Core Values
        </div>
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-white mb-8">
          Ethical <span className="text-neonPurple">Framework.</span>
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed">
          Technology should empower students, not exploit them. Our framework ensures that ExamMaster remains a tool for genuine growth and absolute integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {[
          {
            title: "Fair Assessment",
            desc: "Algorithms are audited weekly to prevent bias across different demographics and learning backgrounds. We believe every student deserves a level playing field.",
            accent: "border-neonPurple"
          },
          {
            title: "Human-in-the-Loop",
            desc: "While our AI analyzes trends, final curriculum decisions and question validations are always overseen by medical and nursing professionals.",
            accent: "border-neonPurple"
          },
          {
            title: "Anti-Cheating, Pro-Learning",
            desc: "Our security measures aren't built to 'catch' users, but to protect the value of the practice. Integrity is what makes your confidence real.",
            accent: "border-neonPurple"
          }
        ].map((item, idx) => (
          <div key={idx} className={`glass-card p-10 rounded-[32px] border-l-4 ${item.accent} reveal`} style={{ transitionDelay: `${idx * 100}ms` }}>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}

        <div className="mt-12 p-8 bg-neonPurple/5 rounded-3xl border border-neonPurple/20 text-center reveal">
          <p className="text-white font-medium italic">"We don't just build software for exams; we build software for the humans who take them."</p>
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
    </div>
  );
};

export default EthicsPage;
