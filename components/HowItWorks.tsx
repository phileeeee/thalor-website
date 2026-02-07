'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Meeting',
    subtitle: 'Getting started',
    description: "We'll meet to understand your goals, visit the site and offer early advice.",
  },
  {
    number: '02',
    title: 'Feasibility Check',
    subtitle: 'Can it be done?',
    description: "We'll assess the site, check local rules and make sure your budget and vision align.",
  },
  {
    number: '03',
    title: 'Designs & Concepts',
    subtitle: 'First ideas',
    description: 'We create early designs and sketches to bring your vision to life.',
  },
  {
    number: '04',
    title: 'Detailed Design',
    subtitle: 'Making it real',
    description: 'We refine the design, choose materials and coordinate with engineers and other experts.',
  },
  {
    number: '05',
    title: 'Approvals',
    subtitle: 'Getting the green light',
    description: 'We handle applications and the paperwork to get council and building approvals.',
  },
  {
    number: '06',
    title: 'Construction Plans',
    subtitle: 'Ready to build',
    description: 'We prepare detailed drawings and documents for builders to quote and build.',
  },
  {
    number: '07',
    title: 'Tender Process',
    subtitle: 'Choosing a builder',
    description: 'We help you find the right builder, manage quotes and set up contracts.',
  },
  {
    number: '08',
    title: 'Construction',
    subtitle: 'Building stage',
    description: 'We visit the site, check progress and help solve any issues during construction.',
  },
  {
    number: '09',
    title: 'Final Checks & Handover',
    subtitle: 'Wrap up',
    description: 'We inspect the finished work, manage final approvals and handover the completed project.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-bg-warm">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
            How it works.
          </h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Throughout the entire project we manage timelines, budgets and keep you updated. Here&apos;s our step-by-step approach.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border-light hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex items-start gap-6 md:gap-8 py-6 md:py-8"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-bg-warm border-2 border-border-light text-sm font-bold text-text-muted group-hover:border-accent group-hover:text-accent group-hover:bg-accent-light transition-all duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 md:pb-8 border-b border-border-light group-last:border-0">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                    {step.subtitle}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
