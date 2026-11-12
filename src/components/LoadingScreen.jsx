/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
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
          className="fixed inset-0 z-[9997] flex items-center justify-center bg-[#0b1120]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#101a30] text-blue-400 shadow-xl shadow-blue-500/10"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Cpu size={26} />
            </motion.div>
            <motion.p
              className="mt-4 font-sans text-xs font-semibold text-blue-300 tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Bhavesh Kapre &middot; Portfolio
            </motion.p>
            <div className="mx-auto mt-3 h-1 w-36 overflow-hidden rounded-full bg-[#101a30] border border-[#1e2f52]">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
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
