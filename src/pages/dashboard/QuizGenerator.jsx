import { useState } from "react";
import { motion } from "framer-motion";

export default function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  // 🔥 30 REAL QUESTIONS DATABASE
  const questionBank = [

    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Performance Unit",
        "Control Processing Unit"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which language is used for web development?",
      options: [
        "Python",
        "JavaScript",
        "C++",
        "Java"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "What is HTML used for?",
      options: [
        "Database",
        "Structure of web pages",
        "Operating system",
        "Networking"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which company created React?",
      options: [
        "Google",
        "Facebook",
        "Microsoft",
        "Amazon"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which symbol is used for comments in JavaScript?",
      options: [
        "//",
        "#",
        "<!-- -->",
        "**"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which data structure uses FIFO?",
      options: [
        "Stack",
        "Queue",
        "Tree",
        "Graph"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "Which complexity is fastest?",
      options: [
        "O(n)",
        "O(log n)",
        "O(n²)",
        "O(1)"
      ],
      answer: 3,
      difficulty: "Medium"
    },

    {
      question: "Which database is NoSQL?",
      options: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Oracle"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Application Process Interface",
        "Advanced Programming Interface",
        "Application Performance Integration"
      ],
      answer: 0,
      difficulty: "Medium"
    },

    {
      question: "Which algorithm is used for searching?",
      options: [
        "Binary Search",
        "Bubble Sort",
        "Merge Sort",
        "Quick Sort"
      ],
      answer: 0,
      difficulty: "Medium"
    },

    {
      question: "Which protocol is used for web pages?",
      options: [
        "FTP",
        "SMTP",
        "HTTP",
        "SSH"
      ],
      answer: 2,
      difficulty: "Easy"
    },

    {
      question: "Which company created Java?",
      options: [
        "Microsoft",
        "Sun Microsystems",
        "Google",
        "IBM"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "What is Git used for?",
      options: [
        "Database",
        "Version Control",
        "Operating System",
        "Compiler"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which tag creates a hyperlink in HTML?",
      options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which sorting algorithm is fastest on average?",
      options: [
        "Bubble Sort",
        "Quick Sort",
        "Insertion Sort",
        "Selection Sort"
      ],
      answer: 1,
      difficulty: "Hard"
    },

    {
      question: "Which layer is responsible for routing?",
      options: [
        "Transport",
        "Network",
        "Session",
        "Application"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "Which programming paradigm does Java use?",
      options: [
        "Object Oriented",
        "Functional",
        "Procedural",
        "Logic"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which company owns YouTube?",
      options: [
        "Microsoft",
        "Google",
        "Meta",
        "Amazon"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which command uploads code to GitHub?",
      options: [
        "git push",
        "git pull",
        "git clone",
        "git fetch"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which structure uses LIFO?",
      options: [
        "Queue",
        "Stack",
        "Array",
        "Graph"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "Which language is used for AI?",
      options: [
        "Python",
        "HTML",
        "CSS",
        "PHP"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which database uses tables?",
      options: [
        "MongoDB",
        "MySQL",
        "Redis",
        "Cassandra"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which OS is open source?",
      options: [
        "Windows",
        "Linux",
        "MacOS",
        "iOS"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which CSS property changes text color?",
      options: [
        "font",
        "color",
        "background",
        "text-style"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which keyword declares variable in JavaScript?",
      options: [
        "int",
        "var",
        "string",
        "letvar"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which HTTP method retrieves data?",
      options: [
        "GET",
        "POST",
        "DELETE",
        "PUT"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which is a front-end framework?",
      options: [
        "React",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      answer: 0,
      difficulty: "Easy"
    },

    {
      question: "Which tag creates table row?",
      options: [
        "<td>",
        "<tr>",
        "<th>",
        "<table>"
      ],
      answer: 1,
      difficulty: "Easy"
    },

    {
      question: "Which port is used for HTTP?",
      options: [
        "21",
        "80",
        "443",
        "22"
      ],
      answer: 1,
      difficulty: "Medium"
    },

    {
      question: "Which command installs packages in Node?",
      options: [
        "npm start",
        "npm install",
        "npm run",
        "node install"
      ],
      answer: 1,
      difficulty: "Easy"
    }

  ];

  // 🔥 Generate quiz
  const generateQuiz = () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    const filtered = questionBank.filter(q => q.difficulty === difficulty);

    setQuiz(filtered.slice(0, 30));
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
              Your Score: {score} / {quiz.length} ({Math.round((score/quiz.length)*100)}%)
            </div>
          )}
        </div>
      )}
    </div>
  );
}