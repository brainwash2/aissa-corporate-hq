import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090b0a]">
      <div aria-hidden="true" className="grid-overlay pointer-events-none fixed inset-0 z-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 z-0 h-[36rem] w-[36rem] rounded-full bg-[#d7f36b]/[0.055] blur-[130px]"
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Expertise />
        <About />
        <Contact />
      </main>
    </div>
  );
}
