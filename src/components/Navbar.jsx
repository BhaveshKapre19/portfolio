/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Send, Sun, ArrowRight } from 'lucide-react';
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
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[#1e2f52] bg-[#0b1120]/95 shadow-lg shadow-black/40 backdrop-blur-md'
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
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-[#101a30] text-sm font-bold text-blue-400 transition-colors group-hover:border-blue-400/70 shadow-xs">
              BK
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-blue-400 ring-2 ring-[#0b1120]" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display block text-sm font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                Bhavesh Kapre
              </span>
              <span className="block text-xs uppercase tracking-wide text-slate-400 font-medium">
                Backend &amp; Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-[#1e2f52] bg-[#101a30]/80 p-1 backdrop-blur-md md:flex" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-[#162442]/50'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-400/40"
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
              className="flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60 transition-colors"
              title="Switch to Soft Blue theme"
            >
              <Sun size={14} className="text-blue-300" />
              <span>Theme</span>
            </Link>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2f52] bg-[#101a30] text-slate-400 transition-colors hover:border-blue-400/40 hover:text-white"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2f52] bg-[#101a30] text-slate-400 transition-colors hover:border-blue-400/40 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="cta-primary !min-h-[36px] !py-1.5 !px-3.5 !text-xs font-semibold"
            >
              <Send size={13} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1e2f52] bg-[#101a30] text-slate-300 md:hidden hover:text-white transition-colors"
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
            className="border-b border-[#1e2f52] bg-[#0b1120]/98 px-5 py-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-blue-500/15 text-blue-300 border border-blue-400/30'
                        : 'text-slate-300 hover:bg-[#162442] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#1e2f52]">
              <Link
                to="/theme"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/30 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sun size={15} className="text-blue-300" />
                  <span>Switch to Soft Blue Theme</span>
                </span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#1e2f52] pt-4">
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2f52] bg-[#101a30] text-slate-300"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2f52] bg-[#101a30] text-slate-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
              <button
                onClick={() => handleNavClick('#contact')}
                className="cta-primary !min-h-[36px] !py-1.5 !px-4 !text-xs font-semibold"
              >
                <Send size={13} />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
