import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturesPage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const features = [
    {
      title: "24/7 AI Support",
      desc: "Get instant academic support anytime without delays."
    },
    {
      title: "Adaptive Intelligence",
      desc: "System learns from your performance and adjusts difficulty dynamically."
    },
    {
      title: "Smart Performance Tracking",
      desc: "Visual analytics to measure progress and improvement trends."
    },
    {
      title: "Interactive Learning",
      desc: "Engage with AI through conversational voice-based sessions."
    }
  ];

  return (
    <section className="relative min-h-screen py-28 px-6 overflow-hidden">

      <div className="absolute -top-40 right-1/3 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 px-6 py-2 rounded-full border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition duration-300"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Powerful AI Features
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Built with advanced AI systems to provide smarter, faster and more
            efficient academic growth.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid md:grid-cols-2 gap-12">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
              hover:-translate-y-4 hover:border-orange-500/50
              hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]
              transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 rounded-full font-semibold text-black
            bg-gradient-to-r from-orange-500 to-orange-600
            hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,1)]
            transition-all duration-300"
          >
            Explore AI Now
          </button>
        </div>

      </div>
    </section>
  );
}