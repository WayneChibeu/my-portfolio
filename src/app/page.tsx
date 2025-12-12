import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-6 text-center text-slate text-sm font-mono hover:text-teal transition-colors cursor-default">
        <p>Designed & Built by Wayne Chibeu</p>
      </footer>
    </>
  );
}
