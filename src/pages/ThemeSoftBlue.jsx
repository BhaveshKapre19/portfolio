import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  CheckCircle2,
  Server,
  Cloud,
  Layers,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  Award,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Rocket,
  Route,
  Target,
  Zap,
  HardDrive,
  Sparkles,
  Printer,
  Wrench,
  Terminal,
  Send,
  ArrowUp,
  Moon,
  Menu,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import profileImg from '../assets/profile.jpg';
import {
  navLinks,
  personalInfo,
  aboutText,
  skillCategories,
  projects,
  certifications,
  timeline,
  whyHireCards,
} from '../data/portfolioData';

const categories = ['All', 'Backend & Systems', 'Backend & APIs', 'Cloud & DevOps', 'Machine Learning'];

const skillIconMap = {
  'Backend & APIs': Server,
  'Cloud & Infrastructure': Cloud,
  'Databases & Ledgers': HardDrive,
  'Domain & Hardware Integrations': Printer,
  'Developer Tooling & Workflow': Wrench,
};

const timelineIconMap = {
  education: GraduationCap,
  growth: HeartHandshake,
  career: Rocket,
};

const whyHireIcons = [Zap, ShieldCheck, HardDrive, HeartHandshake];

const aboutHighlights = [
  { icon: Server, label: 'Backend Architecture', detail: 'Django REST, Idempotency, JWT' },
  { icon: ShieldCheck, label: 'Zero-Client Authority', detail: 'Financial calculations computed on server' },
  { icon: Cloud, label: 'Cloud & Linux Systems', detail: 'AWS EC2, S3, IAM, Nginx reverse proxy' },
  { icon: HardDrive, label: 'Data & Ledger Integrity', detail: 'SQLite WAL mode, MySQL, double-entry' },
];

function SoftProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots || (project.image ? [project.image] : []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3B4A6B]/50 p-3 sm:p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#DDE3F0] bg-white shadow-2xl"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#DDE3F0] bg-white/95 px-6 py-4 backdrop-blur-md">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF]">
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-[#3B4A6B]">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#5F6B85] hover:border-[#5B8DEF] hover:text-[#5B8DEF] transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          {screenshots.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-2">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} preview ${imgIndex + 1}`}
                className="w-full rounded-lg object-contain max-h-[460px] bg-white"
              />
              {screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#3B4A6B] shadow-md border border-[#DDE3F0] hover:bg-[#E8F0FE] transition-colors"
                    onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#3B4A6B] shadow-md border border-[#DDE3F0] hover:bg-[#E8F0FE] transition-colors"
                    onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-white/90 px-3 py-1 border border-[#DDE3F0] shadow-xs">
                    {screenshots.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          idx === imgIndex ? 'w-4 bg-[#5B8DEF]' : 'bg-[#DDE3F0]'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B4A6B]">
              Project Overview
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#5F6B85]">
              {project.description}
            </p>
          </div>

          {project.highlights && (
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B4A6B]">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F6B85]">
                    <CheckCircle2 size={16} className="text-[#5B8DEF] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className="rounded-xl border border-[#DDE3F0] bg-[#E8F0FE]/50 p-4 font-mono text-xs space-y-2">
              <p className="text-[#3B4A6B] font-bold uppercase tracking-wider">Architecture Topology:</p>
              <div className="grid sm:grid-cols-2 gap-2 text-[#5F6B85] pt-1">
                <div><span className="text-[#3B4A6B] font-semibold">Frontend: </span>{project.architecture.frontend}</div>
                <div><span className="text-[#3B4A6B] font-semibold">Backend: </span>{project.architecture.backend}</div>
                <div><span className="text-[#3B4A6B] font-semibold">Database: </span>{project.architecture.database}</div>
                <div><span className="text-[#3B4A6B] font-semibold">Network: </span>{project.architecture.network}</div>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B4A6B] mb-2">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="soft-blue-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#DDE3F0]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft-outline"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft-coral"
              >
                <ExternalLink size={16} />
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ThemeSoftBlue() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedType, setCopiedType] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}: ${data.subject || 'General'}`);
    const body = encodeURIComponent(
      `Hello Bhavesh,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    reset();
    setTimeout(() => setFormSent(false), 5000);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return p.featured;
    return p.category === activeCategory;
  });

  return (
    <div className="theme-soft-blue min-h-screen text-[#5F6B85] antialiased selection:bg-[#E8F0FE] selection:text-[#3B4A6B]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#DDE3F0] bg-[#FAFBFF]/95 shadow-xs backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 text-left focus:outline-none"
            aria-label="Bhavesh Kapre Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5B8DEF] text-sm font-black text-white shadow-xs">
              BK
            </div>
            <div>
              <span className="font-display block text-sm font-bold tracking-tight text-[#3B4A6B]">
                Bhavesh Kapre
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#5F6B85]">
                Backend &amp; Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#DDE3F0] bg-white px-2 py-1 shadow-2xs">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#5B8DEF] text-white shadow-xs'
                      : 'text-[#5F6B85] hover:text-[#3B4A6B] hover:bg-[#E8F0FE]/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button in Top Navbar */}
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-full border border-[#DDE3F0] bg-white px-3 py-1.5 text-xs font-bold text-[#3B4A6B] hover:border-[#5B8DEF] hover:text-[#5B8DEF] transition-all shadow-2xs"
              title="Switch to Dark Cyber theme"
            >
              <Moon size={14} className="text-[#3B4A6B]" />
              <span className="hidden sm:inline">Dark Cyber</span>
            </Link>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDE3F0] bg-white text-[#5F6B85] hover:border-[#5B8DEF] hover:text-[#5B8DEF] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDE3F0] bg-white text-[#5F6B85] hover:border-[#5B8DEF] hover:text-[#5B8DEF] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-soft-coral !min-h-[36px] !py-1 !px-4 !text-xs font-bold"
            >
              <Send size={13} />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDE3F0] bg-white text-[#3B4A6B] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-[#DDE3F0] bg-[#FAFBFF] px-5 py-4 lg:hidden shadow-lg"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-bold text-[#5F6B85] hover:bg-[#E8F0FE] hover:text-[#3B4A6B]"
                  >
                    <span>{link.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-[#DDE3F0]">
                <Link
                  to="/"
                  className="flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-bold text-[#3B4A6B] bg-[#E8F0FE]"
                >
                  <span className="flex items-center gap-2">
                    <Moon size={14} />
                    <span>Switch to Dark Cyber Theme</span>
                  </span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section (Clean Top Spacing, No Giant Gap) */}
      <section id="home" className="border-b border-[#DDE3F0] pt-8 pb-16 sm:pt-10 sm:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DDE3F0] bg-white px-3.5 py-1 text-[#3B4A6B] shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-semibold">{personalInfo.availability}</span>
              </div>

              <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#3B4A6B] leading-[1.05]">
                Bhavesh Kapre
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5B8DEF] mt-2">
                  builds reliable backend systems.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#5F6B85] max-w-2xl">
                {personalInfo.introduction}
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <button onClick={() => handleNavClick('#projects')} className="btn-soft-coral">
                  <span>View projects</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => handleNavClick('#contact')} className="btn-soft-blue">
                  <Mail size={16} />
                  <span>Contact me</span>
                </button>
                <a href={personalInfo.resumeUrl} download className="btn-soft-outline">
                  <Download size={15} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Right Column: System Profile Card (Exact Match to User's Preferred Card) */}
            <div className="soft-blue-card p-6 sm:p-7 bg-white">
              <div className="flex items-center justify-between border-b border-[#DDE3F0] pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8DEF] font-bold">
                    SYSTEM PROFILE
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-bold text-[#3B4A6B]">
                    Production-minded builder
                  </h2>
                </div>
                <ShieldCheck className="text-[#5B8DEF]" size={28} />
              </div>

              <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
                <p className="text-[#3B4A6B] font-bold">$ deploy --target backend</p>
                <p className="rounded-xl border border-[#DDE3F0] bg-[#E8F0FE]/70 p-3 text-[#5F6B85] leading-relaxed">
                  API design, authentication flow, database schema, Linux server setup, AWS services.
                </p>
                <p className="text-[#3B4A6B] font-bold">$ status --career</p>
                <p className="rounded-xl border border-[#DDE3F0] bg-[#E8F0FE]/70 p-3 text-[#5F6B85] leading-relaxed">
                  Ready for backend, cloud, and API integration opportunities.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3 text-center">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5F6B85]">
                    CORE STACK
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-[#3B4A6B]">
                    Python + AWS
                  </p>
                </div>
                <div className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3 text-center">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5F6B85]">
                    FOCUS
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-[#3B4A6B]">
                    APIs + Cloud
                  </p>
                </div>
                <div className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3 text-center">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5F6B85]">
                    READY FOR
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-[#3B4A6B]">
                    Backend roles
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3 flex items-center gap-3">
                  <Server className="text-[#5B8DEF] shrink-0" size={18} />
                  <p className="text-xs sm:text-sm font-bold text-[#3B4A6B]">Backend logic</p>
                </div>
                <div className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3 flex items-center gap-3">
                  <Cloud className="text-[#5B8DEF] shrink-0" size={18} />
                  <p className="text-xs sm:text-sm font-bold text-[#3B4A6B]">Cloud deploys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Clean 2-Column Grid Matching Dark Cyber) */}
      <section id="projects" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Featured Engineering
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              Production-Grade Systems &amp; Architectures
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              Real software built from scratch: desktop retail ERPs, custom MVC frameworks, and cloud infrastructure.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#3B4A6B] text-white shadow-xs'
                    : 'border border-[#DDE3F0] bg-white text-[#5F6B85] hover:border-[#5B8DEF] hover:text-[#3B4A6B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id || project.title}
                className="soft-blue-card group cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="h-48 w-full overflow-hidden rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B8DEF]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-mono text-[10px] font-bold text-[#E9726A] flex items-center gap-1">
                        <Star size={11} className="fill-[#E9726A]" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#3B4A6B] group-hover:text-[#5B8DEF] transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-0.5 text-xs font-semibold text-[#5F6B85]">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="mt-2.5 text-xs text-[#5F6B85] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DDE3F0]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="soft-blue-pill">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="soft-blue-pill text-[#5F6B85]">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#3B4A6B]">
                    <span className="group-hover:text-[#5B8DEF] flex items-center gap-1">
                      <span>View Architecture &amp; Code</span>
                      <ArrowRight size={13} />
                    </span>
                    <span className="text-[11px] font-mono text-[#5F6B85]">Explore Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Matching Dark Cyber 1:1) */}
      <section id="about" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Professional Background
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              Engineering software that businesses can depend on.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              I prioritize clean server-side logic, high-speed operational usability, data integrity, and reproducible cloud deployments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            {/* Left: Photo + Capability Highlights */}
            <div className="soft-blue-card p-5 sm:p-6 bg-white">
              <div className="relative overflow-hidden rounded-xl border border-[#DDE3F0]">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="aspect-[4/4.5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3B4A6B] via-[#3B4A6B]/80 to-transparent p-4 pt-10 text-white">
                  <p className="font-display text-lg font-bold">{personalInfo.name}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#E8F0FE] mt-0.5">
                    <MapPin size={13} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3.5"
                  >
                    <item.icon className="mb-2 text-[#5B8DEF]" size={20} />
                    <p className="text-xs font-bold text-[#3B4A6B]">{item.label}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#5F6B85]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Narrative & Engineering Principles */}
            <div className="soft-blue-card p-6 sm:p-8 bg-white space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF]">
                  Summary &amp; Trajectory
                </span>
                <h3 className="font-display mt-1 text-2xl font-bold text-[#3B4A6B]">
                  B.Tech Computer Science Engineer (2022)
                </h3>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#5F6B85]">
                  {aboutText.summary}
                </p>
              </div>

              <div className="rounded-xl border border-[#DDE3F0] bg-[#E8F0FE]/60 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[#5B8DEF] mb-2">
                  <HeartHandshake size={18} />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#3B4A6B]">
                    Resilience &amp; Continuous Growth (2022 — 2026)
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5F6B85]">
                  {aboutText.careerBreak}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5F6B85] block mb-3">
                  Core Architectural Principles
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aboutText.principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] p-3.5"
                    >
                      <div className="flex items-center gap-1.5 text-[#5B8DEF]">
                        <Sparkles size={14} />
                        <p className="text-xs font-bold text-[#3B4A6B]">{principle.title}</p>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-[#5F6B85]">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Matching Dark Cyber 1:1) */}
      <section id="skills" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Technical Competencies
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              Skills honed through building end-to-end production systems.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              A practical, multi-disciplinary toolkit centered on backend rigor, desktop ergonomics, and cloud infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((group) => {
              const Icon = skillIconMap[group.title] || Cpu;
              return (
                <div key={group.title} className="soft-blue-card p-6 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 border-b border-[#DDE3F0] pb-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#5B8DEF]">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display text-base font-bold text-[#3B4A6B]">
                        {group.title}
                      </h3>
                    </div>
                    {group.description && (
                      <p className="text-xs text-[#5F6B85] mb-4 leading-relaxed">
                        {group.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#DDE3F0]">
                    {group.skills.map((s) => (
                      <span
                        key={s.name}
                        className="soft-blue-pill !text-[11px]"
                      >
                        {s.name} {s.level && <span className="text-[#5F6B85]/80">• {s.level}</span>}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section (Matching Dark Cyber 1:1) */}
      <section id="certifications" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Verified Credentials
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              Industry-recognized certifications and verified assessments.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              Demonstrating structured expertise across Amazon Web Services, Microsoft Azure, Google Cloud, and relational databases.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="soft-blue-card p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#5B8DEF]">
                      <Award size={20} />
                    </div>
                    {cert.grade && (
                      <span className="font-mono text-[11px] font-bold rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-emerald-800">
                        {cert.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#3B4A6B] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#5B8DEF]">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-[11px] text-[#5F6B85]">{cert.date}</p>

                  {cert.skillsCovered && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((s) => (
                        <span key={s} className="soft-blue-pill !text-[10px] !py-0.5 !px-2">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDE3F0]">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B8DEF] hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <div className="font-mono text-[11px] text-[#5F6B85] flex items-center gap-1">
                      <ShieldCheck size={13} className="text-[#5B8DEF]" />
                      <span>Verified Skill Assessment</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Timeline Section (Matching Dark Cyber 1:1) */}
      <section id="experience" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Career &amp; Education Journey
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              From rigorous computer science education to production software craft.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              A clear trajectory: formal university education, personal character tested through high-responsibility caregiving, continuous systems engineering, and immediate full-time readiness.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-[#5B8DEF]/30" />

            <div className="space-y-8">
              {timeline.map((event) => {
                const Icon = timelineIconMap[event.type] || Briefcase;
                const isCurrent = event.type === 'career';

                return (
                  <article key={event.period + event.title} className="relative flex items-start gap-4 sm:gap-6">
                    <div
                      className={`relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm ${
                        isCurrent
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800 ring-4 ring-emerald-500/10'
                          : 'border-[#DDE3F0] bg-white text-[#5B8DEF]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="soft-blue-card flex-1 p-5 sm:p-6 bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF]">
                          {event.period}
                        </span>
                        {event.grade && (
                          <span
                            className={`font-mono text-[11px] font-bold rounded-full px-2.5 py-0.5 border ${
                              isCurrent
                                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                                : 'border-[#DDE3F0] bg-[#FAFBFF] text-[#3B4A6B]'
                            }`}
                          >
                            {event.grade}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#3B4A6B]">
                        {event.title}
                      </h3>

                      {event.institution && (
                        <p className="mt-0.5 text-xs font-semibold text-[#5F6B85]">
                          {event.institution}
                        </p>
                      )}

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5F6B85]">
                        {event.details}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Section (Matching Dark Cyber 1:1) */}
      <section id="why-hire" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
              Value Proposition
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#3B4A6B]">
              Why I am ready to make an immediate impact on your engineering team.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6B85]">
              Beyond standard tutorials: proven architectural thinking, real-world systems building, and dependable character.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyHireCards.map((card, idx) => {
              const Icon = whyHireIcons[idx] || CheckCircle2;
              return (
                <div
                  key={card.title}
                  className="soft-blue-card p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#5B8DEF]">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B8DEF]">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#3B4A6B]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#5F6B85]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#DDE3F0] flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 size={14} />
                    <span>Verified Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section (Matching Dark Cyber 1:1) */}
      <section id="contact" className="py-20 border-b border-[#DDE3F0]">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5B8DEF] bg-[#E8F0FE] border border-[#DDE3F0] rounded-full px-3 py-1">
                Get in Touch
              </span>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-[#3B4A6B]">
                Let's build something dependable together.
              </h2>
              <p className="mt-3 text-sm text-[#5F6B85] leading-relaxed">
                Available for full-time backend and cloud engineering roles with immediate impact.
              </p>

              <div className="mt-8 space-y-3">
                <div className="soft-blue-card p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#5B8DEF]" />
                    <div>
                      <p className="font-mono text-[10px] text-[#5F6B85] uppercase">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-[#3B4A6B] hover:text-[#5B8DEF]">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="btn-soft-outline !py-1 !px-2.5 !min-h-0 text-xs"
                    aria-label="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="soft-blue-card p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#5B8DEF]" />
                    <div>
                      <p className="font-mono text-[10px] text-[#5F6B85] uppercase">Phone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs font-bold text-[#3B4A6B] hover:text-[#5B8DEF]">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="btn-soft-outline !py-1 !px-2.5 !min-h-0 text-xs"
                    aria-label="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="soft-blue-card p-4 bg-white flex items-center gap-3">
                  <MapPin size={18} className="text-[#5B8DEF]" />
                  <div>
                    <p className="font-mono text-[10px] text-[#5F6B85] uppercase">Location</p>
                    <p className="text-xs font-bold text-[#3B4A6B]">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-soft-outline !p-2.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-soft-outline !p-2.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="soft-blue-card p-6 sm:p-8 bg-white">
                <h3 className="font-display text-xl font-bold text-[#3B4A6B] mb-4">
                  Send a Direct Message
                </h3>
                {formSent && (
                  <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-bold">
                    ✓ Your mail client is opening with pre-filled message!
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3B4A6B] mb-1">Your Name</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] px-3.5 py-2 text-xs text-[#3B4A6B] outline-none focus:border-[#5B8DEF]"
                        placeholder="e.g. Hiring Manager"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3B4A6B] mb-1">Your Email</label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] px-3.5 py-2 text-xs text-[#3B4A6B] outline-none focus:border-[#5B8DEF]"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3B4A6B] mb-1">Subject</label>
                    <input
                      {...register('subject')}
                      className="w-full rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] px-3.5 py-2 text-xs text-[#3B4A6B] outline-none focus:border-[#5B8DEF]"
                      placeholder="Backend Engineer Role / Project Consultation"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#3B4A6B] mb-1">Message</label>
                    <textarea
                      rows={5}
                      {...register('message', { required: true })}
                      className="w-full rounded-xl border border-[#DDE3F0] bg-[#FAFBFF] px-3.5 py-2 text-xs text-[#3B4A6B] outline-none focus:border-[#5B8DEF]"
                      placeholder="Share details regarding your team, stack, or project..."
                    />
                  </div>
                  <button type="submit" className="btn-soft-coral w-full">
                    <Send size={15} />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DDE3F0] bg-[#E8F0FE]/40 py-8">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6B85]">
          <p>© {new Date().getFullYear()} Bhavesh Kapre. Backend &amp; Cloud Engineer.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 font-bold text-[#3B4A6B] hover:text-[#5B8DEF] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </footer>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <SoftProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
