import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Landing() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative bg-[#0b0b0f] text-white overflow-x-hidden transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 z-[9999] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Animated Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]"></div>

      {/* Soft Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* Navigation */}
        <Navbar />

        {/* Hero */}
        <section id="hero" className="relative">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="relative">
          <About />
        </section>

        {/* Features */}
        <section id="features" className="relative">
          <Features />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative">
          <HowItWorks />
        </section>

        {/* CTA */}
        <section id="cta" className="relative">
          <CTA />
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}