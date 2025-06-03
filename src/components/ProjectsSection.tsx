
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Modern e-commerce solution with advanced features"
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Professional corporate website with clean design"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Intuitive dashboard for data management"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1487258792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Creative portfolio showcasing artistic work"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their goals
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <Link to="/case-study" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-black mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Link to="/case-study">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
