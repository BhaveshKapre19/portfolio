import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div key="loader" className="fixed inset-0 z-[9997] flex items-center justify-center bg-[#05070d]" exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
          <div className="text-center">
            <motion.div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-300/30 bg-slate-950 text-sky-300" animate={{ y: [0, -6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}>
              <Terminal size={26} />
            </motion.div>
            <motion.p className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.18em] text-sky-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
              Booting portfolio
            </motion.p>
            <div className="mx-auto mt-4 h-1 w-40 overflow-hidden rounded-full bg-slate-900">
              <motion.div className="h-full bg-sky-300" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 0.75, ease: 'easeOut' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
