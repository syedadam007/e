
import React, { useState, useEffect } from 'react';

/**
 * Logo Component
 * Renders the "É" character with a refined shimmer and breathing effect.
 */
const Logo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Centered glow for atmosphere */}
      <div className="absolute inset-0 bg-white/[0.02] blur-[150px] rounded-full scale-150"></div>
      
      {/* The main Logo character - Adjusted size for better balance */}
      <h1 
        className="text-[45vw] md:text-[25vw] font-carra-vibe leading-none animate-ethereal transition-all duration-1000 shimmer-text"
        style={{ fontWeight: 300 }}
      >
        É
      </h1>
      
      {/* Minimalist Progress Indicator */}
      <div className="mt-12 w-24 h-[1px] bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[progress_3s_infinite_ease-in-out]"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main 
      className={`
        min-h-screen w-full flex items-center justify-center 
        bg-[#050505] transition-opacity duration-[2000ms] ease-out
        ${mounted ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="container mx-auto flex items-center justify-center px-4">
        <Logo />
      </div>
      
      {/* Ultra-minimal footer */}
      <footer className="fixed bottom-12 left-0 w-full flex justify-center space-x-8 opacity-20 hover:opacity-40 transition-opacity duration-700">
        <span className="text-[9px] tracking-[0.6em] uppercase text-white font-extralight">
          NEW YORK | EST. 2026
        </span>
      </footer>
    </main>
  );
};

export default App;
