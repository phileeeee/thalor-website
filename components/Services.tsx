'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Planning & Approvals',
    tagline: 'Turning your idea into a viable, approved project.',
    description:
      'We help you start with clarity, confidence and a clear path to approval.',
    items: [
      'Site identification, feasibility studies and due diligence',
      'Development strategy and project planning',
      'Coordination of architects, planners and consultants',
      'Council and authority approvals (DA/CDC)',
      'Budget estimates and funding support',
      'Stakeholder and investor engagement',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design & Construction Delivery',
    tagline: 'Managing design, procurement and construction: from concept to handover.',
    description:
      'We turn approved plans into quality built outcomes.',
    items: [
      'Design coordination and documentation management',
      'Tendering and builder selection',
      'Contract administration and progress reporting',
      'Construction supervision and quality control',
      'Cost, schedule and risk management',
      'Value engineering and design optimisation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Completion & Handover',
    tagline: 'Bringing your project to life, and delivering a smooth finish.',
    description:
      'We make sure everything is delivered right, ready for you to move forward.',
    items: [
      'Final inspections and defect management',
      'Practical completion and occupancy coordination',
      'Authority sign-offs and certification',
      'Financial close-out and reporting',
      'Maintenance and warranty management',
      'Post-completion support',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Advisory & Strategic Support',
    tagline: 'Independent expertise whenever you need it.',
    description:
      'We provide independent expertise whether for project reviews, health checks, market and feasibility advice or meeting with investors.',
    items: [
      'Project reviews and health checks',
      'Market and feasibility advice',
      'Investor and joint venture presentations',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-bg-cream">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            End-to-end project
            <br />
            management services.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-8 bg-card-light rounded-2xl border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent-light rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-text transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-text-muted">{service.number}</span>
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm italic mb-3">
                  {service.tagline}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Expandable bullet list */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-5 pt-5 border-t border-border-light space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
