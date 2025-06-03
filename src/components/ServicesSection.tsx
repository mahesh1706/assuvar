
import { Button } from '@/components/ui/button';
import { Code, Palette, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design",
      description: "Creating visually stunning and user-friendly designs that captivate your audience and enhance user experience.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Building robust, scalable, and high-performance websites using the latest technologies and best practices.",
      features: ["Custom Development", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO",
      description: "Optimizing your website to rank higher in search engines and drive organic traffic to your business.",
      features: ["Keyword Research", "On-page SEO", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gray-50 hover:bg-black transition-all duration-500 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-black group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-black group-hover:bg-white rounded-full mr-3 transition-colors duration-300"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-black text-black group-hover:border-white group-hover:text-white group-hover:bg-transparent transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
