"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".home-page");
    if (!page) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progress = page.querySelector<HTMLElement>("[data-home-progress]");
    const progressFill = progress?.querySelector<HTMLElement>("span");
    if (reduceMotion.matches) {
      progress?.setAttribute("hidden", "");
      return;
    }

    page.classList.add("home-motion-ready");
    const heroItems = Array.from(page.querySelectorAll<HTMLElement>("[data-home-reveal]"));
    const revealItems = Array.from(page.querySelectorAll<HTMLElement>("[data-home-scroll-reveal]"));
    heroItems.forEach((item) => {
      const delay = Number(item.dataset.homeDelay ?? 0);
      item.style.setProperty("--home-delay", Math.max(0, Math.min(delay, 500)) + "ms");
    });
    revealItems.forEach((item) => {
      const delay = Number(item.dataset.homeDelay ?? 0);
      item.style.setProperty("--home-delay", Math.max(0, Math.min(delay, 500)) + "ms");
    });

    // Hero elements are already on the first screen. Reveal them directly so
    // the lead portrait cannot remain hidden if an observer misses its first entry.
    let heroFrame = window.requestAnimationFrame(() => {
      heroItems.forEach((item) => item.classList.add("is-home-visible"));
      heroFrame = 0;
    });

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-home-visible");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-home-visible"));
    }

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      if (!progressFill) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
      progressFill.style.transform = "scaleX(" + amount + ")";
      progress?.classList.toggle("is-progressing", amount > 0);
    };
    const requestProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    const photo = page.querySelector<HTMLElement>(".hero-photo");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onPointerMove = (event: PointerEvent) => {
      const rect = photo?.getBoundingClientRect();
      if (!photo || !rect || rect.width === 0 || rect.height === 0) return;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      photo.style.setProperty("--home-tilt-x", (-x * 1.1).toFixed(2) + "deg");
      photo.style.setProperty("--home-tilt-y", (y * 1.1).toFixed(2) + "deg");
    };
    const resetPointer = () => {
      photo?.style.setProperty("--home-tilt-x", "0deg");
      photo?.style.setProperty("--home-tilt-y", "0deg");
    };
    if (photo && finePointer.matches) {
      photo.addEventListener("pointermove", onPointerMove);
      photo.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      if (heroFrame) window.cancelAnimationFrame(heroFrame);
      if (photo && finePointer.matches) {
        photo.removeEventListener("pointermove", onPointerMove);
        photo.removeEventListener("pointerleave", resetPointer);
      }
      page.classList.remove("home-motion-ready");
    };
  }, []);

  return null;
}
