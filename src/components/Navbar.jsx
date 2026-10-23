import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 34);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-slate-800 bg-[#05070d]' : 'border-transparent bg-[#05070d]/95'
      }`}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="section-container">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="font-display flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-sky-300/30 bg-slate-950 text-lg font-black text-sky-300"
            whileTap={{ scale: 0.96 }}
            aria-label="Go to home"
          >
            BK
          </motion.button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`min-h-11 rounded-lg px-3 text-sm font-bold transition-colors duration-200 ${
                    active ? 'bg-sky-300 text-slate-950' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <button
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-200 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-slate-800 bg-[#070b14] md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="mx-auto grid w-[calc(100%-1.25rem)] max-w-6xl gap-2 py-4">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`min-h-12 rounded-xl border px-4 text-left text-sm font-bold transition-colors ${
                      active ? 'border-sky-300 bg-sky-300 text-slate-950' : 'border-slate-800 bg-slate-950 text-slate-300'
                    }`}
                    whileTap={{ scale: 0.985 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

