import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about_me', type: 'anchor' },
    { label: 'Projects', href: '#project', type: 'anchor' },
    { label: 'Achievements', href: '#achievement', type: 'anchor' },
    { label: 'Certificates', href: '#certificate', type: 'anchor' },
    { label: 'Skills', href: '#skill', type: 'anchor' },
    { label: 'Blog', href: '/blog', type: 'route' },
    { label: 'Contact', href: '#contact', type: 'anchor' },
    { label: 'Resume', href:"/resume.pdf"}
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-sky-950/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-b from-sky-950 to-sky-950/80 py-6'
    } text-white`}>
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('/')}>
          <h1 className="font-bold text-xl sm:text-2xl tracking-tighter">
            <span className="text-white group-hover:text-emerald-50 transition-colors">XYB</span>
            <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">tech</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-1 font-medium text-sm lg:text-base items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.type === 'route' ? (
                <Link 
                  to={item.href}
                  className="px-3 lg:px-4 py-2 text-gray-100 hover:text-emerald-400 transition-colors duration-300 block"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  className="px-3 lg:px-4 py-2 text-gray-100 hover:text-emerald-400 transition-colors duration-300 block"
                >
                  {item.label}
                </a>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-sky-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
          
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none hover:text-emerald-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-sky-900 to-sky-950 px-4 sm:px-6 py-4 space-y-2 font-medium animate-in slide-in-from-top-2 duration-300">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === 'route' ? (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-100 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  href={location.pathname === '/' ? item.href : `/${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-100 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          
        </ul>
      )}

      {/* Scroll Progress Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-8 top-1/2 z-[100] p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl hover:scale-110 -translate-y-1/2 ${scrollProgress > 0.02 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <div className="relative flex items-center justify-center w-10 h-10">
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-slate-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            <circle
              className="text-emerald-500 transition-all duration-100 ease-out"
              strokeWidth="8"
              strokeDasharray={276}
              strokeDashoffset={276 - (Math.min(Math.max(scrollProgress, 0), 1) * 276)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-emerald-600" />
        </div>
      </button>
    </header>
  )
}

export default Header