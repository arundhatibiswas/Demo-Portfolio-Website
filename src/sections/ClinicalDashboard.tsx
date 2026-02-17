import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Calendar, Stethoscope, Activity } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ECGDivider from '../components/ECGDivider';

const ClinicalDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Activity, value: 2591, label: 'Total Surgeries', suffix: '' },
    { icon: TrendingUp, value: 1277, label: 'Major Surgeries', suffix: '' },
    { icon: Stethoscope, value: 542, label: 'Intermediate', suffix: '' },
    { icon: Calendar, value: 772, label: 'Minor Surgeries', suffix: '' },
  ];

  const yearlyData = [
    { year: '2020-21', major: 294, intermediate: 110, minor: 176 },
    { year: '2021-22', major: 455, intermediate: 203, minor: 268 },
    { year: '2022-23', major: 133, intermediate: 57, minor: 69 },
    { year: '2023-24', major: 151, intermediate: 81, minor: 107 },
    { year: '2024-25', major: 244, intermediate: 91, minor: 152 },
  ];

  const maxValue = Math.max(
    ...yearlyData.map((d) => d.major + d.intermediate + d.minor)
  );

  return (
    <section id="dashboard" className="relative section-padding bg-navy">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Clinical Intelligence</span>
          <h2 className="heading-section mb-4">
            Surgical Performance{' '}
            <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Comprehensive surgical data showcasing 5 years of clinical excellence
            and patient care outcomes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-navy-light border border-teal/20 overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ borderColor: 'rgba(0, 212, 200, 0.5)' }}
            >
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-teal/20 rounded-full blur-2xl group-hover:bg-teal/30 transition-all" />

              <stat.icon className="w-8 h-8 text-teal mb-4" />
              <div className="stat-number text-3xl md:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-silver-dark text-sm mt-2">{stat.label}</div>

              {/* Digital Monitor Style Border */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-teal/40" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-teal/40" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="p-8 rounded-2xl bg-navy-light border border-teal/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8">
            Year-wise Surgical Breakdown (5 Years)
          </h3>

          <div className="relative">
            {/* Chart Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full h-px bg-teal/10"
                  style={{ top: `${i * 25}%` }}
                />
              ))}
            </div>

            {/* Bars */}
            <div className="flex justify-around items-end h-80 gap-4">
              {yearlyData.map((data, index) => {
                const total = data.major + data.intermediate + data.minor;
                const heightPercent = (total / maxValue) * 100;

                return (
                  <motion.div
                    key={data.year}
                    className="flex flex-col items-center flex-1 max-w-[120px]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {/* Bar Container */}
                    <div className="relative w-full h-64 flex items-end">
                      {/* Stacked Bar */}
                      <motion.div
                        className="w-full rounded-t-lg overflow-hidden"
                        style={{ height: `${heightPercent}%` }}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${heightPercent}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.8 + index * 0.15,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      >
                        {/* Major Surgeries */}
                        <div
                          className="w-full bg-teal relative group cursor-pointer"
                          style={{
                            height: `${(data.major / total) * 100}%`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark to-teal" />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Major: {data.major}
                          </div>
                        </div>

                        {/* Intermediate */}
                        <div
                          className="w-full bg-teal/60 relative group cursor-pointer"
                          style={{
                            height: `${(data.intermediate / total) * 100}%`,
                          }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Intermediate: {data.intermediate}
                          </div>
                        </div>

                        {/* Minor */}
                        <div
                          className="w-full bg-teal/30 relative group cursor-pointer"
                          style={{
                            height: `${(data.minor / total) * 100}%`,
                          }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Minor: {data.minor}
                          </div>
                        </div>
                      </motion.div>

                      {/* Glow at top */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 bg-teal blur-sm"
                        style={{ top: `${100 - heightPercent}%` }}
                      />
                    </div>

                    {/* Year Label */}
                    <div className="mt-4 text-center">
                      <div className="text-teal font-mono text-sm">{data.year}</div>
                      <div className="text-silver-dark text-xs mt-1">{total} total</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { label: 'Major Surgeries', color: 'bg-teal' },
              { label: 'Intermediate', color: 'bg-teal/60' },
              { label: 'Minor Surgeries', color: 'bg-teal/30' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${item.color}`} />
                <span className="text-silver-dark text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
            />

            {/* Timeline Nodes */}
            <div className="flex justify-between relative">
              {yearlyData.map((data, index) => (
                <motion.div
                  key={data.year}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <div className="w-4 h-4 rounded-full bg-teal border-4 border-navy shadow-glow-sm" />
                  <div className="mt-4 text-center">
                    <div className="text-white font-mono text-lg">
                      {data.major + data.intermediate + data.minor}
                    </div>
                    <div className="text-silver-dark text-xs">{data.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ECGDivider />
    </section>
  );
};

export default ClinicalDashboard;
