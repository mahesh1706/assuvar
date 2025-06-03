
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About Our Agency
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're a passionate team of designers and developers who believe in the power of digital innovation. 
              With years of experience in web design, development, and SEO, we help businesses transform their 
              online presence and achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines creativity with technical expertise to deliver solutions that not only look 
              amazing but also perform exceptionally well.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-highlight text-white hover:bg-highlight-hover transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Side - Image/Stats */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl w-full"
              />
              
              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-highlight/20 hover:border-highlight transition-all duration-300">
                <div className="text-3xl font-bold text-highlight">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-black text-white p-6 rounded-lg shadow-xl border border-highlight/20 hover:border-highlight transition-all duration-300">
                <div className="text-3xl font-bold text-highlight">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
