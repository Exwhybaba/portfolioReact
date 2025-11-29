import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Github, 
  Mail, 
  FileText, 
  Coffee 
} from "lucide-react";
import { useState, useEffect } from 'react';

export default function TitleMe() {
  const [codeSnippets] = useState([
    'model.fit(X_train, y_train)',
    'torch.nn.Transformer()',
    'df.groupby("user").agg(...)',
    'plt.plot(loss)',
    'const [data, setData] = useState()',
    'SELECT * FROM predictions',
    'pipeline.fit(X, y)',
    'import pandas as pd',
  ]);

  const [fallingCode, setFallingCode] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCode = {
        id: Date.now() + Math.random(),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 100,
        duration: 10 + Math.random() * 8,
      };
      setFallingCode(prev => [...prev.slice(-40), newCode]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-120 bg-sky-900 text-white overflow-hidden flex flex-col justify-center items-center px-6">
      
      {/* Falling Code Rain */}
      {fallingCode.map(code => (
        <div
          key={code.id}
          className="absolute font-mono text-emerald-400/25 text-xs md:text-sm pointer-events-none whitespace-nowrap"
          style={{
            left: `${code.left}%`,
            top: '-60px',
            animation: `fall ${code.duration}s linear forwards`,
          }}
        >
          {code.text}
        </div>
      ))}

      <div className="relative z-10 text-center py-30">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Seye Daniel Oyelayo</h1>
        <p className="mt-4 text-xl md:text-2xl text-sky-200 font-light">
          Data Scientist & Machine Learning Engineer
        </p>

        {/* Main CTA Row: Social Icons (Left) + Buttons (Center) */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

          {/* Social Links - Left Aligned */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/seyeoyelayo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 group-hover:bg-linkedin-600 group-hover:border-linkedin-400 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </a>

            <a
              href="https://github.com/Exwhybaba"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 group-hover:bg-gray-800 group-hover:border-gray-600 transition-all duration-300">
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </a>

            <a
              href="https://medium.com/@exwhybaba"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Medium"
            >
              <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 group-hover:bg-green-600 group-hover:border-green-500 transition-all duration-300">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.5 6.5 0 01-6.5-6.5A6.5 6.5 0 0113.54 12zm4.14 0c0-3.58-1.64-6.5-3.64-6.5s-3.64 2.92-3.64 6.5 1.64 6.5 3.64 6.5 3.64-2.92 3.64-6.5zm3.73 0c0-3.42-.36-6.5-1.8-6.5.36 3.08 0 6.5-1.8 6.5s-2.16-3.42-1.8-6.5z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Main Buttons */}
          <div className="flex gap-5">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-10 py-6 rounded-xl shadow-lg hover:shadow-emerald-500/30"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border/40 text-black hover:bg-white/10 hover:border-white/60 px-10 py-6 rounded-xl backdrop-blur"
            >
              <a href="../resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </Button>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}