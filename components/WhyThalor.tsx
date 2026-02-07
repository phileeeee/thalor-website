'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Customer First',
    description: 'Your goals drive every decision. We measure success by your outcomes.',
  },
  {
    number: '02',
    title: 'Independence',
    description: 'Free from conflicts with builders, developers, or third parties.',
  },
  {
    number: '03',
    title: 'Engineering Expertise',
    description: 'Professional engineering rigour applied to every project stage.',
  },
  {
    number: '04',
    title: 'ROI Focused',
    description: 'Maximising return on investment through strategic project oversight.',
  },
  {
    number: '05',
    title: 'Transparency',
    description: 'Clear communication and full visibility at every milestone.',
  },
  {
    number: '06',
    title: 'Sustainability',
    description: 'Building with the future in mind — responsible development practices.',
  },
  {
    number: '07',
    title: 'Risk Mitigation',
    description: 'Proactive identification and management of project risks.',
  },
];

export default function WhyThalor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-bg-dark">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Why Thalor
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight">
            Built on seven
            <br />
            core principles.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-6 md:gap-10 py-6 border-b border-border-dark hover:border-accent/40 transition-colors duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-text-muted shrink-0 pt-1">
                {pillar.number}
              </span>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
                <h3 className="text-xl md:text-2xl font-bold text-text-light group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-text-muted md:max-w-sm md:text-right leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
