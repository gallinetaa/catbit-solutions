import CircuitBackground from "@/components/CircuitBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Store from "@/components/Store";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      {/* Animated circuit background */}
      <CircuitBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Team Section */}
        <Team />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />

        {/* Store Section */}
        <Store />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
