import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaChartLine,
  FaMicrophoneAlt,
  FaRoad,
  FaQuestionCircle,
  FaLayerGroup
} from "react-icons/fa";

export default function Services() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const services = [
    {
      icon: <FaQuestionCircle size={22} />,
      title: "AI Doubt Resolution",
      desc: "Instant explanations powered by intelligent reasoning engine designed to simplify complex concepts."
    },
    {
      icon: <FaBrain size={22} />,
      title: "Smart Quiz Generation",
      desc: "Generate personalized quizzes based on weak areas and adaptive difficulty control."
    },
    {
      icon: <FaRoad size={22} />,
      title: "Personal Study Roadmap",
      desc: "AI-generated learning paths customized to your academic goals and timeline."
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Performance Analytics",
      desc: "Track growth with advanced dashboards and predictive performance insights."
    },
    {
      icon: <FaMicrophoneAlt size={22} />,
      title: "Voice AI Teaching",
      desc: "Interactive voice-based learning with conversational AI assistance."
    },
    {
      icon: <FaLayerGroup size={22} />,
      title: "Real-Time Concept Clarity",
      desc: "Break down complex topics into simplified step-by-step modules."
    }
  ];

  return (
    <section className="relative min-h-screen py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 px-6 py-2 rounded-full border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition duration-300"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Premium AI Services
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our AI ecosystem is designed to revolutionize the learning experience
            with intelligent automation, adaptive systems, and real-time assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
              hover:-translate-y-4 hover:border-orange-500/50
              hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]
              transition-all duration-500"
            >

              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 
              rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20
              border border-white/10
              text-orange-400
              group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]
              transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Learning?
          </h3>

          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 rounded-full font-semibold text-black
            bg-gradient-to-r from-orange-500 to-orange-600
            hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,1)]
            transition-all duration-300"
          >
            Start Now
          </button>
        </div>

      </div>
    </section>
  );
}