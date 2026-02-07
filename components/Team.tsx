'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const team = [
  {
    name: 'Phong Nguyen',
    role: 'Partner',
    image: '/images/phong.png',
    bio: 'A highly experienced project manager with over 15 years in civil construction infrastructure. Phong ensures every stage of construction is carefully managed, carried out safely, on budget and to achieve quality outcomes.',
    qualifications: [
      'Bachelor of Engineering (Civil), UTS',
      'Diploma in Engineering Practice, UTS',
    ],
  },
  {
    name: 'Tomi Vasilevski',
    role: 'Partner',
    image: '/images/tomi.png',
    bio: 'A senior project development and management professional with over 30 years experience delivering major infrastructure projects. His mix of technical know-how and business insight has helped him succeed in leadership roles.',
    qualifications: [
      'Bachelor of Engineering (Civil)',
      'Bachelor of Science (Mathematics)',
      'Graduate Certificate & Cert IV in Building and Construction',
    ],
  },
  {
    name: 'Omar Ghattas',
    role: 'Partner',
    image: '/images/omar.png',
    bio: 'A project management professional with extensive experience guiding complex developments from concept through to completion. With a background in civil engineering and over 15 years delivering major infrastructure and property projects.',
    qualifications: [
      'Bachelor of Engineering (Civil), UNSW',
      'Diploma of Project Management, AIPM',
      'Certificate IV in Building and Construction',
    ],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 md:py-32 bg-bg-cream">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Meet the founding team.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-left"
            >
              {/* Circle photo */}
              <div className="w-28 h-28 mb-5 rounded-full overflow-hidden bg-card-warm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="space-y-1">
                {member.qualifications.map((qual) => (
                  <p key={qual} className="text-text-muted text-xs leading-relaxed">
                    {qual}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
