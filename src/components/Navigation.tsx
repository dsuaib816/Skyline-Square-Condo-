import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Floor Plans', path: '/floor-plans' },
    { label: 'Residents', path: '/residents' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F7F4] shadow-lg'
          : 'bg-transparent md:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-2xl font-bold text-[#1C2529] tracking-tight">
              Skyline
              <span className="text-[#B49A70] ml-1">Square</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#1C2529] hover:text-[#B49A70] transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resident Portal & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.buildinglink.com/app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-6 py-2 bg-[#1C2529] text-[#FFFFFF] rounded-sm hover:bg-[#B49A70] hover:text-[#1C2529] transition-all duration-200 font-medium text-sm uppercase tracking-wide"
            >
              Resident Portal
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1C2529]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#F8F7F4] border-t border-[#E8E7E3] pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 text-[#1C2529] hover:bg-[#E8E7E3] hover:text-[#B49A70] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.buildinglink.com/app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-[#1C2529] hover:bg-[#E8E7E3] text-sm font-medium uppercase tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resident Portal
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
