
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    { text: "Exams shouldn’t be a gamble.", note: "They should be a result." },
    { text: "Stop feeling anxious – build real confidence.", note: "Anxiety is lack of data." },
    { text: "No more scattered notes or poor timing.", note: "Focus only on the win." },
    { text: "Master the pressure before it masters you.", note: "Pressure is a privilege." }
  ];

  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center bg-black/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neonBlue/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl w-full relative z-10">
        {points.map((p, idx) => (
          <div 
            key={idx} 
            className="reveal mb-20 last:mb-0 relative group"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <h2 className={`font-heading font-bold text-2xl md:text-4xl leading-snug tracking-tight ${idx % 2 === 0 ? 'text-white/90' : 'text-neonBlue/70'}`}>
              "{p.text}"
            </h2>
            <div className={`mt-2 ${idx % 2 === 0 ? 'text-right' : 'text-left'} font-hand text-neonEmerald text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-all duration-700`}>
              — {p.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
