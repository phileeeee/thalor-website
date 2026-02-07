'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SlotCounter from './ui/SlotCounter';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-warm">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              About Thalor
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
              Independent expertise
              <br />
              for every stage.
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Thalor is an independent project management firm specialising in
                property development across Sydney. We deliver end-to-end services
                combining strategy, compliance, and construction oversight with an
                engineer-led approach.
              </p>
              <p>
                Our independence means we work solely in your interest — free from
                conflicts with builders, developers, or third parties. We bring
                clarity to complex projects and protect your investment at every stage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-3xl font-bold text-accent">
                  <SlotCounter end={100} suffix="%" duration={2} />
                </p>
                <p className="text-sm text-text-muted mt-1">Independent</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <p className="text-3xl font-bold text-accent">
                  <SlotCounter end={50} suffix="+" duration={2} />
                </p>
                <p className="text-sm text-text-muted mt-1">Combined Years of Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] bg-card-warm rounded-2xl overflow-hidden"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/about-team.jpg`}
              alt="Thalor project"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
