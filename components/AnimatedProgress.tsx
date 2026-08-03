"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedProgressProps = {
  value: number;
  delay?: number;
  label?: string;
};

export default function AnimatedProgress({
  value,
  delay = 0,
  label = "project_progress",
}: AnimatedProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        timeoutRef.current = window.setTimeout(() => {
          setIsVisible(true);
        }, delay);

        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1400;
    const startTime = performance.now();

    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayedValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrameRef.current =
          window.requestAnimationFrame(animateCounter);
      }
    };

    animationFrameRef.current =
      window.requestAnimationFrame(animateCounter);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, value]);

  return (
    <div ref={containerRef}>
      <div className="mb-3 flex items-center justify-between gap-4 font-mono text-xs">
        <span className="text-neutral-600">{label}</span>

        <span className="text-green-400">{displayedValue}%</span>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayedValue}
        aria-label={label}
        className="h-1.5 overflow-hidden bg-neutral-900"
      >
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