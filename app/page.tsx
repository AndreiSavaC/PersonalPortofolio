import Courses from "@/components/Courses";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Hackathons />
          <Courses />
        </main>
        <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
          <div className="container mx-auto px-6 text-center text-zinc-400">
            <p>
              © {new Date().getFullYear()} Sava Cristian Andrei. Toate
              drepturile rezervate.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
