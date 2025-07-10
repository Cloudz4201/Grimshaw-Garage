
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CarBrands from "@/components/CarBrands";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <CarBrands />
      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <Contact />
      <FindUs />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
