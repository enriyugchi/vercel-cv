import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import References from "@/components/References";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100 overflow-hidden font-sans selection:bg-emerald-500/30">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <References />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-900 mt-20">
        <p>© {new Date().getFullYear()} Enrique Yugcha. Todos los derechos reservados.</p>
        <p className="mt-2">Diseñado y desarrollado con Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
