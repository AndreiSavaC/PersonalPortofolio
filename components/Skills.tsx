import {
  faBrain,
  faCode,
  faCodeBranch,
  faDatabase,
  faDesktop,
  faServer,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend Development",
      icon: (
        <FontAwesomeIcon
          icon={faServer}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["Python", "Flask", "REST API", "Kotlin", "Ktor"],
    },
    {
      title: "Version Control",
      icon: (
        <FontAwesomeIcon
          icon={faCodeBranch}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["Git", "GitHub"],
    },
    {
      title: "Database",
      icon: (
        <FontAwesomeIcon
          icon={faDatabase}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "AI/ML",
      icon: (
        <FontAwesomeIcon
          icon={faBrain}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["Scikit-learn"],
    },
    {
      title: "DevOps",
      icon: (
        <FontAwesomeIcon
          icon={faTerminal}
          className="text-emerald-400 mr-3 h-5 w-auto"
        />
      ),
      skills: ["Docker"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12 ">
          <FontAwesomeIcon
            icon={faCode}
            className="mr-3 text-emerald-400 h-8 w-auto"
          />
          <h2 className="text-3xl font-bold text-white">SKILLS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-lg border border-zinc-800 p-6 hover:border-emerald-400/50 duration-500 transition-all"
            >
              <div className="flex items-center mb-6">
                <div>{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
