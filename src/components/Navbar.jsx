import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Send, Sun } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 160) {
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
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-[#030712]/85 shadow-lg shadow-black/30 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-container">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Bhavesh Kapre Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-slate-900 to-slate-950 text-base font-black text-sky-400 transition-all duration-300 group-hover:border-sky-400/70 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              BK
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display block text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                Bhavesh Kapre
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Backend &amp; Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 p-1 backdrop-blur-md md:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                    active
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-600/30 border border-sky-400/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-2 sm:flex">
            {/* Theme Toggle Button */}
            <Link
              to="/theme"
              className="flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/60 transition-all"
              title="Switch to Soft Blue & Coral theme"
            >
              <Sun size={14} className="text-amber-300" />
              <span>Soft Blue</span>
            </Link>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="cta-primary !min-h-[38px] !py-1.5 !px-3.5 !text-xs font-bold"
            >
              <Send size={13} />
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 md:hidden hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-slate-800 bg-[#030712]/95 px-5 py-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-sky-500/15 text-sky-300 border border-sky-400/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link
                to="/theme"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs font-bold text-sky-300 bg-sky-500/10 border border-sky-400/30"
              >
                <span className="flex items-center gap-2">
                  <Sun size={15} className="text-amber-300" />
                  <span>Switch to Soft Blue &amp; Coral</span>
                </span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
              <button
                onClick={() => handleNavClick('#contact')}
                className="cta-primary !min-h-[38px] !py-1.5 !px-4 !text-xs font-bold"
              >
                <Send size={13} />
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
