import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/LOGO_ERASTUS.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/training', label: 'Formations' },
    { path: '/events', label: 'Événements' },
    { path: '/services', label: 'Services' },
    { path: '/mediatheque', label: 'Médiathèque' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="ERASTUS GROUP"
              className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[#0A2540] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ERASTUS GROUP
              </div>
              <div className="text-xs text-[#F59E0B] font-medium">Le service avant tout</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#F59E0B]'
                    : 'text-gray-700 hover:text-[#0A2540]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F59E0B] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#D97706] hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#0A2540] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#F59E0B] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-[#0A2540] text-white text-center rounded-lg font-medium hover:bg-[#0A2540]/90"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}