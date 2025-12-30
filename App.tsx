
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import FieldFocus from './components/FieldFocus';
import ExamModes from './components/ExamModes';
import AnalyticsPreview from './components/AnalyticsPreview';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Waitlist from './components/Waitlist';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import EthicsPage from './pages/EthicsPage';
import MediaKitPage from './pages/MediaKitPage';

type Page = 'home' | 'privacy' | 'ethics' | 'media';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
      revealObserver.observe(reveal);
    });

    return () => revealObserver.disconnect();
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy': return <PrivacyPage onBack={() => navigateTo('home')} />;
      case 'ethics': return <EthicsPage onBack={() => navigateTo('home')} />;
      case 'media': return <MediaKitPage onBack={() => navigateTo('home')} />;
      default: return (
        <>
          <Hero />
          <PainPoints />
          <FieldFocus />
          <ExamModes />
          <AnalyticsPreview />
          <HowItWorks />
          <WhyUs />
          <Waitlist />
          <TrustSection />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen animated-bg selection:bg-neonEmerald selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md bg-darkBg/20 border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-neonBlue/20 blur-md rounded-lg"></div>
            <svg className="w-8 h-8 relative text-neonBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="font-heading font-extrabold text-2xl tracking-tighter text-white">
            EXAM<span className="text-neonBlue">MASTER</span>
          </div>
        </div>
        
        {currentPage === 'home' && (
          <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#fields" className="text-gray-400 hover:text-neonBlue transition-colors">Fields</a>
            <a href="#modes" className="text-gray-400 hover:text-neonPurple transition-colors">Modes</a>
            <a href="#analytics" className="text-gray-400 hover:text-neonEmerald transition-colors">Analytics</a>
            <a href="#waitlist" className="relative px-6 py-2 group">
              <div className="absolute inset-0 bg-neonBlue/10 rounded-full blur-sm group-hover:bg-neonEmerald/20 transition-all"></div>
              <div className="relative border border-white/10 rounded-full px-5 py-2 text-white hover:border-neonEmerald hover:text-neonEmerald transition-all">
                Join Waitlist
              </div>
            </a>
          </div>
        )}

        {currentPage !== 'home' && (
          <button 
            onClick={() => navigateTo('home')}
            className="text-xs font-bold uppercase tracking-[0.2em] text-neonBlue hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return Home
          </button>
        )}
      </nav>

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
