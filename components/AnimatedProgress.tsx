"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedProgressProps = {
  value: number;
  delay?: number;
};

export default function AnimatedProgress({
  value,
  delay = 0,
}: AnimatedProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => {
            setIsVisible(true);
          }, delay);

          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1400;
    const startTime = performance.now();

    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(value * easedProgress);

      setDisplayedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    const animationFrame = requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value]);

  return (
    <div ref={containerRef}>
      <div className="mb-3 flex items-center justify-between font-mono text-xs">
        <span className="text-neutral-600">project_progress</span>

        <span className="text-green-400">{displayedValue}%</span>
      </div>

      <div className="h-1.5 overflow-hidden bg-neutral-900">
        <div
          className="h-full origin-left bg-green-400 transition-transform duration-[1400ms] ease-out"
          style={{
            transform: `scaleX(${isVisible ? value / 100 : 0})`,
          }}
        />
      </div>
    </div>
  );
}