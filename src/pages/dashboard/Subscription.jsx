import { motion } from "framer-motion";

export default function Subscription() {
  const plans = [
    {
      name: "Basic",
      price: "₹199",
      desc: "For beginners",
      features: [
        "Access to basic courses",
        "Limited AI doubt solving",
        "Daily quizzes",
        "Basic progress tracking"
      ],
      highlight: false
    },
    {
      name: "Pro",
      price: "₹499",
      desc: "Most Popular",
      features: [
        "All courses access",
        "Unlimited AI doubt solving",
        "Mock tests + PYQs",
        "Advanced analytics dashboard",
        "Study planner + reminders"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "₹999",
      desc: "For serious learners",
      features: [
        "Everything in Pro",
        "1-on-1 AI mentoring",
        "Live AI classes",
        "Priority support",
        "Custom learning roadmap"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-20">

      {/* 🔥 TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Choose Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Plan
          </span>
        </h1>
        <p className="text-gray-400 mt-4">
          Upgrade your learning with Cortex AI Class PRO
        </p>
      </div>

      {/* 💎 CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`relative p-8 rounded-2xl border backdrop-blur-xl transition duration-300 
              ${plan.highlight 
                ? "bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-cyan-400 shadow-lg shadow-cyan-500/40"
                : "bg-white/5 border-white/10 hover:shadow-cyan-500/20"
              }`}
          >

            {/* 🌟 MOST POPULAR */}
            {plan.highlight && (
              <div className="absolute top-4 right-4 text-xs px-3 py-1 bg-cyan-400 text-black rounded-full font-semibold">
                MOST POPULAR
              </div>
            )}

            {/* PLAN NAME */}
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{plan.desc}</p>

            {/* PRICE */}
            <div className="mt-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400 text-sm"> /month</span>
            </div>

            {/* FEATURES */}
            <ul className="mt-6 space-y-3 text-gray-300 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              className={`mt-8 w-full py-3 rounded-lg font-medium transition duration-300
                ${plan.highlight
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-cyan-500/40 hover:scale-105"
                  : "border border-white/20 hover:bg-white/10"
                }`}
            >
              Get Started
            </button>

          </motion.div>
        ))}

      </div>

    </div>
  );
}