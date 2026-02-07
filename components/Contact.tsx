'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectTypes = [
  'Residential',
  'Mixed-Use',
  'Commercial',
  'Renovation',
  'Feasibility Study',
];

const budgetRanges = [
  'Under $500K',
  '$500K – $1M',
  '$1M – $5M',
  '$5M+',
];

const timingOptions = [
  'Ready to start',
  '1–3 months',
  '3–6 months',
  'Just exploring',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTypes: [] as string[],
    budget: '',
    timing: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const toggleProjectType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
            Work with us
          </h2>
          <p className="text-text-light/70 leading-relaxed max-w-2xl mb-4">
            Thalor&apos;s approach is based on collaboration. We&apos;re confident you&apos;ll love what our team delivers for you.
          </p>
          <p className="text-text-light/70 leading-relaxed max-w-2xl mb-16">
            Please email us at{' '}
            <a href="mailto:info@thalor.com.au" className="text-accent hover:underline">
              info@thalor.com.au
            </a>{' '}
            or fill out the form below and we&apos;ll get back to you as soon as we can.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16"
          >
            <h3 className="text-2xl font-bold text-text-light mb-4">
              Thank you!
            </h3>
            <p className="text-text-muted">
              One of our team will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="text-left"
          >
            <div className="text-xl md:text-2xl text-text-light leading-relaxed space-y-6">
              {/* Name */}
              <p className="flex flex-wrap items-center justify-start gap-2">
                <span>My name is</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className={`bg-transparent border-b-2 ${
                    errors.name ? 'border-red-400' : 'border-border-dark'
                  } focus:border-accent outline-none px-2 py-1 text-text-light placeholder:text-text-muted/50 transition-colors min-w-[180px]`}
                />
              </p>

              {/* Email */}
              <p className="flex flex-wrap items-center justify-start gap-2">
                <span>you can reach me at</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`bg-transparent border-b-2 ${
                    errors.email ? 'border-red-400' : 'border-border-dark'
                  } focus:border-accent outline-none px-2 py-1 text-text-light placeholder:text-text-muted/50 transition-colors min-w-[220px]`}
                />
              </p>

              {/* Project Type */}
              <div className="text-left">
                <p className="mb-3">I need help with a</p>
                <div className="flex flex-wrap justify-start gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectTypes.includes(type);
                    return (
                      <motion.button
                        key={type}
                        type="button"
                        onClick={() => toggleProjectType(type)}
                        className={`px-4 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-accent text-accent-text'
                            : 'bg-transparent text-text-light border border-border-dark hover:border-text-muted'
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        {type}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Budget */}
              <div className="text-left">
                <p className="mb-3">with an indicative budget of</p>
                <div className="flex flex-wrap justify-start gap-2">
                  {budgetRanges.map((range) => {
                    const isSelected = formData.budget === range;
                    return (
                      <motion.button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`px-4 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-accent text-accent-text'
                            : 'bg-transparent text-text-light border border-border-dark hover:border-text-muted'
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        {range}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Timing */}
              <div className="text-left">
                <p className="mb-3">and I&apos;m looking to start</p>
                <div className="flex flex-wrap justify-start gap-2">
                  {timingOptions.map((option) => {
                    const isSelected = formData.timing === option;
                    return (
                      <motion.button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, timing: option })}
                        className={`px-4 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-accent text-accent-text'
                            : 'bg-transparent text-text-light border border-border-dark hover:border-text-muted'
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        {option}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="text-left">
                <p className="mb-3">Here&apos;s a bit more about my project</p>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`w-full max-w-lg mx-auto bg-transparent border-b-2 ${
                    errors.message ? 'border-red-400' : 'border-border-dark'
                  } focus:border-accent outline-none px-2 py-2 text-base text-text-light placeholder:text-text-muted/50 transition-colors resize-none`}
                />
              </div>
            </div>

            {/* Error messages */}
            <AnimatePresence>
              {Object.keys(errors).length > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mt-4 text-left"
                >
                  Please fill in all required fields.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="mt-10 flex justify-start">
              <motion.button
                type="submit"
                className="group inline-flex items-center gap-3 bg-accent border border-accent rounded-full px-2 py-2 pl-6 cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-white hover:border-white"
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base font-medium text-bg-dark transition-colors duration-300">
                  Send message
                </span>
                <span className="relative flex items-center justify-center w-10 h-10 bg-white group-hover:bg-accent rounded-full overflow-hidden transition-colors duration-300">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <svg
                    className="absolute w-5 h-5 -translate-x-10 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.form>
        )}

        {/* Contact info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border-dark"
        >
          <div>
            <p className="text-text-muted text-sm uppercase tracking-wider mb-2">Email</p>
            <p className="text-text-light font-medium">info@thalor.com.au</p>
          </div>
          <div>
            <p className="text-text-muted text-sm uppercase tracking-wider mb-2">Location</p>
            <p className="text-text-light font-medium">Sydney, Australia</p>
          </div>
          <div>
            <p className="text-text-muted text-sm uppercase tracking-wider mb-2">ABN</p>
            <p className="text-text-light font-medium">ACN 690 174 102</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
