
import React from 'react';

const FieldFocus: React.FC = () => {
  const fields = [
    {
      title: "Nursing Science",
      subtitle: "Phase 1: NCLEX-Ready",
      items: ["Anatomy & Physiology", "Pharmacology", "Patient Care Ethics", "Clinical Procedures"],
      accent: "text-neonBlue",
      bg: "from-neonBlue/10",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Medical Lab Science",
      subtitle: "ASCP & Specialist Tracks",
      items: ["Microbiology", "Hematology", "Clinical Chemistry", "Immunology"],
      accent: "text-neonEmerald",
      bg: "from-neonEmerald/10",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.117.21l-2.364-.236a2 2 0 00-1.516.44l-1.8 1.4a2 2 0 00-.59 2.116l.8 3a2 2 0 002.13 1.432l3.46-.346a2 2 0 011.117-.21l2.364.236a2 2 0 001.516-.44l1.8-1.4a2 2 0 00.59-2.116l-.8-3z"
    }
  ];

  return (
    <section id="fields" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">Precision Fields</h2>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">Starting with high-demand Health Sciences where CBT mastery is non-negotiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field, idx) => (
            <div key={idx} className={`glass-card p-10 rounded-[32px] relative overflow-hidden group reveal`} style={{ transitionDelay: `${idx * 200}ms` }}>
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${field.bg} to-transparent blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${field.accent}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={field.icon} />
                </svg>
              </div>

              <h3 className="font-heading font-bold text-3xl text-white mb-2">{field.title}</h3>
              <p className={`text-sm font-bold uppercase tracking-widest ${field.accent} mb-8`}>{field.subtitle}</p>
              
              <ul className="space-y-4">
                {field.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${field.accent}`}></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldFocus;
