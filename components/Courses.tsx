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
              d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
            />
          </svg>

          <h2 className="text-3xl font-bold text-white">
            COURSES AND CERTIFICATION
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-black/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 transition-colors"
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
