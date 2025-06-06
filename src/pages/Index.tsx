import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Assuvar – Digital Solutions Made for India | Web, SEO, Branding & More</title>
        <meta name="description" content="Assuvar is a full-service digital agency in India offering website development, SEO, social media management, branding, and chatbot solutions for startups and local businesses." />
        <meta name="keywords" content="digital agency India, website development India, SEO services India, social media management India, branding India, chatbot development India, rebranding services India, Indian startups, local business digital marketing" />
        <link rel="canonical" href="https://assuvar.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Assuvar",
            "url": "https://assuvar.com/",
            "logo": "/public/title.jpeg",
            "description": "Full-service digital agency in India for web development, SEO, branding, and digital marketing.",
            "sameAs": [
              "https://www.instagram.com/assuvarcloud/",
              "https://www.linkedin.com/company/assuvar/",
              "https://x.com/assuvarcloud"
            ]
          }
        `}</script>
      </Helmet>
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
