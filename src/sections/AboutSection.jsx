import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Server, ShieldCheck } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { aboutText } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Server, label: 'Backend systems', detail: 'APIs, auth, services' },
  { icon: Cloud, label: 'Cloud deployment', detail: 'AWS, Linux, Nginx' },
  { icon: Database, label: 'Data design', detail: 'MySQL, schemas, queries' },
  { icon: Code2, label: 'Full build flow', detail: 'From idea to deployment' },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto"><ShieldCheck size={15} /> About</div>
          <h2 className="section-title">A backend developer with a practical cloud mindset.</h2>
          <p className="section-subtitle">I focus on the unglamorous parts that make software dependable: clean data models, stable APIs, deployable services, and clear operational thinking.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            className="solid-card overflow-hidden p-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          >
            <img src={profileImg} alt="Bhavesh Kapre" className="aspect-[4/5] w-full rounded-xl object-cover object-center sm:aspect-[4/3] lg:aspect-[4/5]" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-[#080d18] p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.25 + idx * 0.06, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                >
                  <item.icon className="mb-3 text-sky-300" size={22} />
                  <p className="text-sm font-bold text-white">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="solid-card p-6 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
          >
            <div className="space-y-5 whitespace-pre-line text-base leading-8 text-slate-300">
              {aboutText}
            </div>
            <div className="mt-8 border-l-2 border-sky-300 bg-slate-950 p-5">
              <p className="font-mono text-sm leading-7 text-sky-200">Ready to join a team where dependable backend work, cloud fundamentals, and steady learning matter.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
