import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  opacity?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export function useGsapReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  opts: RevealOptions = {}
) {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const { y = 50, opacity = 0, stagger = 0.1, duration = 0.6, delay = 0 } = opts;

    gsap.from(element.children, {
      y,
      opacity,
      stagger,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
    });
  }, [ref, opts]);
}
