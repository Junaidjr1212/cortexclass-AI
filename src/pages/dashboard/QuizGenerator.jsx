import { useState } from "react";
import { motion } from "framer-motion";

export default function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  // 🔥 Simple question generator logic
  const generateQuiz = () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    const questions = [
      {
        question: `What is ${topic}?`,
        options: [
          "A programming language",
          "A concept in technology",
          "A type of database",
          "A hardware device"
        ],
        answer: 1
      },
      {
        question: `Why is ${topic} important?`,
        options: [
          "It improves performance",
          "It reduces memory",
          "It deletes data",
          "It slows systems"
        ],
        answer: 0
      },
      {
        question: `Which field uses ${topic}?`,
        options: [
          "AI",
          "Medicine",
          "Education",
          "All of the above"
        ],
        answer: 3
      }
    ];

    setQuiz(questions);
    setSelectedAnswers({});
    setScore(null);
  };

  const handleOptionSelect = (qIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qIndex]: optionIndex
    });
  };

  const submitQuiz = () => {
    let correct = 0;

    quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correct++;
      }
    });

    setScore(correct);
  };

  return (
    <div className="p-6 space-y-8">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold"
      >
        Quiz Generator
      </motion.h1>

      {/* INPUT SECTION */}
      <div className="bg-[#14161c] p-6 rounded-xl border border-white/10 space-y-4">

        <input
          type="text"
          placeholder="Enter topic (e.g. React, AI, Java)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/30 border border-white/10"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/30 border border-white/10"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button
          onClick={generateQuiz}
          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg hover:scale-105 transition"
        >
          Generate Quiz
        </button>
      </div>

      {/* QUIZ SECTION */}
      {quiz.length > 0 && (
        <div className="space-y-6">
          {quiz.map((q, qIndex) => (
            <div
              key={qIndex}
              className="bg-[#14161c] p-6 rounded-xl border border-white/10"
            >
              <h3 className="mb-4 font-semibold">
                {qIndex + 1}. {q.question}
              </h3>

              <div className="space-y-2">
                {q.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() =>
                      handleOptionSelect(qIndex, optionIndex)
                    }
                    className={`w-full text-left p-2 rounded-lg transition ${
                      selectedAnswers[qIndex] === optionIndex
                        ? "bg-orange-500/30"
                        : "bg-black/30 hover:bg-white/10"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={submitQuiz}
            className="px-6 py-2 bg-green-600 rounded-lg hover:scale-105 transition"
          >
            Submit Quiz
          </button>

          {score !== null && (
            <div className="text-xl font-bold">
              Your Score: {score} / {quiz.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}