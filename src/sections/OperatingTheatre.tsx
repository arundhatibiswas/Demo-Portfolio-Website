import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Scan, Cpu, Lightbulb } from 'lucide-react';

const OperatingTheatre = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  const images = [
    {
      src: '/assets/robotic-surgery.jpg',
      title: 'Robotic Surgical Console',
      description: 'da Vinci Surgical System for precision procedures',
      icon: Cpu,
    },
    {
      src: '/assets/operating-room.jpg',
      title: 'Advanced Operating Room',
      description: 'State-of-the-art surgical environment',
      icon: Monitor,
    },
    {
      src: '/assets/laser-surgery.jpg',
      title: 'Laser Surgery Suite',
      description: 'Holmium laser for prostate procedures',
      icon: Lightbulb,
    },
    {
      src: '/assets/kidney-3d.jpg',
      title: '3D Medical Imaging',
      description: 'Advanced visualization for surgical planning',
      icon: Scan,
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative section-padding bg-midnight overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Operating Theatre</span>
          <h2 className="heading-section mb-4">
            Where Technology Meets{' '}
            <span className="text-gradient">Surgical Excellence</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Step into our world-class surgical facilities equipped with the latest
            medical technology and designed for optimal patient outcomes.
          </p>
        </motion.div>

        {/* Image Grid with Parallax */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              className="relative group"
              style={{ y: index % 2 === 0 ? y1 : y2, scale }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center border border-teal/30">
                      <image.icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                  <p className="text-silver-dark text-sm">{image.description}</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal/40 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-teal/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal/40 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal/40 rounded-br-lg" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-teal/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            'ISO Certified Facility',
            '24/7 Emergency Care',
            'Advanced Anesthesia',
            'Post-Op Monitoring',
          ].map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center gap-3 p-4 rounded-lg bg-navy-light/50 border border-teal/10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-white text-sm">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingTheatre;
