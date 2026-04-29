"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Kept for API compatibility — currently always rendered as div. */
  as?: "div";
  style?: CSSProperties;
};

/**
 * Fades children up on scroll. IntersectionObserver-driven, no library.
 * Honors prefers-reduced-motion via CSS in globals.css.
 */
export default function ScrollFade({
  children,
  className = "",
  delay = 0,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const inlineStyle: CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}
