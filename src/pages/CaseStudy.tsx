import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Calendar, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const CaseStudy = () => {
  const webProjects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Web Development & Design",
      client: "TechMart Solutions",
      duration: "3 months",
      team: "4 members",
      date: "2024",
      image: "https://i.postimg.cc/SsScR0mc/look-2.png",
      description: "Complete redesign and development of a modern e-commerce platform with advanced features and improved user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "https://sunshinechildcare.in/"
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "Web Design & SEO",
      client: "Global Innovations Inc",
      duration: "2 months",
      team: "3 members",
      date: "2024",
      image: "https://i.postimg.cc/J0MbwvJb/look.png",
      description: "Modern corporate website with focus on user experience and search engine optimization.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Google Analytics"],
      link: "https://example.com/corporate"
    },
    {
      id: 3,
      title: "Why We're Doing This",
      category: "Web Development",
      client: "DataFlow Systems",
      duration: "4 months",
      team: "5 members",
      date: "2024",
      image: "https://i.postimg.cc/FNn63JQr/image.png",
      description: "Music has the power to heal, inspire, and bring communities together. Rhythmos'25 isn't just an event—it's our commitment to creating positive change.",
      technologies: ["TailwindCSS", "HTML", "CSS", "JavaScript", "React"],
      link: "https://rhythmos.in/"
    },
    {
      id: 4,
      title: "Luxury Living Redefined",
      category: "Web Development",
      client: "DataFlow Systems",
      duration: "4 months",
      team: "5 members",
      date: "2024",
      image: "https://i.postimg.cc/rsw-SHGZC/image.png",
      description: "Experience premium comfort, state-of-the-art amenities, and a vibrant community that feels like home. Your perfect living space awaits!",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://postimg.cc/Vr2rrt8d"
    }
  ];

  const productProjects = [
    {
      id: 1,
      title: "Free Learning, Easy Access",
      category: "Product Design & Development",
      client: "FinTech Solutions",
      duration: "1 week",
      team: "8 members",
      date: "2024",
      image: "https://i.postimg.cc/BZDV3Jvr/image.png",
      description: "Learn smarter, explore limitless possibilities, and shape your future with the power of modern education! 📚💡",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      link: "https://zynko.netlify.app/pages/landingpage.html"
    },
    {
      id: 2,
      title: "Free Learning, Easy Access",
      category: "Product Design & Development",
      client: "FinTech Solutions",
      duration: "2 months",
      team: "4 members",
      date: "2025",
      image: "https://i.postimg.cc/BZDV3Jvr/image.png",
      description: "Learn smarter, explore limitless possibilities, and shape your future with the power of modern education! 📚💡",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      link: "https://zynko.netlify.app/pages/landingpage.html"
    },
    {
      id: 3,
      title: "Free Learning, Easy Access",
      category: "Product Design & Development",
      client: "FinTech Solutions",
      duration: "6 months",
      team: "8 members",
      date: "2024",
      image: "https://i.postimg.cc/BZDV3Jvr/image.png",
      description: "Learn smarter, explore limitless possibilities, and shape your future with the power of modern education! 📚💡",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      link: "https://zynko.netlify.app/pages/landingpage.html"
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{project.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" />{project.team}</span>
        </div>

        <span className="text-sm font-medium text-black bg-gray-100 px-3 py-1 rounded-full">{project.category}</span>

        <h3 className="text-xl font-bold text-black mt-3 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-black mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span key={index} className="text-xs bg-black text-white px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </a>
        )}
      </div>
    </div>
  );

  const AutoCarousel = ({ projects, title, description }: { projects: any[], title: string, description: string }) => {
    const [api, setApi] = useState<any>();

    useEffect(() => {
      if (!api) return;

      const interval = setInterval(() => {
        api.scrollNext();
      }, 2000); // Scroll every 5 seconds

      return () => clearInterval(interval);
    }, [api]);

    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>

          <Carousel
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              dragFree: false, // disable fast continuous scrolling
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[...projects, ...projects].map((project, index) => (
                <CarouselItem key={`${project.id}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
    );
  };

  return (
    <div className="font-nunito">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <AutoCarousel
          projects={webProjects}
          title="Web Projects"
          description="Comprehensive web solutions from design to deployment"
        />
      </div>

      <div className="bg-gray-50">
        <AutoCarousel
          projects={productProjects}
          title="Product Projects"
          description="End-to-end product development and innovative solutions"
        />
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudy;
