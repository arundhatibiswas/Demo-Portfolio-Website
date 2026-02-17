import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
  const kidneyRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kidney floating animation
    if (kidneyRef.current) {
      gsap.to(kidneyRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Laser tracing animation
    if (laserRef.current) {
      gsap.to(laserRef.current, {
        left: '100%',
        duration: 3,
        repeat: -1,
        ease: 'power1.inOut',
        repeatDelay: 1,
      });
    }
  }, []);

  const stats = [
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 15000, suffix: '+', label: 'Patients Treated' },
    { value: 1277, suffix: '+', label: 'Major Surgeries' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 z-0" />

      {/* 3D Kidney Model */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] z-10 hidden lg:block">
        <div
          ref={kidneyRef}
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.img
            src="/assets/kidney-3d.jpg"
            alt="3D Kidney Model"
            className="w-[80%] h-auto object-contain opacity-60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              filter: 'drop-shadow(0 0 30px rgba(0, 212, 200, 0.3))',
            }}
          />

          {/* Laser Tracing Effect */}
          <div
            ref={laserRef}
            className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent"
            style={{
              boxShadow: '0 0 20px #00D4C8, 0 0 40px #00D4C8',
              filter: 'blur(2px)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            className="section-label mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-8 h-px bg-teal" />
              Senior Consultant Urologist & Andrologist
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="heading-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced Urology &
            <br />
            <span className="text-gradient">Robotic Surgical</span>
            <br />
            Excellence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-silver-dark mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Robotic, Laser & Renal Transplant Specialist with over 12 years of
            experience in precision urological care
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-silver-dark text-sm mt-1">{stat.label}</div>
              </div>
            ))}
            <div className="text-center">
              <div className="stat-number text-2xl">🤖</div>
              <div className="text-silver-dark text-sm mt-1">
                Robotic & Laser
                <br />
                Specialist
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#systems')}
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Specializations
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center text-silver-dark cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#mission')}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
    </section>
  );
};

export default Hero;
