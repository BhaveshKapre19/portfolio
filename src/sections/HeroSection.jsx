import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Server,
  Cloud,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function Typewriter({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentText = texts[currentIndex];
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 1800);
      }
    } else if (displayText.length > 0) {
      setDisplayText(displayText.slice(0, -1));
    } else {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, displayText, texts, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 35 : 75;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  return (
    <span>
      {displayText}
      <span className="text-sky-300">_</span>
    </span>
  );
}

const metrics = [
  { label: 'CORE STACK', value: 'Python + AWS' },
  { label: 'FOCUS', value: 'APIs + Cloud' },
  { label: 'READY FOR', value: 'Backend roles' },
];

export default function HeroSection() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden border-b border-slate-800/80 pt-24 pb-16 sm:pt-28">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          {/* Left Column: Bio & Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="section-kicker mx-auto lg:mx-0">
              <Terminal size={15} />
              {personalInfo.availability}
            </div>

            <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.02]">
              Bhavesh Kapre
              <span className="mt-2.5 block text-sky-300">builds reliable backend systems.</span>
            </h1>

            <div className="mx-auto mt-4 min-h-7 max-w-2xl font-mono text-base font-semibold text-slate-300 lg:mx-0">
              <Typewriter texts={personalInfo.titles} />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              {personalInfo.introduction}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <motion.button onClick={scrollToProjects} className="cta-primary" whileTap={{ scale: 0.98 }}>
                <span>View projects</span>
                <ArrowRight size={17} />
              </motion.button>
              <motion.button onClick={scrollToContact} className="cta-secondary" whileTap={{ scale: 0.98 }}>
                <Mail size={16} />
                <span>Contact me</span>
              </motion.button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="cta-outline"
                aria-label="Download Resume"
              >
                <Download size={15} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: System Profile Card (Exact UI as in User's Screenshot) */}
          <motion.div
            className="solid-card relative overflow-hidden p-6 sm:p-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 font-bold">
                  SYSTEM PROFILE
                </p>
                <h2 className="font-display mt-1 text-2xl font-bold text-white">
                  Production-minded builder
                </h2>
              </div>
              <ShieldCheck className="text-sky-400" size={28} />
            </div>

            <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
              <p className="text-emerald-400 font-bold">$ deploy --target backend</p>
              <p className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-slate-300 leading-relaxed">
                API design, authentication flow, database schema, Linux server setup, AWS services.
              </p>
              <p className="text-emerald-400 font-bold">$ status --career</p>
              <p className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-slate-300 leading-relaxed">
                Ready for backend, cloud, and API integration opportunities.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-[#080d18] p-3.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-xs sm:text-sm font-bold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-slate-800 bg-[#080d18] p-3.5 flex items-center gap-3">
                <Server className="text-sky-400 shrink-0" size={20} />
                <p className="text-xs sm:text-sm font-bold text-white">Backend logic</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#080d18] p-3.5 flex items-center gap-3">
                <Cloud className="text-sky-400 shrink-0" size={20} />
                <p className="text-xs sm:text-sm font-bold text-white">Cloud deploys</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
