import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9997] flex items-center justify-center bg-[#030712]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-slate-950 text-sky-400 shadow-xl shadow-sky-500/10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Cpu size={26} />
            </motion.div>
            <motion.p
              className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Bhavesh Kapre • Portfolio
            </motion.p>
            <div className="mx-auto mt-3 h-1 w-36 overflow-hidden rounded-full bg-slate-900 border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-blue-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
