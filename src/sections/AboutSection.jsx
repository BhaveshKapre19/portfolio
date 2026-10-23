import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
  Award,
  HeartHandshake,
  MapPin,
  Sparkles,
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { aboutText, personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Server, label: 'Backend Architecture', detail: 'Django REST, Idempotency, JWT' },
  { icon: ShieldCheck, label: 'Zero-Client Authority', detail: 'Financial calculations computed on server' },
  { icon: Cloud, label: 'Cloud & Linux Systems', detail: 'AWS EC2, S3, IAM, Nginx reverse proxy' },
  { icon: Database, label: 'Data & Ledger Integrity', detail: 'SQLite WAL mode, MySQL, double-entry' },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <ShieldCheck size={14} /> Professional Background
          </div>
          <h2 className="section-title">
            Engineering software that businesses can depend on.
          </h2>
          <p className="section-subtitle">
            I prioritize clean server-side logic, high-speed operational usability, data integrity, and reproducible cloud deployments.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* Left Column: Photo & Key Focus Areas */}
          <motion.div
            className="solid-card overflow-hidden p-5 sm:p-6"
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-800">
              <img
                src={profileImg}
                alt="Bhavesh Kapre"
                className="aspect-[4/4.5] w-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-10">
                <p className="font-display text-lg font-bold text-white">{personalInfo.name}</p>
                <div className="flex items-center gap-1.5 text-xs text-sky-400 mt-0.5">
                  <MapPin size={13} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Core Capability Cards Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-3.5 transition-colors hover:border-slate-700"
                >
                  <item.icon className="mb-2.5 text-sky-400" size={20} />
                  <p className="text-xs font-bold text-white">{item.label}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Narrative & Engineering Principles */}
          <motion.div
            className="solid-card p-6 sm:p-8 space-y-6"
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                Summary &amp; Trajectory
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-white">
                B.Tech Computer Science Engineer (2022)
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
                {aboutText.summary}
              </p>
            </div>

            {/* Career Break & Responsibility Narrative */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-sky-400 mb-2">
                <HeartHandshake size={18} />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Resilience &amp; Continuous Growth (2022 — 2026)
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {aboutText.careerBreak}
              </p>
            </div>

            {/* Engineering Principles */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Core Architectural Principles
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {aboutText.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3.5 transition-colors hover:border-slate-700"
                  >
                    <div className="flex items-center gap-1.5 text-sky-400">
                      <Sparkles size={14} />
                      <p className="text-xs font-bold text-white">{principle.title}</p>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
