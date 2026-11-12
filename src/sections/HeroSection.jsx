/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
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
      <span className="text-blue-400 font-mono">_</span>
    </span>
  );
}

const metrics = [
  { label: 'Core Stack', value: 'Python + AWS' },
  { label: 'Primary Focus', value: 'APIs + Cloud' },
  { label: 'Readiness', value: 'Backend roles' },
];

export default function HeroSection() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-[#1e2f52] pt-24 pb-16 sm:pt-28">
      {/* Gentle ambient light */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[280px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Bio & Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="section-badge mx-auto lg:mx-0" role="status">
              <Terminal size={14} className="text-blue-400" />
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Bhavesh Kapre
              <span className="mt-2.5 block text-blue-400 font-bold">learning, building, ready to contribute.</span>
            </h1>

            <div className="mx-auto mt-4 min-h-7 max-w-2xl font-sans text-base sm:text-lg font-semibold text-blue-300 lg:mx-0">
              <Typewriter texts={personalInfo.titles} />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0 font-normal">
              {personalInfo.introduction}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <motion.button onClick={scrollToProjects} className="cta-primary" whileTap={{ scale: 0.98 }}>
                <span>View projects</span>
                <ArrowRight size={16} />
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

          {/* Right Column: System Profile Card */}
          <motion.div
            className="bento-card overflow-hidden p-6 sm:p-7"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between border-b border-[#1e2f52] pb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-400 font-semibold">
                  System Profile
                </p>
                <h2 className="display mt-1 text-2xl font-bold text-white">
                  Builder, learner, ready to contribute
                </h2>
              </div>
              <ShieldCheck className="text-blue-400" size={26} />
            </div>

            <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-blue-300 font-bold">
                <span className="text-slate-500">&gt;</span>
                <span>deploy --target backend</span>
              </div>
              <p className="terminal-box text-slate-200 leading-relaxed font-sans">
                API design, authentication flow, database schema, Linux server setup, AWS services.
              </p>

              <div className="flex items-center gap-2 text-blue-300 font-bold">
                <span className="text-slate-500">&gt;</span>
                <span>status --career</span>
              </div>
              <p className="terminal-box text-slate-200 leading-relaxed font-sans">
                Ready for backend, cloud, and API integration opportunities.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {metrics.map((item) => (
                <div key={item.label} className="terminal-box p-3">
                  <p className="text-[11px] font-medium text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="terminal-box p-3 flex items-center gap-3">
                <Server className="text-blue-400 shrink-0" size={18} />
                <p className="text-xs sm:text-sm font-semibold text-white">Backend logic</p>
              </div>
              <div className="terminal-box p-3 flex items-center gap-3">
                <Cloud className="text-blue-400 shrink-0" size={18} />
                <p className="text-xs sm:text-sm font-semibold text-white">Cloud deploys</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
