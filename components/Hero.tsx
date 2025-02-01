import React from "react";

const Hero = () => {
  return (
    <section
      id="about"
      className="pt-32 pb-20 bg-gradient-to-b from-black to-zinc-900"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hello, I&apos;m
              <span className="text-emerald-400">&nbsp;Andrei Sava</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Full Stack Developer passionate about technology and innovation
            </p>
            <div className="flex space-x-4">
              <a
                href="/CV_Sava_Andrei.pdf"
                download="CV_Sava_Andrei.pdf"
                className="px-6 py-3 bg-emerald-500 text-black font-medium rounded hover:bg-emerald-400 transition-colors"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              >
                See my projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=500&h=500"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto ring-2 ring-emerald-400/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
