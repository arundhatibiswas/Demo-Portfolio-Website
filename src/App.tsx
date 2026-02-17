import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import sections
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import SurgicalSystems from './sections/SurgicalSystems';
import ClinicalDashboard from './sections/ClinicalDashboard';
import OperatingTheatre from './sections/OperatingTheatre';
import Research from './sections/Research';
import Teaching from './sections/Teaching';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations
    const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.9, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-navy overflow-x-hidden">
      {/* Global Background Effects */}
      <ParticleBackground />
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Mission />
        <SurgicalSystems />
        <ClinicalDashboard />
        <OperatingTheatre />
        <Research />
        <Teaching />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
