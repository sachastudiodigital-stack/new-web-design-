import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <About />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
