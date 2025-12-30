
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        // Handle unique constraint (email already exists)
        if (error.code === '23505') {
          setErrorMessage('This email is already on the mastery list.');
        } else {
          setErrorMessage('Connection error. Please try again shortly.');
          console.error('Supabase error:', error);
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setErrorMessage('Something went wrong. Please check your connection.');
      console.error('Submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-40 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue via-neonPurple to-neonEmerald rounded-[42px] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative glass-card rounded-[40px] p-8 md:p-24 text-center overflow-hidden">
            {!submitted ? (
              <div className="relative z-10 reveal">
                <div className="flex justify-center mb-6">
                  <div className="bg-neonBlue/10 text-neonBlue text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-neonBlue/20">
                    Phase 1: Limited Beta Access
                  </div>
                </div>
                
                <h2 className="font-heading font-extrabold text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
                  Join the <span className="text-neonBlue">Mastery</span> List.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  We're onboarding serious students and institutions in waves. Early birds receive <span className="text-white font-bold">lifetime premium benefits</span> and first access to our predictive scoring engine.
                </p>

                <div className="mb-8 flex flex-wrap justify-center items-center gap-2 font-hand text-xl text-neonEmerald">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                  <span>Join thousands already waiting...</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      required
                      placeholder="Future master email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-black/40 border ${errorMessage ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neonBlue transition-all`}
                    />
                    {errorMessage && (
                      <div className="absolute -bottom-6 left-2 text-[10px] text-red-400 font-bold uppercase tracking-widest animate-pulse">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-neonBlue hover:text-white hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3 group whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Secure Spot</span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
                
                <p className="mt-12 text-[11px] text-gray-500 font-medium tracking-widest uppercase">
                  Secure • Encrypted • Academic Integrity First
                </p>
              </div>
            ) : (
              <div className="relative z-10 animate-in fade-in zoom-in duration-500 py-10">
                <div className="w-24 h-24 bg-neonEmerald/10 text-neonEmerald rounded-full flex items-center justify-center mx-auto mb-8 border border-neonEmerald/20 animate-pulse">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading font-extrabold text-5xl text-white mb-4">Verification Sent.</h2>
                <p className="text-gray-400 text-xl max-w-sm mx-auto mb-10">We've reserved a spot for <b>{email}</b>. Check your inbox for your queue number.</p>
                
                <div className="flex flex-col gap-6 items-center">
                  <a 
                    href="https://chat.whatsapp.com/CWXMQioFIA6BCwewGORYLS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neonEmerald text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,163,0.3)]"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Join WhatsApp Community</span>
                  </a>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                    className="text-gray-500 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-all"
                  >
                    Enter another email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
