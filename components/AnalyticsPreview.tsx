
import React from 'react';

const AnalyticsPreview: React.FC = () => {
  return (
    <section id="analytics" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-neonEmerald/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 reveal">
          <div className="inline-block bg-neonEmerald/10 text-neonEmerald text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-8 border border-neonEmerald/20">
            Intelligence Layer
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-8 leading-tight">
            Data-Driven <span className="text-neonEmerald">Dominance.</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-neonEmerald/10 flex items-center justify-center shrink-0 border border-neonEmerald/20">
                 <svg className="w-6 h-6 text-neonEmerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white mb-2">Predictive Readiness</h4>
                <p className="text-gray-400">Our algorithm correlates your simulation scores with actual licensure pass rates to tell you exactly when you're ready.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center shrink-0 border border-neonPurple/20">
                 <svg className="w-6 h-6 text-neonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white mb-2">Weak-Point Isolation</h4>
                <p className="text-gray-400">Heatmaps of your curriculum identify "Silent Gaps"—topics where you guess correctly but lack fundamental mastery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 reveal relative">
          <div className="glass-card p-10 rounded-[40px] relative z-10 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Mastery Trend</div>
                <div className="text-4xl font-heading font-black text-white">Hematology</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-heading font-black text-neonEmerald">+18%</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">vs Last Week</div>
              </div>
            </div>

            {/* Simple CSS Chart Mockup */}
            <div className="flex items-end gap-3 h-48 mb-12">
              {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-1000 bg-gradient-to-t ${i === 5 ? 'from-neonEmerald/80 to-neonEmerald' : 'from-white/5 to-white/10'} group-hover:from-neonBlue/50 group-hover:to-neonBlue`} 
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-600 uppercase">D{i+1}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Avg Accuracy</div>
                <div className="text-xl font-bold text-white">84.2%</div>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Timed Sessions</div>
                <div className="text-xl font-bold text-white">124 Hrs</div>
              </div>
            </div>
          </div>

          {/* Decorative floating badges - Lifted with z-20 */}
          <div className="absolute -top-6 -right-6 glass-card px-4 py-2 rounded-full border-neonPurple/30 text-neonPurple text-[10px] font-black uppercase tracking-widest animate-float z-20 pointer-events-none">
            Hematology Master 🏆
          </div>
          <div className="absolute -bottom-8 -left-8 glass-card px-4 py-2 rounded-full border-neonBlue/30 text-neonBlue text-[10px] font-black uppercase tracking-widest animate-float delay-1000 z-20 pointer-events-none">
            Streak: 12 Days 🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;
