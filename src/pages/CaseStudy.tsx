import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Clock, Users } from 'lucide-react';

const CaseStudy = () => {
  const projects = [
    {
      id: 1,
      title: "PlaySchool Visual Interactive Website",
      category: "Web Development & Design",
      client: "Sunshine",
      duration: "2 Weeks",
      team: "2 members",
      date: "2024",
      image: "https://i.postimg.cc/SsScR0mc/look-2.png",
      description: "Complete redesign and development of a modern with advanced features and improved user experience.",
      challenge: "The client needed a modern, scalable that could handle high traffic and provide excellent user experience.",
      solution: "We built a custom e-commerce platform using React and Node.js with advanced features like real-time inventory, personalized recommendations, and seamless checkout process.",
      results: ["300% increase in conversion rate", "50% reduction in page load time", "95% user satisfaction score"],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Google Analytics"],
      link: "https://sunshinechildcare.in/"
    },
    {
      id: 2,
      title: "Instagram & Whatsapp Intergated Website ",
      category: "Web Design & SEO",
      client: "Naturallook",
      duration: "2  Weeks",
      team: "2 members",
      date: "2024",
      image: "https://i.postimg.cc/J0MbwvJb/look.png",
      description: "Modern corporate website with focus on user experience and search engine optimization.",
      challenge: "The company needed a professional website that would establish credibility and improve their online presence.",
      solution: "We created a clean, modern design with optimized content architecture and implemented comprehensive SEO strategies.",
      results: ["400% increase in organic traffic", "60% improvement in user engagement", "Top 3 ranking for target keywords"],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Google Analytics"],
      link: "https://natruallookhsr.netlify.app/"
    }
  ];

  return (
    <div className="font-nunito">
      <Navbar />

      {/* Hero Section */}
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

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`mb-20 animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <div className="animate-slide-in-left">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-2xl w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="animate-slide-in-right">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-black bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>

                  <h2 className="text-3xl font-bold text-black mt-4 mb-2">{project.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-black mb-2">Challenge</h3>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-black mb-2">Solution</h3>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-3">Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm bg-black text-white px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
