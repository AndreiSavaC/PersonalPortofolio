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
    <section id="education" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <svg
            width="30"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-8 h-8 text-emerald-400 mr-3"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="30"
              d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-white">EDUCATION</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 p-6 rounded border border-zinc-800 hover:border-emerald-400/50 transition-colors"
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
