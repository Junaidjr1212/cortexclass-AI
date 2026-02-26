import { useEffect, useState } from "react";

export default function Features() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const features = [
    {
      title: "24/7 Smart Doubt Solver",
      desc: "Ask academic questions anytime and get instant AI explanations.",
      points: [
        "Instant response system",
        "Step-by-step solutions",
        "All subjects supported",
      ],
      icon: "💡",
    },
    {
      title: "AI Quiz Generator",
      desc: "Generate smart quizzes based on weak topics.",
      points: [
        "Auto difficulty adjustment",
        "Topic-wise practice",
        "Performance-based questions",
      ],
      icon: "🧠",
    },
    {
      title: "Personalized Study Planner",
      desc: "AI tracks performance and creates custom plans.",
      points: [
        "Custom daily schedule",
        "Smart reminders",
        "Weakness targeting",
      ],
      icon: "📅",
    },
    {
      title: "Voice Based AI Teaching",
      desc: "Learn with interactive AI explanations.",
      points: [
        "Natural voice interaction",
        "Conversational learning",
        "Real-time feedback",
      ],
      icon: "🎙️",
    },
    {
      title: "Progress Analytics Dashboard",
      desc: "Track improvement with intelligent analytics.",
      points: [
        "Visual performance charts",
        "Growth insights",
        "Accuracy tracking",
      ],
      icon: "📊",
    },
    {
      title: "Real-Time Concept Clarification",
      desc: "Understand complex topics with simplified breakdown.",
      points: [
        "Simplified explanations",
        "Examples included",
        "Concept reinforcement",
      ],
      icon: "⚡",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#0e0e14]">

      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          Advanced Learning Features
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20">
          Experience next-generation AI-powered tools designed to simplify learning,
          boost productivity, and accelerate academic success.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 
              hover:border-orange-500/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(255,115,0,0.2)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-2xl rounded-xl 
              bg-gradient-to-br from-orange-500/20 to-purple-500/20 
              border border-white/10 mb-6 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-400 transition duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {item.desc}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-orange-500">✓</span> {point}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <div className="text-sm font-medium text-orange-500 cursor-pointer group-hover:translate-x-2 transition duration-300">
                Learn More →
              </div>

              {/* Glow Effect Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none 
              bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10 blur-xl"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}