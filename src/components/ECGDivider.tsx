import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ECGDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // ECG waveform path (P-QRS-T complex)
  const ecgPath =
    'M0,50 L50,50 L60,50 L70,30 L80,70 L90,20 L100,80 L110,50 L120,50 L130,50 L140,50 L150,40 L160,60 L170,50 L200,50';

  return (
    <div ref={ref} className="w-full py-8 overflow-hidden">
      <svg
        viewBox="0 0 200 100"
        className="w-full h-16"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4C8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4C8" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
          </linearGradient>
          <filter id="ecgGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background line */}
        <path
          d="M0,50 L200,50"
          stroke="rgba(0, 212, 200, 0.1)"
          strokeWidth="1"
          fill="none"
        />

        {/* Animated ECG line */}
        <motion.path
          d={ecgPath}
          stroke="url(#ecgGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#ecgGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: 1.5, ease: 'easeInOut' },
            opacity: { duration: 0.3 },
          }}
        />
      </svg>
    </div>
  );
};

export default ECGDivider;
