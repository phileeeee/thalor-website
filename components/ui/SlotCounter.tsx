'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface SlotCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  trigger?: boolean;
}

export default function SlotCounter({
  end,
  prefix = '',
  suffix = '',
  className = '',
  duration = 1,
  trigger,
}: SlotCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const selfInView = useInView(ref, { once: true, margin: '0px' });
  const shouldStart = trigger !== undefined ? trigger : selfInView;
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (shouldStart) {
      setDisplayValue('0');
      const durationMs = duration * 1000;
      const startTime = Date.now();

      const countInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(easedProgress * end);

        setDisplayValue(currentValue.toString());

        if (progress >= 1) {
          clearInterval(countInterval);
          setDisplayValue(end.toString());
        }
      }, 30);

      return () => clearInterval(countInterval);
    }
  }, [shouldStart, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
