import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioProjects = [
   {
    id: 1,

    name: "MAHESHWARAN",
    role: "Founder",
    location: "Hosur, Bangalore",
    description:
      "I'm a passionate Web Developer and a 3rd-year Computer Science student with a strong interest in creating user-friendly digital experiences. Alongside my development skills, I also specialize in UI Design, blending functionality with clean and modern aesthetics. I enjoy building responsive websites and applications that not only work smoothly but also look great. Always eager to learn and grow, I'm continuously exploring new technologies to enhance my craft and contribute to impactful projects.",
    image: "https://i.ibb.co/8g3f5rMY/Mahesh.png",
    socials: [
      //{
      // icon: "🔗",
      //  label: "Portfolio",
      //  link: "",
      //},
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/immaheshwaran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
  {
    id: 2,
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
        label: "team@assuvar.com",
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/manjunaths1326/",
      },
    ],
  },

  {
    id: 3,
    name: "Mohammed Saif ",
    role: "Software Developer ",
    location: "Hosur, Bangalore",
    description:
      "I am a passionate AI-driven developer and tech innovator committed to transforming ideas into intelligent, scalable, and user-centric solutions. As the Founder of CodeWithAI, I lead the development of the world's first AI-powered free online compiler and learning platform, dedicated to elevating coding journeys through artificial intelligence,/nWith expertise in React, React Native, AI chatbots, and cloud computing, I focus on creating smart applications that bridge the gap between technology and accessibility. My journey is fueled by a relentless drive to push boundaries, craft seamless user experiences, and empower developers through intelligent automation.",
    image: "https://i.ibb.co/nMMWgWw4/saif.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/mohammedsaif05",
      },
      {
        icon: "🔗",
        label: "Portfolio",
        link: "Mohammedsaif.netlify.app",
      },
    ],
  },
   {
    id: 4,
    name: "Farhan Khan ",
    role: "Graphics designer ",
    location: "Hosur, Bangalore",
    description:
      "Graphics Designer · Product Designer · UI/UX Pre final-year Engineering Student,Skilled in designing user-friendly interfaces, crafting product experiences, and creating visual content that aligns with modern design standards.",
    image: "https://i.ibb.co/rGt5tCRB/farhan.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/farhan-khan-00817a296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
         icon: "🖼️",
         label: "Instagram",
         link: "https://www.instagram.com/dot.khan_?igsh=MXV6M3NndzZ5NzA0cg==",
      },
    ],
  },
   {
    id: 5,
    name: "Adithya",
    role: "Graphics designer ",
    location: "Hosur, Bangalore",
    description:
      "A self-taught web and graphic designer whorns wild ideas and emotions into clean,aesthetic visuals. Whether it’s UI/UX orposters—I focus on visuals that feel alive. I love experimenting with color, balance, and vibes..",
    image: "https://i.ibb.co/8nX83y4r/Whats-App-Image-2025-06-26-at-21-51-25-33e474bf.jpg",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/adityapartha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    id: 6,
    name: "ANEESH SHETTY M ",
    role: "Developer & sales",
    location: "Hosur, Bangalore",
    description:
      "I'm a passionate freelancer with strong expertise in Java, full-stack development, and modern web technologies,I build scalable and responsive web applications while ensuring clean code and seamless user experiences,Alongside development, I have hands-on experience with data analytics tools like Excel, SQL, Tableau, and Power BI,I blend my technical and analytical skills to deliver smart, user-focused solutions for real-world problems,Always eager to grow, I keep up with emerging tech to stay sharp and contribute to impactful projects.",
    image: "https://i.ibb.co/pBbN8NHw/Whats-App-Image-2025-06-26-at-20-02-20-2ac7f263.jpg",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/aneeshshettym",
      },
    ],
  },
   {
    id: 7,
    name: "NARESH S",
    role: "GRAPHIC DESIGNER ",
    location: "Hosur, Bangalore",
    description:
      "I’m Naresh S., a passionate Full Stack Developer and Creative Technologist who loves blending creativity with technology. With a strong eye for design and a solid technical foundation, I enjoy turning ideas into smooth, interactive, and meaningful digital experiences. Constantly curious and always learning, I believe in solving problems with thoughtful design, clean code, and a touch of innovation. Whether it's front-end visuals or back-end logic, I approach every project with dedication, creativity, and a desire to create something valuable and engaging.",
    image: "https://i.ibb.co/PZ5bzKLx/Naresh.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/nareshs241205",
      },
      {
        icon: "🔗",
        label: "Portfolio",
        link: "https://nareshs.netlify.app/",
      },
    ],
  },
  {
    id: 8,
    name: "Naresh MKS",
    role: "Fullstack Developer ",
    location: "Hosur, Bangalore",
    description:
      "I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications. My skill set includes front-end technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Flexbox, as well as back-end development using Node.js and SQL. I’m also proficient in React.js for building modern user interfaces and have a solid foundation in Python for scripting and backend logic. I actively use Git for version control and collaboration. With a keen interest in AI, I’m exploring its basics to integrate smarter features into my projects. I enjoy crafting efficient, scalable solutions and continuously learning to stay updated in this fast-evolving tech landscape.",
    image: "https://i.ibb.co/RTwb1b6L/naresh-mks.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/nareshmks10062006",
      },
    ],
  },
  {
    id: 9,
    name: "MOHAN KUMAR A ",
    role: "Web development & lead's ",
    location: "Hosur, Bangalore",
    description:
      "I'm a computer science student specializing in web development. I'm currently learning front-end technologies like HTML, CSS, and JavaScript, and I'm eager to expand into back-end development soon. I'm passionate about building clean, user-friendly websites and continuously improving my skills.",
    image: "https://i.ibb.co/mmLwdj2/mohan.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/mohan-kumar-sa-a26769299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: "❌",
        label: "X (Twitter)",
        link: "https://x.com/moahn1197141?t=AnL1ztDSe-E8fA2KBL1XCA&s=09",
     },
      // You can uncomment and extend more social links here
      // {
      //   icon: "🖼️",
      //   label: "Instagram",
      //   link: "https://instagram.com/yourprofile",
      // },
    ],
  },
  {
    id: 10,
    name: "MANOJKUMAR M ",
    role: "Web Developer & Sales",
    location: "Hosur, Bangalore",
    description:
      "I'm Manojkumar M,a B.Tech student specializing in Artificial Intelligence and Machine Learning.I have a solid understanding of frontend web design and intermediate-level skills in programming languages such as C, Java, Python, HTML, and CSS.Learning Interests:I’m passionate about expanding my knowledge in Machine Learning and Data Structures, and I’m always eager to learn and explore new concepts in the field of AI.",
    image: "https://i.ibb.co/DHZbXyZ5/Whats-App-Image-2025-06-26-at-20-02-19-6ea95593.jpg",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/manoj-kumar-5a897a303/",
      },
      {
        icon: "🔗",
        label: "Portfolio",
        link: "https://mano-18-portfolio.netlify.app/",
      },
      {
         icon: "🖼️",
         label: "Instagram",
         link: "https://www.instagram.com/bt_mxno_18/",
      },
    ],
  },
  {
    id: 11,
    name: "LAKSHMINARAYANAN E ",
    role: "Web development & lead's ",
    location: "Hosur, Bangalore",
    description:
      "I'm a computer science student specializing in web development. I'm currently learning front-end technologies like HTML, CSS, and JavaScript, and I'm eager to expand into back-end development soon. I'm passionate about building clean, user-friendly websites and continuously improving my skills.",
    image: "https://i.ibb.co/8GmtmpN/lakshmi-narayan.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/lakshminarayanan-e-ba16692a3",
      },
      // You can uncomment and extend more social links here
      // {
      //   icon: "🖼️",
      //   label: "Instagram",
      //   link: "https://instagram.com/yourprofile",
      // },
    ],
  },
  {
    id: 12,
    name: "SABARI NATHAN",
    role: "Web Developer",
    location: "Ranipet",
    description:
      "I'm a Web Developer and 2nd-year AI & Data Science student,I love building responsive websites with clean, modern designs,Creating smooth, user-friendly experiences is my focus,I have a strong interest in UI Design and front-end development,Always eager to learn new tools and technologies,Passionate about turning ideas into impactful digital solutions.",
    image: "https://i.ibb.co/PvwJYtSS/sabari.png",
    socials: [
      {
        icon: "📧",
        label: "team@assuvar.com",
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
        link: "https://www.linkedin.com/in/sabari-nathan-251720321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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

const FullscreenOverlay = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-8 overflow-y-auto">
      <button
        onClick={onClose}
        className="text-sm mb-8 flex items-center gap-2 text-gray-700 hover:text-black"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="text-gray-500">
            {project.role} <span className="mx-2">|</span> {project.location}
          </p>
          <p className="text-gray-700 text-justify leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-6 pt-4">
            {project.socials.map((s: any, index: number) => (
              <a
                key={index}
                href={s.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-purple-600"
              >
                {s.icon === "linkedin" ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    width="16"
                    alt="LinkedIn"
                  />
                ) : (
                  <span className="text-xl">{s.icon}</span>
                )}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-lg"
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
            A showcase of my work in web and app development, design, and product innovation.
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
