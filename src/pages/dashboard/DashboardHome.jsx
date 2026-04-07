import { motion } from "framer-motion";
import {
  FaClock,
  FaCheckCircle,
  FaBullseye,
  FaBrain
} from "react-icons/fa";

import WeeklyChart from "../../components/dashboard/charts/WeeklyChart";
import SubjectChart from "../../components/dashboard/charts/SubjectChart";
import TimeDistribution from "../../components/dashboard/charts/TimeDistribution";
import AnimatedCounter from "../../components/dashboard/AnimatedCounter";

export default function DashboardHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen p-6 space-y-8 overflow-y-auto"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          C
        </div>

        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Welcome back! Here's your learning overview.
          </p>
        </div>
      </motion.div>

      {/* ===== STAT CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <FaClock className="text-orange-500 text-2xl" />,
            value: 142,
            suffix: " hrs",
            label: "Study Hours",
            border: "border-orange-500/30",
            growth: "+12.5%"
          },
          {
            icon: <FaCheckCircle className="text-purple-500 text-2xl" />,
            value: 87,
            suffix: "",
            label: "Quizzes Done",
            border: "border-purple-500/30",
            growth: "+8.3%"
          },
          {
            icon: <FaBullseye className="text-green-500 text-2xl" />,
            value: 94.2,
            suffix: "%",
            label: "Accuracy",
            border: "border-green-500/30",
            growth: "+3.1%"
          },
          {
            icon: <FaBrain className="text-blue-500 text-2xl" />,
            value: 324,
            suffix: "",
            label: "AI Questions",
            border: "border-blue-500/30",
            growth: "+24.7%"
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0 0 40px rgba(249,115,22,0.4)"
            }}
            className={`bg-[#14161c] p-6 rounded-xl border ${card.border} transition-all duration-300 cursor-pointer`}
          >
            <div className="flex justify-between items-center">
              {card.icon}
              <span className="text-green-400 text-sm">
                {card.growth}
              </span>
            </div>

            <h2 className="text-3xl font-bold mt-4">
              <AnimatedCounter value={card.value} />
              {card.suffix}
            </h2>

            <p className="text-gray-400">{card.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== CHART SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Change 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.03,
            y: -6,
            boxShadow: "0 0 40px rgba(249,115,22,0.25)"
          }}
          className="col-span-2 bg-[#14161c] p-6 rounded-xl border border-white/10 transition-all duration-300"
        >
          <WeeklyChart />
        </motion.div>

        {/* Change 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{
            scale: 1.03,
            y: -6,
            boxShadow: "0 0 40px rgba(168,85,247,0.25)"
          }}
          className="bg-[#14161c] p-6 rounded-xl border border-white/10 transition-all duration-300"
        >
          <TimeDistribution />
        </motion.div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Change 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{
            scale: 1.03,
            y: -6,
            boxShadow: "0 0 40px rgba(59,130,246,0.25)"
          }}
          className="bg-[#14161c] p-6 rounded-xl border border-white/10 transition-all duration-300"
        >
          <SubjectChart />
        </motion.div>

        {/* Change 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{
            scale: 1.03,
            y: -6,
            boxShadow: "0 0 40px rgba(236,72,153,0.25)"
          }}
          className="bg-[#14161c] p-6 rounded-xl border border-white/10 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-4">
            Subject Progress
          </h3>

          <div className="space-y-4">
            {[
              { name: "Mathematics", percent: 92, color: "bg-orange-500" },
              { name: "Physics", percent: 78, color: "bg-purple-500" },
              { name: "Computer Science", percent: 95, color: "bg-green-500" },
              { name: "Chemistry", percent: 64, color: "bg-blue-500" },
              { name: "Biology", percent: 81, color: "bg-pink-500" }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.name}</span>
                  <span>{item.percent}%</span>
                </div>

                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}