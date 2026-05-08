import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import FloorPlan from './components/FloorPlan';
import PackagesGrid from './components/PackagesGrid';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <StatBand />
      <FloorPlan />
      <PackagesGrid />
      <Footer />
    </>
  );
}
