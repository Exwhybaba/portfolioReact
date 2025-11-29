import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <header className="bg-sky-950 text-white sticky top-0 z-50 shadow">
      <nav className="flex justify-between items-center px-6 py-6">
        <h1 className="font-serif font-bold text-2xl">Seye Daniel Oyelayo</h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="underline decoration-transparent hover:decoration-green-500 transition-all">
              <a href={item.href}>{item.label}</a>

            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-sky-900 px-6 py-4 space-y-3 font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="underline decoration-transparent hover:decoration-green-500 transition-all">
              <a href={item.href} onClick={toggleMenu}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;