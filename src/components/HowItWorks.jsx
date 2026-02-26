import { useState } from "react";

export default function HowItWorks() {
  const [active, setActive] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Create Profile",
      desc: "Set up your personalized AI learning dashboard in seconds."
    },
    {
      number: "02",
      title: "Ask & Generate",
      desc: "Solve doubts and generate smart quizzes instantly with AI."
    },
    {
      number: "03",
      title: "Track Growth",
      desc: "Monitor performance and improve with intelligent analytics."
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience seamless AI-powered learning in three simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`relative p-10 rounded-3xl border backdrop-blur-xl transition-all duration-500 cursor-pointer
              ${
                active === index
                  ? "border-orange-500/60 bg-white/5 shadow-2xl shadow-orange-500/20 -translate-y-3"
                  : "border-white/10 bg-white/3 hover:-translate-y-2"
              }`}
            >
              {/* Step Number */}
              <div className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}