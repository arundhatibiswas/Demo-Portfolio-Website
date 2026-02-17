import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  Zap,
  Heart,
  Scan,
  ArrowRight,
  Microscope,
  Activity,
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const SurgicalSystems = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const systems = [
    {
      icon: Bot,
      title: 'Robotic Urology & Uro-Oncology',
      description:
        'Advanced da Vinci Surgical System for precision urological procedures and cancer surgeries.',
      features: [
        '3D HD Visualization',
        'Enhanced Dexterity',
        'Minimal Invasion',
        'Faster Recovery',
      ],
      color: 'from-teal/20 to-teal/5',
    },
    {
      icon: Zap,
      title: 'Laser Prostate Surgery',
      description:
        'State-of-the-art laser technology for benign prostatic hyperplasia treatment.',
      features: ['MoLEP', 'MILEP', 'MORIS', 'HOLEP', 'RIRS'],
      color: 'from-amber-500/20 to-amber-500/5',
    },
    {
      icon: Heart,
      title: 'Renal Transplant Surgery',
      description:
        'Comprehensive kidney transplantation services with excellent outcomes.',
      features: [
        'Living Donor Transplants',
        'Deceased Donor Procedures',
        'Post-Transplant Care',
        'Immunosuppression Management',
      ],
      color: 'from-rose-500/20 to-rose-500/5',
    },
    {
      icon: Scan,
      title: 'Laparoscopic Urology',
      description:
        'Minimally invasive techniques for various urological conditions.',
      features: ['LEP (PUJO)', 'Nephrectomy', 'Pyeloplasty', 'Uro-Gynaecology'],
      color: 'from-cyan-500/20 to-cyan-500/5',
    },
  ];

  return (
    <section
      id="systems"
      className="relative section-padding bg-midnight grid-pattern"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Surgical Systems</span>
          <h2 className="heading-section mb-4">
            Advanced <span className="text-gradient">Surgical Technologies</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Cutting-edge surgical systems delivering precision care with minimally
            invasive techniques for optimal patient outcomes.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TiltCard className="h-full">
                <div
                  className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${system.color} border border-teal/20 backdrop-blur-sm overflow-hidden group`}
                >
                  {/* Glow Effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal/20 rounded-full blur-3xl group-hover:bg-teal/30 transition-all duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30">
                      <system.icon className="w-7 h-7 text-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 relative">
                    {system.title}
                  </h3>
                  <p className="text-silver-dark mb-6 relative">
                    {system.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {system.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium text-teal bg-teal/10 rounded-full border border-teal/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.button
                    className="flex items-center gap-2 text-teal text-sm font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <system.icon className="w-full h-full" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              icon: Microscope,
              value: '99%',
              label: 'Procedure Success Rate',
            },
            {
              icon: Activity,
              value: '50%',
              label: 'Faster Recovery Time',
            },
            {
              icon: Bot,
              value: '0.1mm',
              label: 'Surgical Precision',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-navy-light/50 border border-teal/10"
            >
              <stat.icon className="w-8 h-8 text-teal mx-auto mb-4" />
              <div className="font-mono text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-silver-dark text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SurgicalSystems;
