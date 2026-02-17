import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users,
  BookOpen,
  Award,
  Presentation,
  GraduationCap,
  Clock,
} from 'lucide-react';

const Teaching = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const positions = [
    {
      title: 'Professor & HOD',
      institution: 'JRMC Chennai',
      period: 'Current',
      icon: Award,
      highlight: true,
    },
    {
      title: 'Assistant Professor',
      institution: 'Mamatha Medical College, Khammam',
      period: '2016 - 2018',
      icon: BookOpen,
      highlight: false,
    },
    {
      title: 'Ex Assistant Professor',
      institution: 'KGH Vizag',
      period: '',
      icon: GraduationCap,
      highlight: false,
    },
    {
      title: 'Resident Superspecialist',
      institution: 'Kakatiya Medical College',
      period: '',
      icon: Users,
      highlight: false,
    },
    {
      title: 'Senior Resident',
      institution: 'ASRAM',
      period: '',
      icon: Clock,
      highlight: false,
    },
  ];

  const teachingAreas = [
    'Postgraduate Urology',
    'General Surgery',
    'MBBS Clinical Skills',
    'Robotic Surgery Training',
    'Laser Procedure Workshops',
    'Research Methodology',
  ];

  return (
    <section
      id="teaching"
      className="relative section-padding bg-midnight overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/teaching-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/95 to-midnight" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Teaching Excellence</span>
          <h2 className="heading-section mb-4">
            Shaping the Next Generation of{' '}
            <span className="text-gradient">Surgeons</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Dedicated to medical education, mentoring future urologists and
            surgeons with a commitment to excellence in teaching.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <Presentation className="w-6 h-6 text-teal" />
              Academic Positions
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-teal/50 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title + position.institution}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {/* Node */}
                    <div
                      className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        position.highlight
                          ? 'bg-teal border-teal shadow-glow'
                          : 'bg-navy-light border-teal/50'
                      }`}
                    >
                      <position.icon
                        className={`w-5 h-5 ${
                          position.highlight ? 'text-navy' : 'text-teal'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`p-4 rounded-xl border ${
                        position.highlight
                          ? 'bg-teal/10 border-teal/40'
                          : 'bg-navy-light/50 border-teal/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-white font-semibold">
                            {position.title}
                          </h4>
                          <p className="text-silver-dark text-sm mt-1">
                            {position.institution}
                          </p>
                        </div>
                        {position.period && (
                          <span className="text-teal text-xs font-mono whitespace-nowrap">
                            {position.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Teaching Philosophy & Areas */}
          <div className="space-y-8">
            {/* Teaching Philosophy */}
            <motion.div
              className="p-8 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Teaching Philosophy
              </h3>
              <blockquote className="relative pl-6 border-l-2 border-teal">
                <p className="text-silver-dark italic leading-relaxed">
                  "Extensive experience teaching postgraduate urology, general
                  surgery, and MBBS students, covering theoretical knowledge and
                  clinical skill development. My approach combines hands-on
                  training with evidence-based medicine to produce competent,
                  compassionate surgeons."
                </p>
              </blockquote>
            </motion.div>

            {/* Teaching Areas */}
            <motion.div
              className="p-8 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Teaching Areas
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {teachingAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    className="flex items-center gap-3 p-3 rounded-lg bg-navy/50 border border-teal/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ borderColor: 'rgba(0, 212, 200, 0.3)' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-teal" />
                    <span className="text-white text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { value: '10+', label: 'Years Teaching' },
                { value: '500+', label: 'Students Trained' },
                { value: '50+', label: 'Workshops' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-navy-light/50 border border-teal/10"
                >
                  <div className="font-mono text-2xl font-bold text-teal">
                    {stat.value}
                  </div>
                  <div className="text-silver-dark text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
