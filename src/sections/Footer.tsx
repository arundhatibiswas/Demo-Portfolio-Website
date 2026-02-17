import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#mission' },
    { name: 'Specializations', href: '#systems' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-dark border-t border-teal/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              Dr. Sambaru Venkat Krishna
            </h3>
            <p className="text-teal text-sm font-mono mb-4">
              MS (Surgery) · M.Ch. (Urology)
            </p>
            <p className="text-silver-dark text-sm leading-relaxed mb-4">
              Senior Consultant Urologist & Andrologist
              <br />
              Renal Transplant & Robotic Surgeon
            </p>
            <div className="flex items-center gap-2 text-silver-dark text-sm">
              <Heart className="w-4 h-4 text-crimson" />
              <span>Dedicated to patient care</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-silver-dark hover:text-teal text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919949705205"
                className="block text-silver-dark hover:text-teal transition-colors"
              >
                +91 99497 05205
              </a>
              <a
                href="mailto:venkatms80@gmail.com"
                className="block text-silver-dark hover:text-teal transition-colors"
              >
                venkatms80@gmail.com
              </a>
              <p className="text-silver-dark leading-relaxed">
                T3 SB Towers, Opp HP Petrol Bunk
                <br />
                Kolamuru, Rajamahendravaram
                <br />
                Andhra Pradesh - 533102
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-silver-dark text-sm text-center md:text-left">
              © {currentYear} Dr. Sambaru Venkat Krishna. All rights reserved.
            </p>
            <p className="text-silver-dark/60 text-xs">
              Advanced Urology & Robotic Surgical Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
    </footer>
  );
};

export default Footer;
