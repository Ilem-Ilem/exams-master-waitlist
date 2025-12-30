
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'ethics' | 'media') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-darkBg relative overflow-hidden">
      {/* Footer background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neonBlue/5 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6 text-neonBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="font-heading font-extrabold text-2xl tracking-tighter text-white">
            EXAM<span className="text-neonBlue">MASTER</span>
          </div>
        </div>
        
        <p className="font-hand text-2xl text-neonEmerald mb-8">"Built with focus. Designed for mastery."</p>
        
        <p className="text-gray-600 text-sm mb-12 max-w-md">
          ExamMaster is a premium waitlist platform for the next generation of academic achievement. Join the future of assessment.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">
          <button onClick={() => onNavigate('privacy')} className="hover:text-neonBlue transition-colors">Privacy Architecture</button>
          <button onClick={() => onNavigate('ethics')} className="hover:text-neonPurple transition-colors">Ethical Framework</button>
          <button onClick={() => onNavigate('media')} className="hover:text-neonEmerald transition-colors">Media Kit</button>
          <span className="text-white/20">© 2025 EXM CORP</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
