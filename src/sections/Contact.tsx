import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  CheckCircle,
} from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 99497 05205',
      href: 'tel:+919949705205',
    },
    {
      icon: Phone,
      label: 'Office',
      value: '08331876123',
      href: 'tel:08331876123',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'venkatms80@gmail.com',
      href: 'mailto:venkatms80@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative section-padding bg-midnight">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="heading-section mb-4">
            Schedule Your <span className="text-gradient">Consultation</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Take the first step towards better urological health. Book an
            appointment today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-5 rounded-xl bg-navy-light/80 border border-teal/20 hover:border-teal/50 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30 group-hover:bg-teal/20 transition-colors">
                    <info.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-silver-dark text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address */}
            <motion.div
              className="p-6 rounded-xl bg-navy-light/80 border border-teal/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-silver-dark text-sm mb-2">Clinic Address</p>
                  <address className="text-white not-italic leading-relaxed">
                    T3 SB Towers, Opp HP Petrol Bunk
                    <br />
                    Kolamuru, PO: Konthamuru
                    <br />
                    Rajamahendravaram Rural
                    <br />
                    East Godavari District
                    <br />
                    Andhra Pradesh - 533102, India
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              className="p-6 rounded-xl bg-navy-light/80 border border-teal/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center border border-teal/30 flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-silver-dark text-sm mb-1">Working Hours</p>
                  <p className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-silver-dark text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </motion.div>

            {/* Emergency Note */}
            <motion.div
              className="mt-6 p-4 rounded-xl bg-crimson/10 border border-crimson/30 flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <AlertCircle className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-crimson font-medium text-sm">Emergency Contact</p>
                <p className="text-silver-dark text-sm mt-1">
                  For emergencies, please call directly at{' '}
                  <a href="tel:+919949705205" className="text-teal hover:underline">
                    +91 99497 05205
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-navy-light/80 border border-teal/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">
                Book an Appointment
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">
                    Appointment Requested!
                  </h4>
                  <p className="text-silver-dark text-center">
                    We will contact you shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-silver-dark text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-teal/30 text-white placeholder-silver-dark/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-silver-dark text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-teal/30 text-white placeholder-silver-dark/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-silver-dark text-sm mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-teal/30 text-white placeholder-silver-dark/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-silver-dark text-sm mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-teal/30 text-white placeholder-silver-dark/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-silver-dark text-sm mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-teal/30 text-white placeholder-silver-dark/50 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors resize-none"
                      placeholder="Describe your symptoms or concerns..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Send className="w-5 h-5" />
                    Submit Appointment Request
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
