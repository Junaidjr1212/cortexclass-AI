import React, { useState, useEffect } from "react";

/* SUBJECTS */
const subjects = [
  { name: "Java", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "💻" },
  { name: "DBMS", icon: "🗄️" },
  { name: "Linux", icon: "🐧" }
];

/* QUESTIONS */
const generateQuestions = (subject) =>
  Array.from({ length: 30 }, (_, i) => ({
    question: `${subject} Q${i + 1}: What is ${i}+${i}?`,
    options: ["1", "2", `${i + i}`, "0"],
    answer: `${i + i}`
  }));

export default function MockTestSystem() {

  const [subject, setSubject] = useState(null);
  const [mock, setMock] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* TIMER */
  const [time, setTime] = useState(1800);

  useEffect(() => {
    if (time > 0 && !submitted && mock !== null) {
      const t = setInterval(() => setTime(t => t - 1), 1000);
      return () => clearInterval(t);
    }
    if (time === 0) setSubmitted(true);
  }, [time, submitted, mock]);

  const formatTime = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  /* SELECT */
  const selectOption = (opt) => {
    setAnswers({ ...answers, [currentQ]: opt });
  };

  /* CLEAR */
  const clearAnswer = () => {
    const updated = { ...answers };
    delete updated[currentQ];
    setAnswers(updated);
  };

  const correct = Object.keys(answers).filter(
    i => answers[i] === questions[i]?.answer
  ).length;

  const incorrect = Object.keys(answers).length - correct;
  const accuracy = ((correct / 30) * 100).toFixed(2);

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>🚀 MOCK TEST SYSTEM</h1>

      {/* ================= SUBJECT ================= */}
      {!subject && (
        <div style={styles.grid}>
          {subjects.map((sub, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => setSubject(sub.name)}
              onMouseEnter={(e) => hoverIn(e)}
              onMouseLeave={(e) => hoverOut(e)}
            >
              {sub.icon} {sub.name}
            </div>
          ))}
        </div>
      )}

      {/* ================= MOCK ================= */}
      {subject && mock === null && (
        <>
          <button style={styles.back} onClick={() => setSubject(null)}>⬅ Back</button>

          <div style={styles.grid}>
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                style={styles.card}
                onClick={() => {
                  setMock(i);
                  setQuestions(generateQuestions(subject));
                }}
                onMouseEnter={(e) => hoverIn(e)}
                onMouseLeave={(e) => hoverOut(e)}
              >
                Mock Test {i + 1}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= EXAM ================= */}
      {mock !== null && !submitted && (
        <>
          <button style={styles.back} onClick={() => setMock(null)}>⬅ Back</button>

          <div style={styles.examLayout}>

            {/* LEFT */}
            <div style={styles.left}>
              <h3>{questions[currentQ]?.question}</h3>

              {questions[currentQ]?.options.map((opt, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.option,
                    background:
                      answers[currentQ] === opt ? "#ff004c" : "#1e293b"
                  }}
                  onClick={() => selectOption(opt)}
                >
                  {opt}
                </div>
              ))}

              <div style={styles.actions}>
                <button onClick={() => setCurrentQ(currentQ - 1)}>Prev</button>
                <button onClick={() => setCurrentQ(currentQ + 1)}>Next</button>
                <button onClick={clearAnswer}>Clear</button>
                <button onClick={() => setReview({ ...review, [currentQ]: true })}>
                  Mark
                </button>
                <button onClick={() => setSubmitted(true)}>Submit</button>
              </div>
            </div>

            {/* RIGHT */}
            <div style={styles.right}>
              <h3>⏱ {formatTime()}</h3>

              <div style={styles.palette}>
                {questions.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.box,
                      background:
                        answers[i] ? "#00ff9f" :
                        review[i] ? "orange" :
                        "#1e293b"
                    }}
                    onClick={() => setCurrentQ(i)}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </>
      )}

      {/* ================= RESULT ================= */}
      {submitted && (
        <>
          <button style={styles.back} onClick={() => window.location.reload()}>
            ⬅ Back
          </button>

          <div style={styles.resultBox}>

            <h2>📊 RESULT DASHBOARD</h2>

            <div style={styles.resultGrid}>
              <div style={styles.resultCard}>Score: {correct}/30</div>
              <div style={styles.resultCard}>Accuracy: {accuracy}%</div>
              <div style={styles.resultCard}>Rank: {Math.floor(Math.random()*5000)}</div>
              <div style={styles.resultCard}>Percentile: {(Math.random()*100).toFixed(2)}%</div>
            </div>

            {/* CHART */}
            <div style={styles.chart}>
              <div style={styles.barWrap}>
                <div style={{...styles.bar, height: correct * 6, background:"#00ff9f"}} />
                <p>Correct</p>
              </div>

              <div style={styles.barWrap}>
                <div style={{...styles.bar, height: incorrect * 6, background:"#ff004c"}} />
                <p>Incorrect</p>
              </div>
            </div>

            {/* LEADERBOARD */}
            <div style={styles.leaderboard}>
              <h3>🏆 Leaderboard</h3>
              {[1,2,3,4,5].map(i => (
                <p key={i}>User {i} - Score {30 - i}</p>
              ))}
            </div>

          </div>
        </>
      )}

    </div>
  );
}

/* HOVER */
const hoverIn = (e) => {
  e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
  e.currentTarget.style.boxShadow =
    "0 0 20px #ff004c, 0 0 40px #ff004c";
};

const hoverOut = (e) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.boxShadow = "none";
};

/* STYLES */
const styles = {
  page:{background:"#0f172a",color:"white",padding:"30px"},
  title:{textAlign:"center",marginBottom:"20px"},

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"25px"
  },

  card:{
    padding:"25px",
    borderRadius:"25px",
    textAlign:"center",
    cursor:"pointer",
    background:"#1e293b",
    border:"2px solid transparent",
    backgroundImage:
      "linear-gradient(#1e293b,#1e293b), linear-gradient(45deg,black,blue,red)",
    backgroundOrigin:"border-box",
    backgroundClip:"padding-box, border-box",
    transition:"0.3s"
  },

  back:{
    marginBottom:"20px",
    padding:"10px",
    background:"black",
    color:"white",
    borderRadius:"10px"
  },

  examLayout:{display:"flex",gap:"20px"},
  left:{flex:3},
  right:{flex:1},

  option:{padding:"12px",margin:"10px 0",borderRadius:"10px",cursor:"pointer"},

  actions:{display:"flex",gap:"10px",marginTop:"10px"},

  palette:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px"},

  box:{padding:"10px",borderRadius:"10px",textAlign:"center",cursor:"pointer"},

  resultBox:{padding:"20px",background:"#1e293b",borderRadius:"20px"},

  resultGrid:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"},

  resultCard:{padding:"10px",background:"#020617",borderRadius:"10px"},

  chart:{display:"flex",gap:"30px",alignItems:"flex-end",height:"200px",marginTop:"20px"},

  bar:{width:"50px",borderRadius:"10px"},

  barWrap:{textAlign:"center"},

  leaderboard:{marginTop:"20px"}
};