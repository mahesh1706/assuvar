import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8" />, number: "100+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Target className="w-8 h-8" />, number: "99%", label: "Success Rate" }
  ];

  return (
    <div className="font-nunito">
      <Helmet>
        <title>About Us | Assuvar – Digital Agency India</title>
        <meta name="description" content="Learn about Assuvar, a digital agency in India specializing in web development, SEO, branding, and digital marketing for startups and local businesses." />
        <meta name="keywords" content="about assuvar, digital agency India, web development, SEO, branding, Indian startups" />
        <link rel="canonical" href="https://assuvar.com/about" />
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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-down">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">About Our Agency</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about creating digital experiences that make a difference. 
              Our team combines creativity with technical expertise to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Developer Profile */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=600"
                  alt="Developer Profile"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-lg border border-highlight">
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-highlight">Lead Developer</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="text-3xl font-bold text-black mb-6">Meet the Developer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in creating 
                modern, responsive websites that deliver exceptional user experiences. My passion lies 
                in transforming ideas into digital realities.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I believe in clean code, beautiful design, and seamless functionality. Every project 
                I work on is an opportunity to push boundaries and create something truly remarkable.
              </p>
              
              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border hover:border-highlight transition-all duration-300">
                    <h4 className="font-semibold text-black">Frontend</h4>
                    <p className="text-sm text-gray-600">React, Vue, JavaScript, TypeScript</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border hover:border-highlight transition-all duration-300">
                    <h4 className="font-semibold text-black">Design</h4>
                    <p className="text-sm text-gray-600">UI/UX, Figma, Adobe Creative Suite</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border hover:border-highlight transition-all duration-300">
                    <h4 className="font-semibold text-black">Backend</h4>
                    <p className="text-sm text-gray-600">Node.js, Python, Database Design</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border hover:border-highlight transition-all duration-300">
                    <h4 className="font-semibold text-black">SEO</h4>
                    <p className="text-sm text-gray-600">Technical SEO, Analytics, Optimization</p>
                  </div>
                </div>
              </div>

              <Button className="bg-highlight text-white hover:bg-highlight-hover">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:border-highlight border transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-highlight mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with exceptional digital solutions that drive growth, enhance user experiences, 
              and create lasting impact in the digital landscape. We're committed to delivering quality, 
              innovation, and results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
