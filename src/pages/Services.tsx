import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Palette, Search, Smartphone, ShoppingCart, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
     {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Building robust, scalable, and high-performance websites using the latest technologies and best practices.",
      // eslint-disable-next-line no-sparse-arrays
      features: ["Custom Development", "CMS Integration", "API Development", , "Performance Optimization"],
      
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: " Shopify & E-commerce Development",
      description: "Building powerful e-commerce platforms that drive sales and provide excellent shopping experiences.",
      features: ["Shopping Cart Integration", "Payment Gateway Setup", "Inventory Management", "Order Processing"],
      
    },
   

   
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Optimizing your website to rank higher in search engines and drive organic traffic to your business.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building", "Analytics Setup"],
      
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Design",
      description: "Designing intuitive and engaging mobile applications that provide seamless user experiences.",
      features: ["iOS/Android Design", "User Flow Design", "Interactive Prototypes", "App Store Optimization"],
   
    },
    
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Email Marketing"],
    
    },

     {
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design",
      description: "Creating visually stunning and user-friendly designs that captivate your audience and enhance user experience.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration", "Wireframing", "Prototyping"],
    
    }

  ];

  return (
    <div className="font-nunito">
      <Helmet>
        <title>Services | Assuvar – Web Development, SEO, Branding & More</title>
        <meta name="description" content="Explore Assuvar's digital services: web development, SEO, e-commerce, mobile app design, digital marketing, and branding for Indian businesses." />
        <meta name="keywords" content="web development India, SEO services India, e-commerce development, digital marketing India, branding India, mobile app design India" />
        <link rel="canonical" href="https://assuvar.com/services" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
              "@type": "Organization",
              "name": "Assuvar",
              "url": "https://assuvar.com/"
            },
            "areaServed": "India",
            "description": "Building robust, scalable, and high-performance websites for Indian businesses.",
            "brand": {
              "@type": "Brand",
              "name": "Assuvar"
            }
          }
        `}</script>
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive success in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-black group-hover:text-black transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <Link to="/contact">
                    <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                      Book A Call 
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Button>
            </Link>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
