import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { GitFork, Globe2, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section-shell" ref={ref}>
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <div className="section-kicker mx-auto"><MessageSquare size={15} /> Contact</div>
          <h2 className="section-title">Let us talk about backend, cloud, or API work.</h2>
          <p className="section-subtitle">Send a message or reach me through email, GitHub, or LinkedIn.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div className="space-y-5" initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}>
            <div className="solid-card p-6">
              <h3 className="font-display text-2xl font-bold text-white">Contact details</h3>
              <div className="mt-6 space-y-5">
                <a href={`mailto:${personalInfo.email}`} className="flex min-h-12 items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300 hover:border-sky-300/50 hover:text-white">
                  <Mail className="text-sky-300" size={20} />
                  <span className="break-all text-sm font-bold">{personalInfo.email}</span>
                </a>
                <div className="flex min-h-12 items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300">
                  <MapPin className="text-sky-300" size={20} />
                  <span className="text-sm font-bold">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="solid-card p-6">
              <h3 className="font-display text-xl font-bold text-white">Connect</h3>
              <div className="mt-5 flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:border-sky-300/50 hover:text-white" aria-label="GitHub">
                  <GitFork size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:border-sky-300/50 hover:text-white" aria-label="LinkedIn">
                  <Globe2 size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:border-sky-300/50 hover:text-white" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit(onSubmit)} className="solid-card space-y-6 p-6 sm:p-8" initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}>
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">Name</label>
              <input {...register('name', { required: 'Name is required' })} className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-slate-100 placeholder-slate-600 transition-colors focus:border-sky-300 focus:outline-none" placeholder="Your name" />
              {errors.name && <p className="mt-2 text-sm text-red-300" role="alert">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">Email</label>
              <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })} className="min-h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-slate-100 placeholder-slate-600 transition-colors focus:border-sky-300 focus:outline-none" placeholder="your@email.com" />
              {errors.email && <p className="mt-2 text-sm text-red-300" role="alert">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">Message</label>
              <textarea rows={5} {...register('message', { required: 'Message is required' })} className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder-slate-600 transition-colors focus:border-sky-300 focus:outline-none" placeholder="Tell me what you are building..." />
              {errors.message && <p className="mt-2 text-sm text-red-300" role="alert">{errors.message.message}</p>}
            </div>
            <motion.button type="submit" disabled={isSubmitting} className="cta-primary w-full disabled:cursor-not-allowed disabled:opacity-60" whileTap={{ scale: 0.99 }}>
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

