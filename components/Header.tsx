"use client";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("savacristianandrei@yahoo.com");
    setTooltipVisible(true);

    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-40 border-b border-zinc-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:items-center md:space-x-4 text-lg`}
          >
            <a
              href="#about"
              className="text-zinc-400 hover:text-white transition-colors md:hidden lg:block"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Education
            </a>

            <a
              href="#hackathons"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Hackathons
            </a>
            <a
              href="#courses"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Courses
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() =>
                  window.open("https://github.com/AndreiSavaC", "_blank")
                }
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-7 w-auto" />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/savaandrei/",
                    "_blank"
                  )
                }
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-7 w-auto" />
              </button>
            </div>
            <div className="relative">
              <button
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={copyEmail}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-7 w-auto" />
              </button>

              {tooltipVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm px-2 py-1 rounded-md shadow-lg">
                  Copied!
                </div>
              )}
            </div>
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} size="2xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="xl" className="ml-4" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
