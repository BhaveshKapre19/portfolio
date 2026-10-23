import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Cloud, Download, Mail, Server, ShieldCheck, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

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
    const speed = isDeleting ? 40 : 85;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  return <span>{displayText}<span className="text-sky-300">_</span></span>;
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-sky-300/50"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.72, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

const metrics = [
  { label: 'Core stack', value: 'Python + AWS' },
  { label: 'Focus', value: 'APIs + Cloud' },
  { label: 'Ready for', value: 'Backend roles' },
];

export default function HeroSection() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-dvh items-center overflow-hidden border-b border-slate-800/80 pt-24 sm:pt-28">
      <ParticleBackground />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent pointer-events-none" />
      <div className="section-container relative z-10 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="section-kicker mx-auto lg:mx-0">
              <Terminal size={16} />
              Available for backend and cloud teams
            </div>

            <h1 className="font-display mt-7 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Bhavesh Kapre
              <span className="mt-3 block text-sky-300">builds reliable backend systems.</span>
            </h1>

            <div className="mx-auto mt-6 min-h-8 max-w-2xl font-mono text-base font-semibold text-slate-300 sm:text-lg lg:mx-0">
              <Typewriter texts={personalInfo.titles} />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
              {personalInfo.introduction} I care about clean APIs, deployable architecture, and cloud setups that are easy to reason about.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.button onClick={scrollToProjects} className="cta-primary" whileTap={{ scale: 0.98 }}>
                View projects
                <ArrowRight size={18} />
              </motion.button>
              <motion.button onClick={scrollToContact} className="cta-secondary" whileTap={{ scale: 0.98 }}>
                <Mail size={18} />
                Contact me
              </motion.button>
              
            </div>
          </motion.div>

          <motion.div
            className="solid-card relative overflow-hidden p-5"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="absolute right-0 top-0 h-32 w-32 border-l border-b border-sky-300/20 bg-sky-300/5 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-sky-300">system profile</p>
                <h2 className="font-display mt-2 text-2xl font-bold text-white">Production-minded builder</h2>
              </div>
              <ShieldCheck className="text-sky-300" size={28} />
            </div>

            <div className="mt-5 space-y-3 font-mono text-sm">
              <p className="text-emerald-300">$ deploy --target backend</p>
              <p className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-300">API design, authentication flow, database schema, Linux server setup, AWS services.</p>
              <p className="text-emerald-300">$ status --career</p>
              <p className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-300">Ready for backend, cloud, and API integration opportunities.</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-800 bg-[#080d18] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-800 bg-[#080d18] p-4">
                <Server className="mb-3 text-sky-300" size={22} />
                <p className="text-sm font-bold text-white">Backend logic</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-[#080d18] p-4">
                <Cloud className="mb-3 text-sky-300" size={22} />
                <p className="text-sm font-bold text-white">Cloud deploys</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-600 sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
          style={{ pointerEvents: 'none' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
