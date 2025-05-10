import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/#about' },
    { name: 'Research', path: '/#research' },
    { name: 'Publications', path: '/#publications' },
    { name: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/Sahandfer', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/sahandsabour', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/sahandsabour/', label: 'LinkedIn' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 font-medium text-lg transition hover:opacity-80"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent">
                <img
                  src="https://avatars.githubusercontent.com/u/35892312?v=4"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-primary font-semibold">SA[ML]OG</span>
            </Link>

            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text/70 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-text/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-secondary transition-colors focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button> */}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            {/* <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-secondary transition-colors focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button> */}
            <button
              onClick={toggleMenu}
              className="p-2 text-text rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-text/80'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text/70 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;