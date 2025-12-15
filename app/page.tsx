import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
