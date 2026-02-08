'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'Reuss Street, Leichhardt',
    category: 'Residential Renovation',
    description: 'A comprehensive renovation of a 30-year-old terrace home, transforming all three bedrooms with modernised systems and contemporary design throughout.',
    image: '/images/reuss-street.jpg',
  },
  {
    title: 'King Street, Newtown',
    category: 'Mixed-Use Development',
    description: 'An original shopfront and apartment demolished to create a modern mixed-use development with ground-floor commercial space and five luxury apartments, featuring sensitive heritage facade restoration.',
    image: '/images/king-street.jpg',
  },
  {
    title: 'Alt Street, Ashfield',
    category: 'Boutique Apartments',
    description: 'A family home redeveloped into a boutique complex of six luxury two-bedroom apartments with secure basement parking, lift access and landscaped gardens.',
    image: '/images/alt-street.jpg',
  },
  {
    title: 'Empire Lane, Marrickville',
    category: 'Terrace Development',
    description: 'A former mechanical workshop and factory site transformed into eight terrace homes with three bedrooms, secure parking and private internal courtyards designed for natural light.',
    image: '/images/empire-lane.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-warm">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Selected projects.
            </h2>
          </div>
          <p className="text-text-secondary max-w-md leading-relaxed">
            Transforming properties into high-quality, enduring developments that balance design, functionality and long-term value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Project image */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.image}`}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${activeCard === index ? 'scale-105' : ''}`}
              />

              {/* Hover/tap overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/40 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${activeCard === index ? '!opacity-100' : ''}`} />

              {/* Always-visible label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-accent text-xs font-medium tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold text-text-light">
                  {project.title}
                </h3>
              </div>

              {/* Description on hover/tap */}
              <div className={`absolute inset-0 flex items-center p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${activeCard === index ? '!opacity-100' : ''}`}>
                <p className="text-text-light/90 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
