/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { motion } from 'framer-motion';
import {
  Cloud,
  Database,
  Server,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Sparkles,
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { aboutText, personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Server, label: 'REST API Development', detail: 'Django REST Framework, JWT auth, structured endpoints' },
  { icon: ShieldCheck, label: 'Server-Side Logic', detail: 'Business rules & calculations computed on the backend' },
  { icon: Cloud, label: 'Cloud & Linux', detail: 'AWS EC2, S3, IAM, Nginx reverse proxy' },
  { icon: Database, label: 'Database Design', detail: 'MySQL, SQLite, schema design, optimized queries' },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-shell border-t border-subtle" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <ShieldCheck size={14} className="text-blue-400" />
            <span>Professional Background</span>
          </div>
          <h2 className="section-title">
            Backend Engineer building resilient APIs, production POS systems, and AWS workloads.
          </h2>
          <p className="section-subtitle">
            Designing reliable server-side architectures with Python, Django, MySQL, and automated AWS deployments.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* Left Column: Photo & Key Focus Areas */}
          <motion.div
            className="bento-card overflow-hidden p-5 sm:p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden rounded-xl border border-subtle bg-canvas-subtle">
              <img
                src={profileImg}
                alt="Bhavesh Kapre"
                width="480"
                height="540"
                className="aspect-[4/4.5] w-full object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-10">
                <p className="font-display text-lg font-bold text-white">{personalInfo.name}</p>
                <div className="flex items-center gap-1.5 text-xs text-blue-300 mt-0.5 font-medium">
                  <MapPin size={13} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Core Capability Cards Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="terminal-box p-3.5 transition-colors hover:border-blue-400/40"
                >
                  <item.icon className="mb-2 text-blue-400" size={18} />
                  <p className="text-xs font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300 font-normal">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Narrative & Engineering Principles */}
          <motion.div
            className="bento-card p-6 sm:p-8 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                Summary &amp; Trajectory
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-white">
                B.Tech Computer Science Engineer (2022)
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                {aboutText.summary}
              </p>
            </div>

            {/* Career Break & Responsibility Narrative */}
            <div className="terminal-box p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-300 mb-2">
                <HeartHandshake size={18} />
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                  Career Context &amp; Engineering Focus (2022 — Present)
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                {aboutText.careerBreak}
              </p>
            </div>

            {/* Engineering Principles */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 block mb-3">
                Core Engineering Commitments
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {aboutText.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="terminal-box p-3.5 transition-colors hover:border-blue-400/40"
                  >
                    <div className="flex items-center gap-1.5 text-blue-300">
                      <Sparkles size={14} />
                      <p className="text-xs font-bold text-white">{principle.title}</p>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300 font-normal">
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