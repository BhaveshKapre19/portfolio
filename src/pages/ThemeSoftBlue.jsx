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
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  Award,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Rocket,
  Zap,
  HardDrive,
  Sparkles,
  Printer,
  Wrench,
  Send,
  ArrowUp,
  Moon,
  Menu,
  BookOpen,
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

const whyHireIcons = [Zap, ShieldCheck, HardDrive, BookOpen];

const aboutHighlights = [
  { icon: Server, label: 'REST API Development', detail: 'Django REST Framework, JWT auth, structured endpoints' },
  { icon: ShieldCheck, label: 'Server-Side Logic', detail: 'Business rules & calculations computed on the backend' },
  { icon: Cloud, label: 'Cloud & Linux', detail: 'AWS EC2, S3, IAM, Nginx reverse proxy' },
  { icon: HardDrive, label: 'Database Design', detail: 'MySQL, SQLite, schema design, optimized queries' },
];

function SoftProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots || (project.image ? [project.image] : []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-3 sm:p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-md">
          <div>
            <span className="font-sans text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              {project.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          {screenshots.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} preview ${imgIndex + 1}`}
                className="w-full rounded-lg object-contain max-h-[460px] bg-white"
              />
              {screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md border border-slate-200 hover:bg-blue-50 transition-colors"
                    onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md border border-slate-200 hover:bg-blue-50 transition-colors"
                    onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-white/90 px-3 py-1 border border-slate-200 shadow-xs">
                    {screenshots.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          idx === imgIndex ? 'w-4 bg-blue-600' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-wide text-slate-800">
              Project Overview
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
              {project.description}
            </p>
          </div>

          {project.highlights && (
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wide text-slate-800">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs space-y-2">
              <p className="font-sans text-slate-900 font-bold uppercase tracking-wide">Architecture Topology</p>
              <div className="grid sm:grid-cols-2 gap-2 text-slate-600 pt-1">
                <div><span className="text-slate-900 font-semibold">Frontend: </span>{project.architecture.frontend}</div>
                <div><span className="text-slate-900 font-semibold">Backend: </span>{project.architecture.backend}</div>
                <div><span className="text-slate-900 font-semibold">Database: </span>{project.architecture.database}</div>
                <div><span className="text-slate-900 font-semibold">Network: </span>{project.architecture.network}</div>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">
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

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
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
            {(project.live || project.liveUrl) && (
              <a
                href={project.live || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft-blue"
              >
                <ExternalLink size={16} />
                <span>Visit Live System / Blog</span>
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
    document.title = 'Bhavesh Kapre | Python Backend Developer (Soft Blue Theme)';

    const handleScroll = () => {
      const sections = navLinks
        .filter((link) => !link.external)
        .map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
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
    setTimeout(() => setCopiedType(null), 2000);
  };

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}: ${data.subject || 'General'}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.assign(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setFormSent(true);
    reset();
    setTimeout(() => setFormSent(false), 5000);
  };

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return p.featured;
    return p.category === activeCategory;
  });

  return (
    <div className="theme-soft-blue min-h-screen text-slate-600 antialiased selection:bg-blue-100 selection:text-blue-900 bg-[#FAFBFF] font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#FAFBFF]/95 shadow-xs backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 text-left focus:outline-none"
            aria-label="Bhavesh Kapre Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-xs">
              BK
            </div>
            <div>
              <span className="font-display block text-sm font-bold tracking-tight text-slate-900">
                Bhavesh Kapre
              </span>
              <span className="block text-xs font-medium text-slate-500">
                Backend &amp; Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-2xs">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-blue-50/70 transition-all"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={11} className="text-slate-400" />
                  </a>
                );
              }
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-2xs"
              title="Switch to Dark Theme"
            >
              <Moon size={14} className="text-slate-600" />
              <span className="hidden sm:inline">Dark Theme</span>
            </Link>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={personalInfo.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              aria-label="Technical Blog"
              title="Technical Blog (blog.bhaveshkapre.in)"
            >
              <BookOpen size={16} />
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-soft-blue !min-h-[36px] !py-1.5 !px-4 !text-xs font-semibold"
            >
              <Send size={13} />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
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
              className="border-b border-slate-200 bg-[#FAFBFF] px-5 py-4 lg:hidden shadow-lg"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen size={14} className="text-blue-600" />
                          <span>{link.label}</span>
                        </span>
                        <ExternalLink size={13} className="text-slate-400" />
                      </a>
                    );
                  }
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200">
                <Link
                  to="/"
                  className="flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-800 bg-blue-50 hover:bg-blue-100/70 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Moon size={14} className="text-slate-700" />
                    <span>Switch to Dark Theme</span>
                  </span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="border-b border-slate-200 pt-8 pb-16 sm:pt-10 sm:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-slate-700 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">{personalInfo.availability}</span>
              </div>

              <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Bhavesh Kapre
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mt-2">
                  learning, building, ready to contribute.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl font-sans">
                {personalInfo.introduction}
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <button onClick={() => handleNavClick('#projects')} className="btn-soft-blue">
                  <span>View projects</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => handleNavClick('#contact')} className="btn-soft-outline">
                  <Mail size={16} />
                  <span>Contact me</span>
                </button>
                <a href={personalInfo.resumeUrl} download className="btn-soft-outline">
                  <Download size={15} />
                  <span>Resume</span>
                </a>
                <a
                  href={personalInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-soft-outline"
                  aria-label="Read Technical Blog"
                >
                  <BookOpen size={15} />
                  <span>Blog</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Column: System Profile Card */}
            <div className="soft-blue-card p-6 sm:p-7 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wide text-blue-600 font-bold">
                    SYSTEM PROFILE
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-bold text-slate-900">
                    Builder, learner, ready to contribute
                  </h2>
                </div>
                <ShieldCheck className="text-blue-600" size={28} />
              </div>

              <div className="mt-5 space-y-3 text-xs sm:text-sm">
                <p className="text-slate-900 font-mono font-bold">$ deploy --target backend</p>
                <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-slate-700 leading-relaxed font-sans">
                  API design, authentication flow, database schema, Linux server setup, AWS services.
                </p>
                <p className="text-slate-900 font-mono font-bold">$ status --career</p>
                <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-slate-700 leading-relaxed font-sans">
                  Ready for backend, cloud, and API integration opportunities.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-slate-500">
                    CORE STACK
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900">
                    Python + AWS
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-slate-500">
                    FOCUS
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900">
                    APIs + Cloud
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-slate-500">
                    READY FOR
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-slate-900">
                    Backend roles
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 flex items-center gap-3">
                  <Server className="text-blue-600 shrink-0" size={18} />
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Backend logic</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 flex items-center gap-3">
                  <Cloud className="text-blue-600 shrink-0" size={18} />
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Cloud deploys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Featured Engineering
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Projects — From Freelancing Work to Personal Learning
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              One real freelancing project (Biller ERP) plus several personal and learning projects across backend, cloud, and ML.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-slate-900'
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
                  <div className="h-48 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-xs font-semibold text-blue-600">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="font-sans text-xs font-semibold text-blue-700 flex items-center gap-1">
                        <Star size={12} className="fill-blue-600 text-blue-600" /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="soft-blue-pill">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="soft-blue-pill text-slate-500">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                    <span className="group-hover:text-blue-600 flex items-center gap-1">
                      <span>View Architecture &amp; Code</span>
                      <ArrowRight size={13} />
                    </span>
                    <span className="text-xs text-slate-500">Explore Details &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Professional Background
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Backend Engineer building resilient APIs, production POS systems, and AWS workloads.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Designing reliable server-side architectures with Python, Django, MySQL, and automated AWS deployments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            {/* Left: Photo + Capability Highlights */}
            <div className="soft-blue-card p-5 sm:p-6 bg-white">
              <div className="relative overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="aspect-[4/4.5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-4 pt-10 text-white">
                  <p className="font-display text-lg font-bold">{personalInfo.name}</p>
                  <div className="flex items-center gap-1.5 text-xs text-blue-200 mt-0.5">
                    <MapPin size={13} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5"
                  >
                    <item.icon className="mb-2 text-blue-600" size={20} />
                    <p className="text-xs font-bold text-slate-900">{item.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Narrative & Engineering Principles */}
            <div className="soft-blue-card p-6 sm:p-8 bg-white space-y-6">
              <div>
                <span className="font-sans text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Summary &amp; Trajectory
                </span>
                <h3 className="font-display mt-1 text-2xl font-bold text-slate-900">
                  B.Tech Computer Science Engineer (2022)
                </h3>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600">
                  {aboutText.summary}
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <HeartHandshake size={18} />
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    Resilience &amp; Continuous Growth (2022 &mdash; 2026)
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  {aboutText.careerBreak}
                </p>
              </div>

              <div>
                <span className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">
                  What I Focus On
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aboutText.principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5"
                    >
                      <div className="flex items-center gap-1.5 text-blue-600">
                        <Sparkles size={14} />
                        <p className="text-xs font-bold text-slate-900">{principle.title}</p>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Technical Competencies
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Skills built through real projects and self-study.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              A practical toolkit centered on backend development, REST APIs, cloud infrastructure, and databases.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((group) => {
              const Icon = skillIconMap[group.title] || Cpu;
              return (
                <div key={group.title} className="soft-blue-card p-6 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display text-base font-bold text-slate-900">
                        {group.title}
                      </h3>
                    </div>
                    {group.description && (
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {group.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                    {group.skills.map((s) => (
                      <span
                        key={s.name}
                        className="soft-blue-pill !text-xs font-medium"
                      >
                        {s.name} {s.level && <span className="text-slate-400">&bull; {s.level}</span>}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Verified Credentials
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Industry-recognized certifications and verified assessments.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Demonstrating structured expertise across Amazon Web Services, Microsoft Azure, Google Cloud, and relational databases.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="soft-blue-card p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Award size={20} />
                    </div>
                    {cert.grade && (
                      <span className="font-sans text-xs font-semibold rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-blue-700">
                        {cert.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-blue-600">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-slate-500">{cert.date}</p>

                  {cert.skillsCovered && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((s) => (
                        <span key={s} className="soft-blue-pill !text-xs !py-0.5 !px-2">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <ShieldCheck size={13} className="text-blue-600" />
                      <span>Verified Skill Assessment</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experience" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Career &amp; Education Journey
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              My path: two CS degrees, independent learning, one freelancing project — now ready to work.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Two computer science qualifications, self-directed study through certifications, one real freelancing project, and now actively seeking my first full-time role.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-blue-200" />

            <div className="space-y-8">
              {timeline.map((event) => {
                const Icon = timelineIconMap[event.type] || Briefcase;
                const isCurrent = event.type === 'career';

                return (
                  <article key={event.period + event.title} className="relative flex items-start gap-4 sm:gap-6">
                    <div
                      className={`relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border shadow-xs ${
                        isCurrent
                          ? 'border-blue-300 bg-blue-50 text-blue-700 ring-4 ring-blue-500/10'
                          : 'border-slate-200 bg-white text-blue-600'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="soft-blue-card flex-1 p-5 sm:p-6 bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="font-sans text-xs font-semibold text-blue-600">
                          {event.period}
                        </span>
                        {event.grade && (
                          <span
                            className={`font-sans text-xs font-semibold rounded-full px-2.5 py-0.5 border ${
                              isCurrent
                                ? 'border-blue-300 bg-blue-50 text-blue-800'
                                : 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                          >
                            {event.grade}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {event.title}
                      </h3>

                      {event.institution && (
                        <p className="mt-0.5 text-xs font-medium text-slate-500">
                          {event.institution}
                        </p>
                      )}

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
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

      {/* Why Hire Section */}
      <section id="why-hire" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
              Value Proposition
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Engineering Capabilities &amp; Production Readiness.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Real-world systems delivery, certified cloud fundamentals, and transparent engineering documentation.
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={20} />
                      </div>
                      <span className="font-sans text-xs font-semibold text-blue-600">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                    <CheckCircle2 size={14} />
                    <span>Verified Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-sans text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1">
                Get in Touch
              </span>
              <h2 className="font-display mt-3 text-3xl font-bold text-slate-900">
                Let's build something dependable together.
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Fresher and immediately available. Open to backend, cloud, and full-stack roles — happy to connect for opportunities or just a chat.
              </p>

              <div className="mt-8 space-y-3">
                <div className="soft-blue-card p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-600" />
                    <div>
                      <p className="font-sans text-xs font-medium text-slate-500 uppercase tracking-wide">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="btn-soft-outline !py-1 !px-2.5 !min-h-0 text-xs"
                    aria-label="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={14} className="text-blue-600" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="soft-blue-card p-4 bg-white flex items-center gap-3">
                  <MapPin size={18} className="text-blue-600" />
                  <div>
                    <p className="font-sans text-xs font-medium text-slate-500 uppercase tracking-wide">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="soft-blue-card p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-blue-600" />
                    <div>
                      <p className="font-sans text-xs font-medium text-slate-500 uppercase tracking-wide">Technical Blog</p>
                      <a
                        href={personalInfo.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                      >
                        <span>{personalInfo.blogDisplay || 'blog.bhaveshkapre.in'}</span>
                        <ExternalLink size={13} className="text-slate-400" />
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-soft-outline !py-1 !px-2.5 !min-h-0 text-xs"
                    aria-label="Visit Technical Blog"
                  >
                    <ExternalLink size={14} />
                  </a>
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
                <a
                  href={personalInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-soft-outline !p-2.5"
                  aria-label="Technical Blog"
                  title="Technical Blog (blog.bhaveshkapre.in)"
                >
                  <BookOpen size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="soft-blue-card p-6 sm:p-8 bg-white">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                  Send a Direct Message
                </h3>
                {formSent && (
                  <div className="mb-4 rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800 font-semibold">
                    ✓ Your mail client is opening with pre-filled message!
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        placeholder="e.g. Hiring Manager"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                    <input
                      {...register('subject')}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      placeholder="Backend Engineer Role / Project Consultation"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      rows={5}
                      {...register('message', { required: true })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                      placeholder="Share details regarding your team, stack, or project..."
                    />
                  </div>
                  <button type="submit" className="btn-soft-blue w-full font-semibold !py-3">
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
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Bhavesh Kapre &middot; Backend &amp; Cloud Engineer</p>
            <span className="hidden sm:inline text-slate-300">&middot;</span>
            <a
              href={personalInfo.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              title="Technical Blog"
            >
              <BookOpen size={14} />
              <span>Blog</span>
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
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
