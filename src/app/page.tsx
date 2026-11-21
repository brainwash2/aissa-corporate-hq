import ConstellationBackground from '@/components/ConstellationBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (

    <div className="min-h-screen bg-[#020617] relative selection:bg-blue-500 selection:text-white">


      <div className="fixed inset-0 z-0">
        <ConstellationBackground />
      </div>

      <Navbar />
       
       <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}