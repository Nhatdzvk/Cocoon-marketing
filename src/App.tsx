import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Navigation, menuChapters } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { PresentationControls } from './components/PresentationControls';
import { SourceDrawer } from './components/SourceDrawer';
import { MistCanvas } from './components/MistCanvas';

import { HeroSection } from './components/sections/01_HeroSection';
import { ExecutiveOverview } from './components/sections/02_ExecutiveOverview';
import { MarketSection } from './components/sections/03_MarketSection';
import { ConsumerSection } from './components/sections/04_ConsumerSection';
import { BrandSection } from './components/sections/05_BrandSection';
import { CompetitionChart } from './components/sections/06_CompetitionChart';
import { SWOTSection } from './components/sections/07_SWOTSection';
import { ObjectivesSection } from './components/sections/08_ObjectivesSection';
import { SegmentationMatrix } from './components/sections/09_SegmentationMatrix';
import { InsightSection } from './components/sections/10_InsightSection';
import { BigIdeaSection } from './components/sections/11_BigIdeaSection';
import { SeasonsCollection } from './components/sections/12_SeasonsCollection';
import { MarketingMixSection } from './components/sections/13_MarketingMixSection';
import { IMCTimeline } from './components/sections/14_IMCTimeline';
import { ResultsDashboard } from './components/sections/15_ResultsDashboard';
import { RiskMatrix } from './components/sections/16_RiskMatrix';
import { ClosingSection } from './components/sections/17_ClosingSection';

gsap.registerPlugin(ScrollTrigger);

export const sectionIds = [
  'hero',
  'overview',
  'market',
  'consumer',
  'brand',
  'competition',
  'swot',
  'objectives',
  'target',
  'insight',
  'big-idea',
  'product',
  'marketing-mix',
  'imc',
  'results',
  'risks',
  'closing',
];

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [isSourceDrawerOpen, setIsSourceDrawerOpen] = useState<boolean>(false);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);

  const lenisRef = useRef<Lenis | null>(null);

  // Check system prefers-reduced-motion on load
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
    }
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Update body class for reduced motion
  useEffect(() => {
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

  // Initialize Lenis smooth scroll and connect to GSAP ticker
  useEffect(() => {
    if (isPresentationMode || isReducedMotion) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isPresentationMode, isReducedMotion]);

  // Track active section on scroll with IntersectionObserver
  useEffect(() => {
    if (isPresentationMode) return;

    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isPresentationMode]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: 0, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const handleOpenSource = (id: string) => {
    setSelectedSourceId(id);
    setIsSourceDrawerOpen(true);
  };

  // Presentation Mode navigation
  const currentSlideIndex = Math.max(0, sectionIds.indexOf(activeSection));

  const handleNextSlide = () => {
    if (currentSlideIndex < sectionIds.length - 1) {
      const nextId = sectionIds[currentSlideIndex + 1];
      scrollToSection(nextId);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      const prevId = sectionIds[currentSlideIndex - 1];
      scrollToSection(prevId);
    }
  };

  const currentChapter = menuChapters.find((c) => c.id === activeSection) || menuChapters[0];

  return (
    <div className={`relative min-h-screen bg-warm-ivory text-charcoal ${isPresentationMode ? 'presentation-mode' : ''}`}>
      {/* Background Mist and Botanical Dew Simulation */}
      <MistCanvas reducedMotion={isReducedMotion} />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress
        activeSectionTitle={currentChapter.title}
        isPresentationMode={isPresentationMode}
      />

      {/* Agency Minimalist Navigation Header */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isPresentationMode={isPresentationMode}
        onTogglePresentation={() => setIsPresentationMode((prev) => !prev)}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={() => setIsReducedMotion((prev) => !prev)}
        onOpenSources={() => {
          setSelectedSourceId(null);
          setIsSourceDrawerOpen(true);
        }}
      />

      {/* Main Single-page Presentation Sections */}
      <main className="relative z-10">
        <HeroSection onExplore={() => scrollToSection('overview')} isPresentationMode={isPresentationMode} />
        <ExecutiveOverview onOpenSource={handleOpenSource} />
        <MarketSection onOpenSource={handleOpenSource} />
        <ConsumerSection onOpenSource={handleOpenSource} />
        <BrandSection onOpenSource={handleOpenSource} />
        <CompetitionChart onOpenSource={handleOpenSource} />
        <SWOTSection onOpenSource={handleOpenSource} />
        <ObjectivesSection />
        <SegmentationMatrix />
        <InsightSection />
        <BigIdeaSection />
        <SeasonsCollection />
        <MarketingMixSection />
        <IMCTimeline />
        <ResultsDashboard />
        <RiskMatrix />
        <ClosingSection
          onRestart={() => scrollToSection('hero')}
          onOpenMenu={() => {
            const menuBtn = document.querySelector('button[aria-label="Mở mục lục toàn màn hình"]') as HTMLButtonElement | null;
            if (menuBtn) menuBtn.click();
          }}
          onTogglePresentation={() => setIsPresentationMode((prev) => !prev)}
          isPresentationMode={isPresentationMode}
        />
      </main>

      {/* Presentation Mode Float Controls */}
      <PresentationControls
        isActive={isPresentationMode}
        currentSlide={currentSlideIndex}
        totalSlides={sectionIds.length}
        currentTitle={currentChapter.title}
        onNext={handleNextSlide}
        onPrev={handlePrevSlide}
        onExit={() => setIsPresentationMode(false)}
        onToggleReducedMotion={() => setIsReducedMotion((prev) => !prev)}
        isReducedMotion={isReducedMotion}
      />

      {/* Slide-out Source Reference Drawer */}
      <SourceDrawer
        isOpen={isSourceDrawerOpen}
        onClose={() => setIsSourceDrawerOpen(false)}
        selectedSourceId={selectedSourceId}
      />
    </div>
  );
}
export default App;
