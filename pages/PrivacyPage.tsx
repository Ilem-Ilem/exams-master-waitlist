
import React from 'react';

const PrivacyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="reveal mb-12">
        <div className="inline-block bg-neonBlue/10 text-neonBlue text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 border border-neonBlue/20">
          Security Protocols
        </div>
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-white mb-8">
          Privacy <span className="text-neonBlue">Architecture.</span>
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed">
          At ExamMaster, your data isn't just a record—it's your intellectual legacy. We've built an infrastructure where privacy is the default state, not a configurable option.
        </p>
      </div>

      <div className="space-y-12">
        <div className="glass-card p-10 rounded-[32px] reveal">
          <h3 className="text-2xl font-bold text-white mb-4">Data Sovereignty</h3>
          <p className="text-gray-400 leading-relaxed">
            Every simulation, every result, and every heatmap belongs exclusively to you. We employ end-to-end encryption for all academic records, ensuring that your progress remains a private dialogue between you and your goals.
          </p>
        </div>

        <div className="glass-card p-10 rounded-[32px] reveal">
          <h3 className="text-2xl font-bold text-white mb-4">Zero-Knowledge Progress</h3>
          <p className="text-gray-400 leading-relaxed">
            Our predictive analytics engine operates on anonymized data sets. We understand your performance patterns without needing to know your identity, keeping your academic journey separate from your personal data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-neonBlue font-bold mb-2">GDPR & CCPA Compliant</h4>
            <p className="text-sm text-gray-500">Full control over your data exports and the right to permanent erasure at any time.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-neonBlue font-bold mb-2">Biometric Integrity</h4>
            <p className="text-sm text-gray-500">Our simulation-lock features never store raw video or audio, only local verification tokens.</p>
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
    </div>
  );
};

export default PrivacyPage;
