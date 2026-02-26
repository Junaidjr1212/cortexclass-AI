import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function Landing() {
  const { bgColor } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative ${bgColor} text-white overflow-hidden transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 z-[9999] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Effects */}
      <div className="absolute top-0 left-[-150px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-150px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Soft Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="features"><Features /></section>
          <section id="how-it-works"><HowItWorks /></section>
          <section id="cta"><CTA /></section>
        </main>

        <Footer />
      </div>
    </div>
  );
}