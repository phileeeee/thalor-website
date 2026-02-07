'use client';

export default function Footer() {
  return (
    <footer className="py-8 bg-bg-darker border-t border-border-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-text-light font-bold uppercase tracking-wider">
            <img src="/logo/thalor-logo.png" alt="Thalor" className="w-6 h-6 object-contain brightness-0 invert" />
            Thalor
          </span>
          <span className="text-text-muted text-sm">
            ACN 690 174 102
          </span>
        </div>

        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Thalor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
