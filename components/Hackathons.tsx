import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hackathons = () => {
  const hackathons = [
    {
      name: "BEST Hackathon",
      position: "1st place",
      project: "Adonis Health",
      description:
        "An AI-powered platform that enhances healthcare workflows and integrates medical devices seamlessly.",
    },
    {
      name: "EDU TECH 4th Edition",
      position: "2nd place",
      project: "HeckEd",
      description:
        "A cybersecurity training platform with AI-assisted learning, gamification, and automated security challenges.",
    },
  ];

  return (
    <section id="hackathons" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon
            icon={faTrophy}
            className="mr-3 text-emerald-400 h-8 w-auto"
          />
          <h2 className="text-3xl font-bold text-white">HACKATHONS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 p-6 rounded border border-zinc-800 hover:border-emerald-400/50 duration-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {hackathon.name}
                </h3>
                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm">
                  {hackathon.position}
                </span>
              </div>
              <h4 className="text-lg font-medium text-emerald-400 mb-2">
                {hackathon.project}
              </h4>
              <p className="text-zinc-400">{hackathon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
