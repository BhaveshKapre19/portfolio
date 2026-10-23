import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  Check,
  Phone,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [copiedType, setCopiedType] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const onSubmit = async (data) => {
    // Open user's default email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}: ${data.subject || 'General'}`);
    const body = encodeURIComponent(
      `Hello Bhavesh,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    reset();
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's discuss backend, desktop ERP, or cloud engineering roles.
          </h2>
          <p className="section-subtitle">
            I am actively interviewing and open to full-time Software Engineer (Backend / Full-Stack / Cloud) opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Direct Contact & Status */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            {/* Status Card */}
            <div className="solid-card p-6">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Immediate Availability</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Ready for Full-Time Roles
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Open to Remote, Hybrid, or On-site positions in India. Specializing in Python / Django / DRF backend development, desktop ERP clients (Tauri v2), and AWS cloud architectures.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="solid-card p-6 space-y-3.5">
              <h3 className="font-display text-lg font-bold text-white mb-4">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 transition-colors hover:border-slate-700">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/60 border border-sky-400/30 text-sky-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500">Email Address</p>
                    <p className="text-xs sm:text-sm font-semibold">{personalInfo.email}</p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900 transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              {personalInfo.phone && (
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 transition-colors hover:border-slate-700">
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/60 border border-sky-400/30 text-sky-400">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-500">Phone &amp; WhatsApp</p>
                      <p className="text-xs sm:text-sm font-semibold">{personalInfo.phone}</p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900 transition-colors"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/60 border border-sky-400/30 text-sky-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-500">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="solid-card p-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Connect Online:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:border-sky-400/50 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:border-sky-400/50 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            className="solid-card p-6 sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Fill out this quick form to send me an email directly.
            </p>

            {formSent && (
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-xs font-semibold text-emerald-300 flex items-center gap-2">
                <Check size={16} />
                <span>Your default email client opened with the pre-filled message!</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="mt-1 text-[11px] text-rose-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Valid email required' },
                    })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-rose-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject / Position
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  placeholder="e.g. Backend Engineer Opportunity at Tech Corp"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell me about your team, tech stack, or the project you'd like to collaborate on..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="mt-1 text-[11px] text-rose-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-primary w-full !py-3 font-bold text-xs sm:text-sm"
              >
                <Send size={15} />
                <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
