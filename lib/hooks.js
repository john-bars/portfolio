"use client";
import { useEffect, useRef } from "react";

export const useIntersectionObserver = ({ targetSelector, onIntersect }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const targetElement = targetRef.current;

    const options = {
      threshold: 0.75, // Trigger when 75% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(); // Call the provided callback when intersecting
        }
      });
    }, options);

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [onIntersect]);

  return targetRef;
};
