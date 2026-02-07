'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="pt-20 md:pt-24 bg-bg-warm">
      {/* Inset image container — matches nav/content width */}
      <div className="max-w-6xl mx-auto px-6">
      <div className="relative w-full h-[75vh] md:h-[85vh] rounded-2xl overflow-hidden">
        {/* Parallax Image */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero.jpg`}
            alt="Thalor project development"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Headline anchored to bottom-center */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full px-6 pb-10 md:pb-14 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-[3.5vw] text-white whitespace-nowrap"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              We deliver <em>independent</em> project management.
            </motion.h1>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
