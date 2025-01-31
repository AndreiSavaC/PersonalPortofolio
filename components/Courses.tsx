import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "Generația Tech (2023)",
      organization: "Digital Nation",
      description:
        "Participated in JavaScript courses and workshops to further develop my knowledge. ",
      certificate: null,
    },
    {
      name: "Google Digital Workshop (2023)",
      organization: "Digital Stack",
      description:
        "Participated in Python fundamentals courses for skill enhancement.",
      certificate:
        "https://learn.digitalstack.ro/mod/customcert/verify_certificate.php?code=uNg2004y1t",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="mr-3 text-emerald-400 h-8 w-auto"
          />

          <h2 className="text-3xl font-bold text-white">
            COURSES AND CERTIFICATION
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-black/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 duration-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {course.name}
              </h3>
              <p className="text-emerald-400 font-medium mb-1">
                {course.organization}
              </p>
              <p className="text-zinc-500 text-sm mb-4">{course.description}</p>
              {course.certificate ? (
                <a
                  href={course.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center"
                >
                  View Certificate →
                </a>
              ) : (
                <span className="text-zinc-500 font-medium inline-flex items-center cursor-not-allowed">
                  No Certificate Available
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
