import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SmartSystems from "./components/SmartSystems";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f7f7f4] text-zinc-950">
      <Navbar />

      <Hero />

      <About />

      <SmartSystems />


      <Contact />

      <Footer />
    </main>
  );
}
