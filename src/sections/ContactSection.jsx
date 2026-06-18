import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { GitFork, Globe, Mail, Send, MapPin, Phone } from 'lucide-react';
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
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 4 }}>
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 4 }}>
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Phone className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Phone</p>
                    <p className="text-gray-300 text-sm">{personalInfo.phone}</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 4 }}>
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <MapPin className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Location</p>
                    <p className="text-gray-300 text-sm">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, icon: GitFork },
                  { href: personalInfo.linkedin, icon: Globe },
                  { href: `mailto:${personalInfo.email}`, icon: Mail },
                ].map(({ href, icon: Icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                  })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}