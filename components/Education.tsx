import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Education = () => {
  const education = [
    {
      institution: "Transilvania University of Brașov",
      degree: "MSc degree in Electronic and Communication Integrated Systems",
      period: "10/2023 - Present",
      description: [
        "Advanced elements in developing web applications",
        "Functional programming",
        "Advanced elements of computer graphics",
        "Distributed programming techniques",
        "Logic programming",
        "Mobile device programming",
        ".NET platform",
        "Architecture of enterprise software systems",
        "Advanced elements in software systems engineering",
      ],
    },
    {
      institution: "Transilvania University of Brașov",
      degree: "Bachelor's degree in Computer Engineering",
      period: "10/2019 - 07/2023",
      description: [
        "Algorithms and programming languages",
        "Logical and functional programming",
        "Databases",
        "Analog electronics",
        "Digital electronics",
        "Communication fundamentals",
        "Microprocessors",
        "Embedded systems",
        "Artificial intelligence",
        "VLSI design",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="mr-3 text-emerald-400 h-8 w-auto"
          />
          <h2 className="text-3xl font-bold text-white">EDUCATION</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 p-6 rounded border duration-500 border-zinc-800 hover:border-emerald-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-emerald-400 font-medium">{edu.institution}</p>
              <p className="text-zinc-500 text-sm mb-2">{edu.period}</p>
              <ul className="text-zinc-400 p-2 ">
                <p>A few of the studied disciplines:</p>
                {edu.description.map((subject, i) => (
                  <li key={i} className="w-fit inline-block ">
                    &#8226; {subject}&nbsp;
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
