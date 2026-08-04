'use client';
import { useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import type { SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  fill?: string; // Keep prop definition just in case, but don't destructure it if unused
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    // Listen on window so Spline doesn't block the events
    window.addEventListener('mousemove', handleMouseMove);
    
    // Default to hovered
    setIsHovered(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      className={cn(
        'pointer-events-none fixed z-0 rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_70%)] blur-2xl transition-opacity duration-200',
        'from-gray-400/30 via-gray-500/10 to-transparent',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        mixBlendMode: 'screen'
      }}
    />
  );
}
