import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Royal eSports",
      position: "Esports Observer",
      period: "Jan 2022 - Dec 2022",
      description: [
        "Actively contributed to video game championship productions.",
        "Collaborated with teams and tournament organizers to ensure smooth coordination during live events.",
      ],
    },

    {
      company: "Ipsos",
      position: "Junior Programmer/Scriptwriter",
      period: "July 2021 - Oct 2021",
      description: [
        " Scripted surveys using Dimensions.",
        "Conducted quality testing using SQL.",
        "Communicated with clients to assess their requirements.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <svg
            className="w-8 h-8 text-emerald-400 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
            />
          </svg>

          <h2 className="text-3xl font-bold text-white">
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-emerald-400/20 pl-8 py-4 hover:border-emerald-400 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.position}
              </h3>
              <p className="text-emerald-400 font-medium">{exp.company}</p>
              <p className="text-zinc-500 text-sm mb-2">{exp.period}</p>
              <ul className="text-zinc-400 list-disc">
                {exp.description.map((desc, i) => (
                  <li key={i} className="mb-1">
                    {desc}
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

export default Experience;
