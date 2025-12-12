import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about_me' },
    { label: 'Projects', href: '#project' },
    { label: 'Achievements', href: '#achievement' },
    { label: 'Certificates', href: '#certificate' },
    { label: 'Skills', href: '#skill' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href:"../resume.pdf"}
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-sky-950/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-b from-sky-950 to-sky-950/80 py-6'
    } text-white`}>
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="font-serif font-bold text-lg sm:text-2xl bg-gradient-to-r from-emerald-400 to-sky-300 bg-clip-text text-transparent hover:from-emerald-300 hover:to-sky-200 transition-all cursor-pointer">
          Seye Daniel Oyelayo
        </h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-1 font-medium text-sm lg:text-base items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <a 
                href={item.href}
                className="px-3 lg:px-4 py-2 text-gray-100 hover:text-emerald-400 transition-colors duration-300 block"
              >
                {item.label}
              </a>
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
              <a 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-100 hover:text-emerald-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          
        </ul>
      )}
    </header>
  )
}

export default Header