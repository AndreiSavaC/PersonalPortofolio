"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  faExpand,
  faArrowUpRightFromSquare,
  faDiagramProject,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  screenshots: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "inSight",
      shortDescription:
        "A platform designed to facilitate communication between students and professors by providing constructive feedback on courses.",
      fullDescription: [
        "inSight is a project developed in collaboration with a colleague to help students provide feedback on their courses in a simple and effective way. Students can rate their professors during lectures through a short, intuitive form. Once the feedback is collected, they can access the platform to view detailed statistics and insights about their evaluations.",
        "Additionally, the platform includes an admin dashboard where administrators can manage course data and oversee the feedback system. The project aims to improve the learning experience by encouraging transparency and constructive feedback between students and faculty.",
      ],

      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Docker",
        "Nginx",
      ],
      liveUrl: "https://insightbv.ro/",
      githubUrl: "https://github.com/alexandruvstelea/insight",
      image: "/images/insight/insight0.png",
      screenshots: [
        "/images/insight/insight1.png",
        "/images/insight/insight2.png",
        "/images/insight/insight3.png",
        "/images/insight/insight4.png",
        "/images/insight/insight5mobile.png",
      ],
    },
    {
      title: "Medly",
      shortDescription:
        "A mobile application that enhances communication between patients and family doctors, integrating AI-powered features for a personalized healthcare experience.",
      fullDescription: [
        "Medly is a mobile application designed to simplify patient-doctor interactions through digital innovation. It streamlines appointment scheduling, enables AI-assisted symptom assessments, and provides a centralized dashboard for healthcare professionals.",
        "Patients can easily book appointments, consult an AI-powered assistant for preliminary symptom analysis, and securely manage their medical records. Meanwhile, doctors benefit from an intuitive dashboard that consolidates appointments and patient insights.",
        "Built with a scalable, modular architecture, Medly ensures secure authentication via Keycloak and leverages AI models for intelligent chat and automated report generation. The application is containerized using Docker for seamless deployment.",
      ],
      technologies: [
        "Kotlin",
        "Android Studio",
        "Ktor",
        "Flask",
        "PostgreSQL",
        "Keycloak",
        "GROQ",
        "Docker",
      ],
      liveUrl: "/images/insight/insight2.png",
      githubUrl: "https://github.com/AndreiSavaC/Medly",
      image: "/images/insight/insight2.png",
      screenshots: [],
    },
    {
      title: "Blog Management System",
      shortDescription:
        "A Java EE application for managing blog posts, categories, tags, and user accounts, built to master the Payara server and Java EE technologies.",
      fullDescription: [
        "The Blog Management System is a robust Java EE application designed to handle user accounts, blog posts, categories, and tags efficiently. It implements role-based access control (ADMIN and USER) and ensures secure authentication and authorization mechanisms.",
        "The application leverages EJBs, JMS, JSF, and JPA to provide a scalable and maintainable architecture. It includes scheduled tasks for automatic updates, email notifications via JMS, and validation mechanisms to ensure data integrity. Logging and security are integral parts of the system.",
        "A user-friendly UI built with JSF and Bootstrap ensures smooth interaction with the platform. The project was primarily developed as an educational initiative to gain experience with Payara Server, Java EE components, messaging systems, and best software development practices.",
      ],
      technologies: ["Java EE", "Payara Server", "EJB", "JPA", "JMS", "JSF"],
      liveUrl: "",
      githubUrl: "https://github.com/AndreiSavaC/BlogManagementSystem",
      image: "/images/blogPayara/blogPayara0.png",
      screenshots: ["/images/blogPayara/blogPayara1.png"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  function openModal(project: Project): void {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  }
  function closeModal(): void {
    setSelectedProject(null);
  }
  function prevScreenshot(): void {
    setCurrentScreenshot((prev) =>
      selectedProject
        ? prev === 0
          ? selectedProject.screenshots.length - 1
          : prev - 1
        : 0
    );
  }
  function nextScreenshot(): void {
    setCurrentScreenshot((prev) =>
      selectedProject
        ? prev === selectedProject.screenshots.length - 1
          ? 0
          : prev + 1
        : 0
    );
  }

  function openFullscreen(image: string) {
    setFullscreenImage(image);
  }

  function closeFullscreen() {
    setFullscreenImage(null);
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon
            icon={faDiagramProject}
            className="mr-3 text-emerald-400 h-8 w-auto"
          />
          <h2 className="text-3xl font-bold text-white">PROJECTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-emerald-400/50 duration-500 transition-colors h-full flex flex-col"
            >
              <div className="aspect-video relative">
                <Image src={project.image} alt={project.title} fill />
              </div>
              <div className="p-6 text-white flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.shortDescription}</p>
                <button
                  className="mt-auto w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 transition-color duration-300 rounded text-white"
                  onClick={() => openModal(project)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeModal}
        >
          <div
            className="modal-content bg-zinc-900 p-5 overflow-y-auto rounded-lg max-w-3xl w-full min-h-[85vh] max-h-[90vh] border border-zinc-800 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="transition-colors duration-500 hover:text-emerald-400"
              />
            </button>

            <h3 className="text-3xl text-white font-bold mb-4">
              {selectedProject.title}
            </h3>
            <div className="relative mb-4">
              <div className="flex gap-4 my-3">
                <button
                  onClick={() =>
                    selectedProject.liveUrl &&
                    window.open(selectedProject.liveUrl, "_blank")
                  }
                  disabled={!selectedProject.liveUrl}
                  className={`flex-1 flex items-center justify-center gap-2 border ${
                    selectedProject.liveUrl
                      ? "border-zinc-700 hover:border-emerald-400"
                      : "border-zinc-700 opacity-50 cursor-not-allowed"
                  } duration-500 bg-transparent text-white p-2 sm:px-4 rounded-md transition-colors`}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  See Live
                </button>

                <button
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                  className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-emerald-400 duration-500 bg-transparent text-white p-2 sm:px-4 rounded-md transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Source Code
                </button>
              </div>
              <div className="overflow-y-auto max-h-[345px] w-full aspect-auto rounded-lg mt-6">
                <Image
                  src={selectedProject.screenshots[currentScreenshot]}
                  alt={`Screenshot ${currentScreenshot + 1}`}
                  width={
                    selectedProject.screenshots[currentScreenshot].includes(
                      "mobile"
                    )
                      ? 800
                      : 1920
                  }
                  height={
                    selectedProject.screenshots[currentScreenshot].includes(
                      "mobile"
                    )
                      ? 600
                      : 1080
                  }
                  className={`mx-auto ${
                    selectedProject.screenshots[currentScreenshot].includes(
                      "mobile"
                    )
                      ? "object-contain max-h-[80vh]  "
                      : "w-full h-auto"
                  }`}
                />
                <button
                  className="absolute bottom-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-75 p-1 rounded-md  transition-all z-10"
                  onClick={() =>
                    openFullscreen(
                      selectedProject.screenshots[currentScreenshot]
                    )
                  }
                >
                  <FontAwesomeIcon icon={faExpand} size="xl" />
                </button>
              </div>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 p-1 rounded-full transition-all z-10"
                onClick={prevScreenshot}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-6 h-6"
                  size="xl"
                />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 p-1 rounded-full  transition-all z-10"
                onClick={nextScreenshot}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-6 h-6"
                  size="xl"
                />
              </button>
            </div>
            <div className="text-zinc-400 mb-4 indent-4">
              {selectedProject.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, technologyIndex) => (
                <span
                  key={technologyIndex}
                  className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
              {fullscreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                  <button
                    className="absolute top-4 right-4 text-white text-3xl"
                    onClick={closeFullscreen}
                  >
                    ✖
                  </button>
                  <Image
                    src={fullscreenImage}
                    alt="Fullscreen"
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
