import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BookOpen,
  FileText,
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin,
} from 'lucide-react';
import ECGDivider from '../components/ECGDivider';

const Research = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const dissertations = [
    {
      title: 'Is Routine Interval Appendicectomy Necessary?',
      type: 'MS Dissertation',
    },
    {
      title:
        'Role of DRE, Serum PSA & TRUS Biopsy in Detection of Prostate Cancer in Indian Population',
      type: 'M.Ch. Dissertation',
    },
  ];

  const publications = [
    {
      title: 'Risk Factors for Catheter Associated UTIs',
      journal: 'International Journal of Pharmaceutical and Clinical Research',
      year: '2024',
    },
    {
      title: 'Immediate vs Delayed Removal of Urinary Catheter Post Caesarean Delivery',
      journal: 'International Journal of Pharmaceutical and Clinical Research',
      year: '2024',
    },
  ];

  const cmePrograms = [
    {
      title: 'Recent Trends in Management of BPH',
      location: 'AINU Hyderabad',
      year: '2025',
    },
    {
      title: 'Management of Complications During Pelvic Surgeries',
      location: 'AINU Hyderabad',
      year: '2025',
    },
    {
      title: 'CME on Hypospadias Surgery',
      location: 'AINU Warangal',
      year: '2025',
    },
    {
      title: 'PACE Live Urology Workshop',
      location: 'AIMS Bhubaneswar',
      year: '2021',
    },
    {
      title: 'Laser Prostatectomy Workshop',
      location: 'Kamineni Medical Sciences',
      year: '2021',
    },
    {
      title: 'Master Class on RIRS',
      location: 'AINU Hyderabad',
      year: '2014',
    },
    {
      title: 'Female Urology Workshop',
      location: 'SVIMS Tirupati',
      year: '2012',
    },
  ];

  return (
    <section
      id="research"
      className="relative section-padding bg-navy overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/research-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Research & Publications</span>
          <h2 className="heading-section mb-4">
            Advancing <span className="text-gradient">Urological Science</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Contributing to medical knowledge through research, publications, and
            continuous professional development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Dissertations & Publications */}
          <div className="space-y-8">
            {/* Dissertations */}
            <motion.div
              className="p-6 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30">
                  <BookOpen className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Dissertations
                </h3>
              </div>

              <div className="space-y-4">
                {dissertations.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-4 rounded-lg bg-navy/50 border border-teal/10 hover:border-teal/30 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm">{item.title}</p>
                        <span className="text-teal text-xs">{item.type}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Publications */}
            <motion.div
              className="p-6 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30">
                  <GraduationCap className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Journal Publications (2024)
                </h3>
              </div>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={pub.title}
                    className="p-4 rounded-lg bg-navy/50 border border-teal/10 hover:border-teal/30 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-sm group-hover:text-teal transition-colors">
                            {pub.title}
                          </p>
                          <p className="text-silver-dark text-xs mt-1">
                            {pub.journal}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-silver-dark group-hover:text-teal transition-colors flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - CME Programs */}
          <motion.div
            className="p-6 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30">
                <Calendar className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                CME Programs & Workshops
              </h3>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {cmePrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  className="p-4 rounded-lg bg-navy/50 border border-teal/10 hover:border-teal/30 transition-all hover:bg-navy/70"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.08 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white text-sm font-medium">
                        {program.title}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-silver-dark text-xs">
                          <MapPin className="w-3 h-3" />
                          {program.location}
                        </span>
                        <span className="flex items-center gap-1 text-teal text-xs">
                          <Calendar className="w-3 h-3" />
                          {program.year}
                        </span>
                      </div>
                    </div>
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

export default Research;
