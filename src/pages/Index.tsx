
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import FAQ from '@/components/faq';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
  }, []);

  return (
    <div className="font-nunito">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
