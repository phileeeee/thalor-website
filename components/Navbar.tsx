'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Team', href: '#team', id: 'team' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = useTransform(scrollY, [0, 150], [0, 1]);
  const pillOpacity = useTransform(progress, [0, 0.3, 1], [0, 0, 1]);
  const containerWidth = useTransform(progress, [0, 1], [1200, 800]);
  const paddingY = useTransform(progress, [0, 1], [20, 14]);
  const paddingX = useTransform(progress, [0, 1], [48, 20]);
  const marginTop = useTransform(progress, [0, 1], [0, 16]);
  const borderRadius = useTransform(progress, [0, 1], [0, 9999]);
  const navGap = useTransform(progress, [0, 1], [32, 20]);

  // Text stays dark — nav sits on warm background
  const textColor = useTransform(progress, [0, 1], ['#1E1E1E', '#1E1E1E']);
  const borderColor = useTransform(progress, [0, 1], ['#E0DDD5', '#E0DDD5']);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 20;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const getActiveDotStyle = () => {
    if (!activeSection || !navRefs.current[activeSection]) return { opacity: 0 };
    const activeEl = navRefs.current[activeSection];
    if (!activeEl) return { opacity: 0 };

    const rect = activeEl.getBoundingClientRect();
    const parentRect = activeEl.parentElement?.getBoundingClientRect();
    if (!parentRect) return { opacity: 0 };

    return {
      opacity: 1,
      left: rect.left - parentRect.left + rect.width / 2 - 3,
    };
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-4 lg:px-6">
        <motion.nav
          style={{
            width: containerWidth,
            maxWidth: '100%',
            marginTop,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            borderRadius,
          }}
          className="relative"
        >
          {/* Pill background */}
          <motion.div
            style={{ opacity: pillOpacity, borderRadius }}
            className="absolute inset-0 bg-bg-warm/95 backdrop-blur-md border border-border-light shadow-lg shadow-black/5"
          />

          {/* Content */}
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ color: textColor }}
              className="flex items-center"
            >
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/thalor-full-logo-black.png`} alt="Thalor" className="h-8 object-contain" />
            </motion.a>

            {/* Nav Links */}
            <motion.div style={{ gap: navGap }} className="relative flex items-center">
              {/* Active section dot */}
              <motion.div
                className="absolute bottom-[-3px] w-1.5 h-1.5 bg-accent rounded-full"
                animate={getActiveDotStyle()}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />

              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  ref={(el) => { navRefs.current[link.id] = el; }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ color: textColor }}
                  className="group relative text-sm font-medium cursor-pointer overflow-hidden"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full opacity-70">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                style={{ color: textColor, borderColor }}
                className="group ml-2 flex items-center gap-2 pl-4 pr-2 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-text hover:border-accent cursor-pointer whitespace-nowrap"
              >
                Get in Touch
                <span className="flex items-center justify-center w-7 h-7 bg-accent rounded-full transition-transform duration-500 ease-out group-hover:rotate-90">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent-text">
                    <path d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <motion.div
          style={{
            padding: useTransform(progress, [0, 1], [0, 16]),
          }}
        >
          <motion.nav
            style={{
              borderRadius: useTransform(progress, [0, 1], [0, 16]),
            }}
            className="relative mx-auto"
          >
            <motion.div
              style={{
                opacity: pillOpacity,
                borderRadius: useTransform(progress, [0, 1], [0, 16]),
              }}
              className="absolute inset-0 bg-bg-warm/95 backdrop-blur-md border border-border-light shadow-lg shadow-black/5"
            />

            <div className="relative flex items-center justify-between px-6 py-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center"
              >
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/thalor-full-logo-black.png`} alt="Thalor" className="h-8 object-contain" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-text-primary transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-text-primary transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-text-primary transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-warm pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-2xl font-medium ${
                    activeSection === link.id ? 'text-text-primary' : 'text-text-muted'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {activeSection === link.id && (
                      <span className="w-2 h-2 bg-accent rounded-full" />
                    )}
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="group inline-flex items-center gap-3 mt-4 pl-6 pr-2 py-2 text-lg font-medium text-text-primary border border-border-light rounded-full transition-all duration-300 hover:bg-accent hover:text-accent-text hover:border-accent"
                >
                  Get in Touch
                  <span className="flex items-center justify-center w-10 h-10 bg-accent rounded-full">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-accent-text">
                      <path d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
