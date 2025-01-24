import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Platformă completă de e-commerce cu React și Node.js",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      link: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "Aplicație de management al taskurilor cu funcționalități în timp real",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      title: "AI Image Generator",
      description: "Generator de imagini folosind inteligență artificială",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      link: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <svg
            className="w-9 h-9 text-emerald-400 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="27"
            fill="none"
            viewBox="0 0 576 512"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="30"
              d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-white">PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-emerald-400/50 transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center"
                >
                  Vezi proiectul →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
