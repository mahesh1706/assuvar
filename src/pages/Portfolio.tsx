import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioProjects = [
  {
    id: 1,
    name: "MANJUNATH",
    role: "Web Developer",
    location: "Hosur, Bangalore",
    description:
      "I'm a passionate Web Developer and a 3rd-year Computer Science student with a strong interest in creating user-friendly digital experiences. Alongside my development skills, I also specialize in UI Design, blending functionality with clean and modern aesthetics. I enjoy building responsive websites and applications that not only work smoothly but also look great. Always eager to learn and grow, I'm continuously exploring new technologies to enhance my craft and contribute to impactful projects.",
    image: "https://i.ibb.co/Vc6QQxT5/manjunath.png",
    socials: [
      {
        icon: "🔗",
        label: "Portfolio",
        link: "https://manjunath1326.netlify.app/",
      },
      {
        icon: "📧",
        label: "manjunaths5262@gmail.com",
        link: "mailto:manjunaths5262@gmail.com",
      },
      {
        icon: (
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            width="16"
            alt="LinkedIn"
          />
        ),
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/manjunaths1326/",
      },
      // You can uncomment and extend more social links here
      // {
      //   icon: "🖼️",
      //   label: "Instagram",
      //   link: "https://instagram.com/yourprofile",
      // },
      // {
      //   icon: "❌",
      //   label: "X (Twitter)",
      //   link: "https://x.com/yourhandle",
      // },
    ],
  },
];

const FullscreenOverlay = ({ project, onClose }: any) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-8 overflow-y-auto">
      <button
        onClick={onClose}
        className="text-sm mb-8 flex items-center gap-2 text-gray-700 hover:text-black"
      >
        ← back
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Text Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="text-gray-500">
            {project.role} <span className="mx-2">|</span> {project.location}
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">
            {project.description}
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-6 pt-4">
            {project.socials.map((s: any, index: number) => (
              <a
                key={index}
                href={s.link || "#"}
                target={s.link ? "_blank" : undefined}
                rel={s.link ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-black hover:text-purple-600"
              >
                <span className="text-xl">{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 max-w-md">
          <img
            src={project.image}
            alt={project.name}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="font-nunito">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in web and app development, design, and
            product innovation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <FullscreenOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default PortfolioPage;
