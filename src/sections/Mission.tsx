import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Sparkles, Shield } from 'lucide-react';
import ECGDivider from '../components/ECGDivider';

const Mission = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Sparkles,
      title: 'Advanced Robotics',
      description: 'da Vinci Surgical System for millimeter precision',
    },
    {
      icon: Target,
      title: 'Laser Technology',
      description: 'Minimally invasive HOLEP & RIRS procedures',
    },
    {
      icon: Heart,
      title: 'Transplant Expertise',
      description: 'Comprehensive renal transplant care',
    },
    {
      icon: Shield,
      title: 'Patient-Centered',
      description: 'Personalized treatment with minimal intervention',
    },
  ];

  return (
    <section id="mission" className="relative section-padding bg-navy">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="section-label">The Mission</span>
            <h2 className="heading-section mb-6">
              Restoring Precision Inside the{' '}
              <span className="text-gradient">Human Body</span>
            </h2>

            <div className="space-y-4 body-text mb-8">
              <p>
                Dr. Sambaru Venkat Krishna represents the convergence of surgical
                mastery and technological innovation. With over 12 years of
                specialized experience in urology, robotic surgery, and renal
                transplantation, every procedure is executed with millimeter
                precision.
              </p>
              <p>
                Our approach combines cutting-edge technology with compassionate
                care, ensuring optimal outcomes while minimizing patient discomfort
                and recovery time.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              className="relative pl-6 border-l-2 border-teal mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="text-white italic text-lg">
                "Precision is not just a technique—it's a commitment to restoring
                lives with the least possible intervention."
              </p>
              <cite className="text-teal text-sm mt-2 block not-italic">
                — Dr. Sambaru Venkat Krishna
              </cite>
            </motion.blockquote>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-navy-light/50 border border-teal/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ borderColor: 'rgba(0, 212, 200, 0.3)' }}
                >
                  <feature.icon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-silver-dark text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative aspect-square">
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[80%] h-[80%] rounded-full opacity-20"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(0, 212, 200, 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Anatomical Wireframe SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 212, 200, 0.3))' }}
              >
                {/* Kidney Outline */}
                <motion.path
                  d="M200 80 
                         C 150 80, 100 120, 100 200 
                         C 100 280, 150 320, 200 320 
                         C 250 320, 300 280, 300 200 
                         C 300 120, 250 80, 200 80 Z"
                  fill="none"
                  stroke="#00D4C8"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Internal Structure Lines */}
                <motion.path
                  d="M200 80 L200 320 M150 120 L150 280 M250 120 L250 280"
                  fill="none"
                  stroke="#00D4C8"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1 }}
                />

                {/* Ureter */}
                <motion.path
                  d="M200 320 Q 200 360, 180 380 M200 320 Q 200 360, 220 380"
                  fill="none"
                  stroke="#00D4C8"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                {/* Renal Artery */}
                <motion.path
                  d="M120 150 Q 80 150, 60 130 M280 150 Q 320 150, 340 130"
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Renal Vein */}
                <motion.path
                  d="M120 180 Q 80 180, 60 200 M280 180 Q 320 180, 340 200"
                  fill="none"
                  stroke="#00D4C8"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.3 }}
                />

                {/* Calyces */}
                {[140, 160, 180, 200, 220, 240, 260].map((y, i) => (
                  <motion.circle
                    key={y}
                    cx={200}
                    cy={y}
                    r="3"
                    fill="#00D4C8"
                    fillOpacity="0.3"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.5 + i * 0.05 }}
                  />
                ))}
              </svg>

              {/* Floating Data Points */}
              {[
                { x: '10%', y: '20%', label: 'Cortex' },
                { x: '80%', y: '30%', label: 'Medulla' },
                { x: '15%', y: '70%', label: 'Pelvis' },
                { x: '75%', y: '75%', label: 'Calyces' },
              ].map((point, index) => (
                <motion.div
                  key={point.label}
                  className="absolute"
                  style={{ left: point.x, top: point.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-teal text-xs font-mono">{point.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ECGDivider />
    </section>
  );
};

export default Mission;
