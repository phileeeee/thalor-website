'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote:
      'Thalor brought professionalism and clarity to our project from day one. There were no surprises — just consistent, transparent delivery.',
    author: 'Client',
    role: 'Property Developer',
  },
  {
    quote:
      'Their independence gave us confidence that every recommendation was in our best interest. The engineering rigour they bring is second to none.',
    author: 'Client',
    role: 'Investor',
  },
  {
    quote:
      'From planning through to handover, the Thalor team managed every detail. The result exceeded our expectations.',
    author: 'Client',
    role: 'Homeowner',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-bg-warm">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            What our clients say.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 bg-card-light rounded-2xl border border-border-light"
            >
              {/* Quote mark */}
              <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-text-secondary leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              <div>
                <p className="font-bold text-text-primary">{testimonial.author}</p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
