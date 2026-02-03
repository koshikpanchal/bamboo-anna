import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type HomepageAnimationToggles = {
  enabled: boolean;
  hero: boolean;
  counts: boolean;
  tags: boolean;
  pinnedStory: boolean;
  scrollCraft: boolean;
  journey: boolean;
  impact: boolean;
};

type InitOptions = Partial<HomepageAnimationToggles> & {
  root?: ParentNode;
};

const DEFAULT_TOGGLES: HomepageAnimationToggles = {
  enabled: true,
  hero: true,
  counts: true,
  tags: true,
  pinnedStory: true,
  scrollCraft: true,
  journey: true,
  impact: true,
};

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const getTogglesFromQuery = (): Partial<HomepageAnimationToggles> => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const readBool = (key: string) => {
    const raw = params.get(key);
    if (raw == null) return undefined;
    if (raw === '0' || raw === 'false') return false;
    if (raw === '1' || raw === 'true') return true;
    return undefined;
  };

  return {
    enabled: readBool('anim'),
    hero: readBool('animHero'),
    counts: readBool('animCounts'),
    tags: readBool('animTags'),
    pinnedStory: readBool('animStory'),
    scrollCraft: readBool('animCraft'),
    journey: readBool('animJourney'),
    impact: readBool('animImpact'),
  };
};

const setVisible = (el: Element | null) => {
  if (!el || !(el instanceof HTMLElement)) return;
  el.setAttribute('data-in', 'true');
};

const animateCountOnce = (el: HTMLElement, durationMs: number) => {
  if (el.dataset.counted === 'true') return;
  el.dataset.counted = 'true';

  const originalText = (el.textContent ?? '').trim();
  const match = originalText.match(/^(-?[\d,.]+)(.*)$/);
  const targetValue = match ? Number(match[1].replace(/,/g, '')) : 0;
  const suffix = match ? match[2] : '';

  const duration = Math.max(900, Math.min(1200, durationMs));
  const start = performance.now();

  el.classList.add('is-counted');

  const tick = (now: number) => {
    const t = clamp01((now - start) / duration);
    const eased = easeOutCubic(t);
    const current = Math.round(targetValue * eased);
    el.textContent = `${current}${suffix}`;

    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = originalText;
    }
  };

  el.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
};

const initRevealObserver = (root: ParentNode) => {
  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-anim="reveal"]'));
  if (elements.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setVisible(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
};

const initCountObserver = (
  root: ParentNode,
  options: { durationMs: number; onCountStart?: (el: HTMLElement) => void }
) => {
  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-anim="count"]'));
  if (elements.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        options.onCountStart?.(el);
        animateCountOnce(el, options.durationMs);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
};

const initHeroReveal = (root: ParentNode) => {
  const hero = root.querySelector<HTMLElement>('[data-anim="hero"]');
  if (!hero) return () => {};

  const raf = requestAnimationFrame(() => {
    hero.setAttribute('data-in', 'true');
  });

  return () => cancelAnimationFrame(raf);
};

const initPinnedStory = (root: ParentNode) => {
  const section = root.querySelector<HTMLElement>('[data-anim="pin-story"]');
  if (!section) return () => {};

  const title = section.querySelector<HTMLElement>('[data-story="title"]');
  const supporting = section.querySelector<HTMLElement>('[data-story="supporting"]');
  if (!title || !supporting) return () => {};

  section.dataset.enhanced = 'true';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${Math.round(window.innerHeight * 0.6)}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  gsap.set(supporting, { opacity: 0, y: 6 });

  tl.to(title, { opacity: 0, y: -6, ease: 'none', duration: 1 }, 0);
  tl.to(supporting, { opacity: 1, y: 0, ease: 'none', duration: 1 }, 0);

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
    delete section.dataset.enhanced;
    gsap.set([title, supporting], { clearProps: 'all' });
  };
};

const initScrollCraft = (root: ParentNode) => {
  const section = root.querySelector<HTMLElement>('[data-anim="scroll-craft"]');
  if (!section) return () => {};

  section.dataset.enhanced = 'true';

  const stage = section.querySelector<HTMLElement>('[data-craft="stage"]');
  const parts = Array.from(section.querySelectorAll<HTMLElement>('[data-craft-part]'));
  const callouts = Array.from(section.querySelectorAll<HTMLElement>('[data-craft-callout]'));
  const step1Copy = section.querySelector<HTMLElement>('[data-craft-copy="step-1"]');
  const step3Copy = section.querySelector<HTMLElement>('[data-craft-copy="step-3"]');

  if (!stage || parts.length === 0) {
    delete section.dataset.enhanced;
    return () => {};
  }

  const cols = Number(section.dataset.cols ?? 4);
  const rows = Number(section.dataset.rows ?? 3);
  const centerCol = (cols - 1) / 2;
  const centerRow = (rows - 1) / 2;

  const offsets = parts.map((part, index) => {
    const row = Number(part.dataset.row ?? Math.floor(index / cols));
    const col = Number(part.dataset.col ?? (index % cols));
    const nx = centerCol === 0 ? 0 : (col - centerCol) / centerCol;
    const ny = centerRow === 0 ? 0 : (row - centerRow) / centerRow;
    const magnitude = Math.min(Math.sqrt(nx * nx + ny * ny), 1);

    const dx = nx * 110;
    const dy = ny * 86;
    const rot = (nx * 10 + ny * -8) * (0.35 + magnitude * 0.65);

    return { dx, dy, rot };
  });

  gsap.set(callouts, { opacity: 0, y: 10 });
  if (step3Copy) gsap.set(step3Copy, { opacity: 0, y: 10 });

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${Math.round(window.innerHeight * 2)}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(
    parts,
    {
      x: (i: number) => offsets[i]?.dx ?? 0,
      y: (i: number) => offsets[i]?.dy ?? 0,
      rotation: (i: number) => offsets[i]?.rot ?? 0,
      scale: 0.985,
      duration: 0.33,
    },
    0.33
  );

  tl.to(
    callouts,
    {
      opacity: 1,
      y: 0,
      duration: 0.18,
      stagger: 0.08,
    },
    0.4
  );

  tl.to(
    callouts,
    {
      opacity: 0,
      y: -8,
      duration: 0.18,
    },
    0.66
  );

  tl.to(
    parts,
    {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.34,
    },
    0.66
  );

  tl.to(
    stage,
    {
      scale: 1.07,
      y: -8,
      duration: 0.34,
    },
    0.66
  );

  if (step1Copy) {
    tl.to(step1Copy, { opacity: 0, y: -8, duration: 0.18 }, 0.66);
  }

  if (step3Copy) {
    tl.to(step3Copy, { opacity: 1, y: 0, duration: 0.26 }, 0.74);
  }

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
    delete section.dataset.enhanced;
    gsap.set([stage, ...parts, ...callouts], { clearProps: 'all' });
    if (step1Copy) gsap.set(step1Copy, { clearProps: 'all' });
    if (step3Copy) gsap.set(step3Copy, { clearProps: 'all' });
  };
};

const initJourney = (root: ParentNode) => {
  const section = root.querySelector<HTMLElement>('[data-anim="journey"]');
  if (!section) return () => {};

  const line = section.querySelector<HTMLElement>('[data-journey="line"]');
  const steps = Array.from(section.querySelectorAll<HTMLElement>('[data-journey-step]'));
  if (!line || steps.length === 0) return () => {};

  section.dataset.enhanced = 'true';

  gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
  steps.forEach((step) => step.classList.remove('is-reached'));

  const thresholds = steps.map((_, index) => (index + 1) / (steps.length + 1));

  const tween = gsap.to(line, {
    scaleY: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      end: 'bottom 35%',
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        steps.forEach((step, index) => {
          if (p >= thresholds[index]) step.classList.add('is-reached');
        });
      },
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    delete section.dataset.enhanced;
    gsap.set(line, { clearProps: 'transform' });
    steps.forEach((step) => step.classList.remove('is-reached'));
  };
};

export const initHomepageAnimations = (options: InitOptions = {}) => {
  const root = options.root ?? document.querySelector('[data-page="home"]') ?? document.querySelector('.home');
  if (!root) return () => {};

  const queryToggles = getTogglesFromQuery();
  const { root: ignoredRoot, ...toggleOverrides } = options;
  void ignoredRoot;
  const toggles: HomepageAnimationToggles = {
    ...DEFAULT_TOGGLES,
    ...toggleOverrides,
    ...queryToggles,
  };

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.documentElement.classList.toggle('reduced-motion', reduceMotion);

  if (!toggles.enabled) {
    root.querySelectorAll('[data-anim="reveal"]').forEach(setVisible);
    root.querySelectorAll<HTMLElement>('[data-anim="count"]').forEach((el) => {
      el.classList.add('is-counted');
    });
    setVisible(root.querySelector('[data-anim="hero"]'));
    return () => {};
  }

  const didAddAnimationsClass = !document.documentElement.classList.contains('has-animations');
  document.documentElement.classList.add('has-animations');

  const cleanupFns: Array<() => void> = [];

  if (toggles.hero) {
    cleanupFns.push(initHeroReveal(root));
  } else {
    setVisible(root.querySelector('[data-anim="hero"]'));
  }

  cleanupFns.push(initRevealObserver(root));

  if (toggles.counts) {
    cleanupFns.push(
      initCountObserver(root, {
        durationMs: 1050,
        onCountStart: (el) => {
          if (!toggles.impact) return;
          const impactSection = el.closest<HTMLElement>('[data-impact]');
          if (impactSection && impactSection.dataset.impactIn !== 'true') {
            impactSection.dataset.impactIn = 'true';
          }
        },
      })
    );
  } else {
    root.querySelectorAll<HTMLElement>('[data-anim="count"]').forEach((el) => {
      el.classList.add('is-counted');
    });
  }

  if (!toggles.tags) {
    root.querySelectorAll('[data-tags] [data-anim="reveal"]').forEach(setVisible);
  }

  const mm = gsap.matchMedia();
  cleanupFns.push(() => mm.revert());

  if (!reduceMotion) {
    mm.add('(min-width: 900px)', () => {
      const desktopCleanups: Array<() => void> = [];
      if (toggles.pinnedStory) desktopCleanups.push(initPinnedStory(root));
      if (toggles.scrollCraft) desktopCleanups.push(initScrollCraft(root));
      if (toggles.journey) desktopCleanups.push(initJourney(root));

      ScrollTrigger.refresh();

      return () => {
        desktopCleanups.forEach((fn) => fn());
      };
    });
  } else {
    root.querySelectorAll<HTMLElement>('[data-anim="journey"] [data-journey="line"]').forEach((line) => {
      line.style.transform = 'scaleY(1)';
      line.style.transformOrigin = 'top center';
    });
  }

  return () => {
    cleanupFns.forEach((fn) => fn());
    if (didAddAnimationsClass) document.documentElement.classList.remove('has-animations');
  };
};
