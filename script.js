(() => {
  'use strict';

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();

  // The page is visible before this enhancement runs, including without JavaScript.
  if ('IntersectionObserver' in window && 'animate' in Element.prototype) {
    const reveal = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      visible.forEach((entry, index) => {
        reveal.unobserve(entry.target);
        if (motionPreference.matches) return;
        const isPaper = entry.target.classList.contains('paper-card');
        const animation = entry.target.animate(
          isPaper ? [{ opacity: .85 }, { opacity: 1 }] : [
            { opacity: .85, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: isPaper ? 350 : 400, delay: Math.min(index * 40, 80), easing: 'cubic-bezier(.22,1,.36,1)' },
        );
        animations.add(animation);
        animation.finished.catch(() => {}).then(() => animations.delete(animation));
      });
    }, { threshold: .08 });

    document.querySelectorAll('.hero-copy, .hero-art, .paper-card, .about-section, .contact-section')
      .forEach((element) => reveal.observe(element));
  }

  const cancelOptionalMotion = () => {
    if (!motionPreference.matches) return;
    animations.forEach((animation) => animation.cancel());
    animations.clear();
  };
  if (motionPreference.addEventListener) {
    motionPreference.addEventListener('change', cancelOptionalMotion);
  } else if (motionPreference.addListener) {
    motionPreference.addListener(cancelOptionalMotion);
  }

  const navigation = [...document.querySelectorAll('.site-header nav a')];
  const sections = navigation.map((link) => document.querySelector(link.getAttribute('href')));
  let updatePending = false;

  const updateNavigation = () => {
    updatePending = false;
    const readingLine = Math.min(window.innerHeight * .3, 220);
    let current = -1;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= readingLine) current = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = sections.length - 1;
    }
    navigation.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const scheduleNavigationUpdate = () => {
    if (updatePending) return;
    updatePending = true;
    window.requestAnimationFrame(updateNavigation);
  };
  window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
  window.addEventListener('resize', scheduleNavigationUpdate, { passive: true });
  updateNavigation();
})();
