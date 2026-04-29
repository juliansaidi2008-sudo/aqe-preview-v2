"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  /** Animation duration in ms. Default 900. */
  duration?: number;
  /** Delay before starting (after intersection). Default 0. */
  delay?: number;
  /** Decimal places to render. Default 0. */
  decimals?: number;
};

/**
 * Counts up from 0 → `to` once, when scrolled into view.
 * Honors prefers-reduced-motion (snaps directly to final value).
 * Locale-formats the number with commas. SSRs a stable initial value
 * to avoid hydration mismatch.
 */
export default function StatsCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 900,
  delay = 0,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVal(to);
      return;
    }

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const start = performance.now() + delay;
      const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

      const step = (now: number) => {
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(step);
          return;
        }
        const t = Math.min(1, elapsed / duration);
        setVal(to * ease(t));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, delay]);

  const formatted =
    decimals > 0
      ? val.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(val).toLocaleString("en-US");

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
