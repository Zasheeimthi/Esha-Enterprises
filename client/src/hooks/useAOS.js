import { useEffect, useRef } from 'react';

/**
 * Simple scroll-based animation system that replaces AOS.
 * Observes elements with [data-aos] and adds .aos-animate when they enter viewport.
 */
const observeElements = () => {
  const elements = document.querySelectorAll('[data-aos]:not(.aos-init)');
  if (elements.length === 0) return;

  // Mark all as initialized
  elements.forEach((el) => {
    el.classList.add('aos-init');
  });

  // If viewport has no height (e.g. SSR, headless), show everything immediately
  if (window.innerHeight === 0) {
    elements.forEach((el) => el.classList.add('aos-animate'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
          setTimeout(() => {
            el.classList.add('aos-animate');
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.05, rootMargin: '50px' }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

export const initAOS = () => {
  observeElements();
};

export const useAOS = () => {
  useEffect(() => {
    // Initial observation after a small delay for DOM settling
    const timer = setTimeout(() => observeElements(), 200);
    return () => clearTimeout(timer);
  }, []);
};

/**
 * Hook to observe AOS elements after page data loads.
 */
export const useInitAOS = (data) => {
  useEffect(() => {
    if (!data) return;
    const timer = setTimeout(() => observeElements(), 100);
    return () => clearTimeout(timer);
  }, [data]);
};
