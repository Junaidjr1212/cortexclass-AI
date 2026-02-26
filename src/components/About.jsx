import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="relative py-36 px-6 overflow-hidden">

      {/* Animated Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80 blur-sm"></div>

      {/* Deep Background Glow Layers */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-500/10 blur-[180px] rounded-full animate-pulse"></div>

      <div
        className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 text-sm rounded-full 
        border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-purple-500/10 
        text-orange-400 backdrop-blur-xl shadow-[0_0_25px_rgba(249,115,22,0.25)]">

          <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></span>
          AI-Powered Learning Ecosystem
        </div>

        {/* Ultra Premium Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-10 tracking-tight">

          <span className="bg-gradient-to-r from-white via-orange-400 to-purple-500 
          bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradientMove_6s_linear_infinite]">
            Intelligent Learning,
          </span>

          <br />

          <span className="relative inline-block text-white mt-3">

            Powered by AI

            {/* Underline Glow */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-[3px] 
            bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-sm"></span>

          </span>

        </h2>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-20">
          CortexClass AI is an advanced AI-powered learning ecosystem designed to
          simplify education. From instant doubt resolution to personalized study
          roadmaps and intelligent quiz generation, our system adapts dynamically
          to every student’s learning pattern and accelerates academic growth
          with precision.
        </p>

        {/* Premium Stats Row */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 
          border border-white/10 transition-all duration-700 
          hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(249,115,22,0.25)]">

            <div className="text-5xl font-extrabold bg-gradient-to-r 
            from-orange-400 to-red-500 bg-clip-text text-transparent mb-3">
              24/7
            </div>

            <p className="text-gray-400 text-base tracking-wide">
              Instant AI Assistance
            </p>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10 
            blur-xl transition duration-700 pointer-events-none"></div>

          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 
          border border-white/10 transition-all duration-700 
          hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(168,85,247,0.25)]">

            <div className="text-5xl font-extrabold bg-gradient-to-r 
            from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
              Smart
            </div>

            <p className="text-gray-400 text-base tracking-wide">
              Adaptive Learning System
            </p>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-purple-500/10 via-transparent to-orange-500/10 
            blur-xl transition duration-700 pointer-events-none"></div>

          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 
          border border-white/10 transition-all duration-700 
          hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(249,115,22,0.25)]">

            <div className="text-5xl font-extrabold bg-gradient-to-r 
            from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
              AI
            </div>

            <p className="text-gray-400 text-base tracking-wide">
              Real-Time Concept Clarity
            </p>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10 
            blur-xl transition duration-700 pointer-events-none"></div>

          </div>

        </div>

      </div>
    </section>
  );
}