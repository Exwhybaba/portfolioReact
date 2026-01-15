import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Github, 
  Mail, 
  FileText, 
  Coffee,
  ExternalLink,
  ArrowRight
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
  }, [codeSnippets]);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-sky-900 via-sky-950 to-slate-950 text-white overflow-hidden flex flex-col justify-center items-center pt-20">
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Falling Code Rain */}
      {fallingCode.map(code => (
        <div
          key={code.id}
          className="absolute font-mono text-emerald-400/20 text-xs md:text-sm pointer-events-none whitespace-nowrap"
          style={{
            left: `${code.left}%`,
            top: '-60px',
            animation: `fall ${code.duration}s linear forwards`,
          }}
        >
          {code.text}
        </div>
      ))}

      <div className="relative z-10 text-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-emerald-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
          Seye Oyelayo
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-sky-200 font-light mb-8">
          Data Scientist & ML Engineer
        </p>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-sky-100 mb-12 leading-relaxed">
          Transforming complex data into intelligent solutions. Specialized in AI, Machine Learning, and building scalable systems.
        </p>

        {/* Main CTA Row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a 
            href="#about_me"
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="../resume.pdf"
            className="group px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/seyeoyelayo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="LinkedIn"
          >
            <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <Linkedin className="w-6 h-6 text-white group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>

          <a
            href="https://github.com/Exwhybaba"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="GitHub"
          >
            <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <Github className="w-6 h-6 text-white group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>

          <a
            href="https://medium.com/@exwhybaba"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Medium"
          >
            <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <FileText className="w-6 h-6 text-white group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="group"
            aria-label="Email"
          >
            <div className="p-4 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <Mail className="w-6 h-6 text-white group-hover:text-emerald-300 transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}