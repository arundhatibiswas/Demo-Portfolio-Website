import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Stethoscope,
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
} from 'lucide-react';
import ECGDivider from '../components/ECGDivider';

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Robotic & MiLEP Surgeon',
      institution: 'Akkineni Hospital',
      location: 'Vijayawada',
      period: '2025 - Present',
      type: 'current',
      icon: Stethoscope,
    },
    {
      title: 'Visiting Robotic Surgeon',
      institution: 'Sugum Hospital',
      location: 'Chennai',
      period: '2025',
      type: 'visiting',
      icon: Briefcase,
    },
    {
      title: 'Consultant Urologist',
      institution: 'Sai Viswas Hospital & Priya Darshini Hospital',
      location: '',
      period: '2023 - 2025',
      type: 'consultant',
      icon: Building2,
    },
    {
      title: 'Consultant Urologist',
      institution: 'KIMS (Krishna Institute of Medical Sciences)',
      location: 'Rajahmundry',
      period: '2018 - 2023',
      type: 'consultant',
      icon: Building2,
    },
    {
      title: 'Assistant Professor, Dept. of Urology',
      institution: 'Mamatha Medical College',
      location: 'Khammam',
      period: '2016 - 2018',
      type: 'academic',
      icon: GraduationCap,
    },
    {
      title: 'Consultant Urologist',
      institution: 'Tirumala Hospital',
      location: 'Nizamabad',
      period: '2017 - 2018',
      type: 'consultant',
      icon: Building2,
    },
    {
      title: 'Consultant Urologist',
      institution: 'Radha Krishna Kidney Centre',
      location: 'Khammam',
      period: '2014 - 2016',
      type: 'consultant',
      icon: Building2,
    },
    {
      title: 'Resident Superspecialist',
      institution: 'MGM Medical College',
      location: 'Warangal',
      period: '2013 - 2014',
      type: 'residency',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience-timeline" className="relative section-padding bg-navy">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Professional Journey</span>
          <h2 className="heading-section mb-4">
            Career <span className="text-gradient">Milestones</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            A distinguished career spanning over 12 years across leading medical
            institutions in India.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-teal/50 to-transparent -translate-x-1/2" />

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-teal/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isCurrent = exp.type === 'current';

              return (
                <motion.div
                  key={exp.title + exp.institution}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 lg:w-5/12 ${
                      isLeft ? 'lg:pr-12' : 'lg:pl-12'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border backdrop-blur-sm transition-all hover:border-teal/50 ${
                        isCurrent
                          ? 'bg-teal/10 border-teal/40 shadow-glow-sm'
                          : 'bg-navy-light/80 border-teal/20'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isCurrent
                              ? 'bg-teal text-navy'
                              : 'bg-teal/10 text-teal border border-teal/30'
                          }`}
                        >
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-white font-semibold">
                                {exp.title}
                              </h4>
                              <p className="text-silver-dark text-sm mt-1">
                                {exp.institution}
                              </p>
                              {exp.location && (
                                <p className="flex items-center gap-1 text-silver-dark text-xs mt-1">
                                  <MapPin className="w-3 h-3" />
                                  {exp.location}
                                </p>
                              )}
                            </div>
                            <span
                              className={`text-xs font-mono whitespace-nowrap ${
                                isCurrent ? 'text-teal' : 'text-silver-dark'
                              }`}
                            >
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                      isCurrent
                        ? 'bg-teal border-teal shadow-glow'
                        : 'bg-navy border-teal/50'
                    }`}
                  />

                  {/* Mobile Node */}
                  <div
                    className={`lg:hidden absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                      isCurrent
                        ? 'bg-teal border-teal shadow-glow'
                        : 'bg-navy border-teal/50'
                    }`}
                  />

                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden lg:block flex-1 lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: '8+', label: 'Institutions' },
            { value: '12+', label: 'Years Experience' },
            { value: '3', label: 'Cities' },
            { value: '5+', label: 'Roles' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-navy-light/50 border border-teal/10"
            >
              <div className="font-mono text-3xl font-bold text-teal">
                {stat.value}
              </div>
              <div className="text-silver-dark text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <ECGDivider />
    </section>
  );
};

export default Experience;
