import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const text = "SEYE OYELAYO";

  useEffect(() => {
    // Display for at least 2.5 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to finish before unmounting
      setTimeout(() => {
        onComplete();
      }, 800); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative z-10 p-4 text-center">
        <div className="flex flex-wrap justify-center overflow-hidden mb-6">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block text-lg sm:text-2xl md:text-4xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
              style={{
                opacity: 0,
                animation: `reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
                animationDelay: `${index * 0.08}s`,
                textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        
        {/* Tech-inspired loading bar */}
        <div className="h-1 w-48 mx-auto bg-slate-800 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            style={{
              width: '50%',
              animation: 'loadingBar 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <style>{`
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes loadingBar {
          0% { left: -50%; width: 30%; }
          50% { left: 35%; width: 30%; }
          100% { left: 100%; width: 30%; }
        }
      `}</style>
    </div>
  );
}