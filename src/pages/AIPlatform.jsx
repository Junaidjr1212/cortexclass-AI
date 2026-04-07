import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIPlatform() {
  const [activeTab, setActiveTab] = useState("quiz");

  const tabs = [
    { id: "quiz", label: "🧠 Mock Test" },
    { id: "history", label: "📊 History" },
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-6">

      <h1 className="text-3xl font-bold neon mb-6">
        🚀 Cortex AI Learning System
      </h1>

      {/* TABS */}
      <div className="flex gap-3 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-5 py-2 rounded-xl transition ${
              activeTab === t.id
                ? "bg-orange-500 shadow-lg shadow-orange-500/40"
                : "bg-gray-800 hover:scale-105"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="glass p-5 rounded-xl">
        <AnimatePresence mode="wait">
          {activeTab === "quiz" && <Quiz />}
          {activeTab === "history" && <History />}
        </AnimatePresence>
      </div>

      <style>{`
        .glass {
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.05);
        }
        .neon {
          background: linear-gradient(90deg,#ff6a00,#ff00cc);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      `}</style>
    </div>
  );
}

/* ================= QUIZ ================= */
function Quiz() {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = {
    1: [
      { q: "Java is?", a: "Language", options: ["Language","OS","Tool"] },
      { q: "HTML used for?", a: "Web", options: ["Web","AI","DB"] },
    ],
    2: [
      { q: "DBMS stands for?", a: "Database", options: ["Data","Database","Disk"] },
      { q: "CSS used for?", a: "Design", options: ["Logic","Design","Server"] },
    ],
  };

  const current = questions[level][index];

  const handleAnswer = (opt) => {
    if (opt === current.a) setScore(score + 1);

    if (index + 1 < questions[level].length) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  };

  const nextLevel = () => {
    setLevel(level + 1);
    setIndex(0);
    setScore(0);
    setCompleted(false);
  };

  return (
    <motion.div
      key={level}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {!completed ? (
        <>
          <h2 className="text-xl mb-4">Level {level}</h2>

          <div className="bg-gray-800 p-4 rounded-xl mb-4">
            {current.q}
          </div>

          <div className="grid gap-2">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="p-2 bg-gray-700 rounded hover:scale-105 hover:bg-orange-500/40 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl">🎉 Completed</h2>
          <p>Score: {score}</p>

          <button
            onClick={nextLevel}
            className="px-5 py-2 bg-orange-500 rounded"
          >
            Next Level
          </button>
        </div>
      )}
    </motion.div>
  );
}

/* ================= HISTORY ================= */
function History() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <div className="bg-gray-800 p-3 rounded">
        Level 1 - Score: 2/2
      </div>
      <div className="bg-gray-800 p-3 rounded">
        Level 2 - Score: 1/2
      </div>

      <button className="px-4 py-2 bg-orange-500 rounded">
        Retest Quiz
      </button>
    </motion.div>
  );
}