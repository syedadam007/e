
import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Soft atmospheric glow */}
      <div className="absolute inset-0 bg-white/[0.01] blur-[100px] rounded-full scale-110 pointer-events-none"></div>
      
      {/* The main Logo character - Scaled down for luxury balance */}
      <h1 
        className="text-[35vw] md:text-[18vw] font-carra-vibe leading-none animate-ethereal transition-all duration-1000 shimmer-text"
        style={{ fontWeight: 300 }}
      >
        É
      </h1>
      
      {/* Discrete Progress Indicator - Enhanced for better visibility */}
      <div className="mt-16 w-32 h-[1.5px] bg-white/[0.15] relative overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-[progress_4s_infinite_ease-in-out]"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [nyTime, setNyTime] = useState('');

  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      const now = new Date();
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setNyTime(formatter.format(now));
      } catch (e) {
        // Fallback if timezone not supported (unlikely in modern browsers)
        setNyTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main 
      className={`
        min-h-screen w-full flex items-center justify-center 
        bg-[#050505] transition-opacity duration-[3000ms] ease-in-out
        ${mounted ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      <div className="container mx-auto flex items-center justify-center px-4">
        <Logo />
      </div>
      
      {/* Footer signature with improved visibility */}
      <footer className="fixed bottom-12 left-0 w-full flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <span className="text-[10px] tracking-[0.8em] uppercase text-white font-light">
          NEW YORK | EST. 2026
        </span>
        <span className="text-[9px] tracking-[0.6em] uppercase text-white/80 font-light tabular-nums">
          {nyTime}
        </span>
      </footer>
    </main>
  );
};

export default App;
