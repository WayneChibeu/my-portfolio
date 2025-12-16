import Navbar from "@/components/Navbar";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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

      <footer className="py-8 text-center text-slate text-sm font-mono cursor-default">
        {/* Mobile Social Links (Visible only on small screens if Sidebar is hidden) - but we'll show them always in footer for completeness */}
        <div className="flex md:hidden justify-center gap-6 mb-4">
          <a href="https://github.com/WayneChibeu" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/wayne-chibeu-482451278/" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Linkedin size={20} /></a>
          <a href="https://x.com/theamateur_tax" target="_blank" className="text-slate-light hover:text-teal transition-colors"><Twitter size={20} /></a>
          <a href="mailto:wchibeu4@gmail.com" className="text-slate-light hover:text-teal transition-colors"><Mail size={20} /></a>
        </div>
        <p className="hover:text-teal transition-colors">Designed & Built by Wayne Chibeu</p>
      </footer>
    </>
  );
}
