import React, { useState } from "react";
import { motion } from "framer-motion";

const StudyPlanner = () => {
  const [progress, setProgress] = useState(65);
  const [tasks, setTasks] = useState([
    { text: "Complete Java Module", done: false },
    { text: "Practice DBMS Queries", done: false },
    { text: "Build Mini Project", done: false }
  ]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);

    const completed = updated.filter(t => t.done).length;
    setProgress(Math.floor((completed / updated.length) * 100));
  };

  const selectMood = (mood) => {
    alert("Mood Selected: " + mood);
  };

  return (
    <div style={styles.page}>
      
      <h1 style={styles.title}>📚 STUDY PLANNER PRO</h1>

      <div style={styles.container}>

        {/* Monthly Goals */}
        <Card title="📅 Monthly Goals">
          <input style={styles.input} placeholder="🎯 Goal 1" />
          <input style={styles.input} placeholder="🎯 Goal 2" />
          <input style={styles.input} placeholder="🎯 Goal 3" />
        </Card>

        {/* Weekly Focus */}
        <Card title="🎯 Weekly Focus">
          <input style={styles.input} placeholder="📘 Topic Name" />
          <textarea style={styles.textarea} placeholder="📌 Write detailed plan..." />
        </Card>

        {/* To-Do List */}
        <Card title="✅ Smart Task Tracker">
          {tasks.map((task, i) => (
            <div key={i} style={styles.task}>
              <input type="checkbox" onChange={() => toggleTask(i)} />
              <span style={{
                textDecoration: task.done ? "line-through" : "none"
              }}>
                {task.text}
              </span>
            </div>
          ))}
        </Card>

        {/* Exams */}
        <Card title="📌 Upcoming Exams">
          <input style={styles.input} placeholder="Subject Name" />
          <input style={styles.input} type="date" />
        </Card>

        {/* Schedule */}
        <motion.div style={{ ...styles.card, gridColumn: "span 4" }}>
          <h2>🗓 Smart Study Schedule</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Time</th>
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                  <th key={d}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["9-10","10-11","11-12"].map(time => (
                <tr key={time}>
                  <td>{time}</td>
                  {Array(7).fill().map((_, i) => (
                    <td key={i} contentEditable style={styles.cell}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Habit Tracker */}
        <Card title="🔥 Daily Habit Tracker">
          <label><input type="checkbox" /> 📖 Reading</label><br/>
          <label><input type="checkbox" /> 💪 Workout</label><br/>
          <label><input type="checkbox" /> 🧠 Learning</label>
        </Card>

        {/* Progress */}
        <Card title="📊 Performance Analytics">
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: progress + "%" }} />
          </div>
          <p>{progress}% Completed</p>
        </Card>

        {/* Notes */}
        <Card title="📝 Smart Notes">
          <textarea style={styles.textarea} placeholder="Write important notes..." />
        </Card>

        {/* Mood */}
        <Card title="😊 Mood Tracker">
          <div>
            {["😀","😎","😐","😴","😞"].map((m, i) => (
              <span key={i} style={styles.mood} onClick={() => selectMood(m)}>
                {m}
              </span>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

/* Reusable Card */
const Card = ({ title, children }) => (
  <motion.div
    style={styles.card}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h2>{title}</h2>
    {children}
  </motion.div>
);

/* STYLES */
const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
    fontFamily: "Poppins"
  },

  title: {
    textAlign: "center",
    fontSize: "40px",
    background: "linear-gradient(90deg,#00f5ff,#ff00ff)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px"
  },

  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "20px",
    boxShadow: "0 0 10px rgba(0,255,255,0.2)",
    transition: "0.3s"
  },

  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "8px",
    border: "none"
  },

  textarea: {
    width: "100%",
    height: "80px",
    borderRadius: "8px",
    padding: "8px"
  },

  task: {
    display: "flex",
    gap: "10px",
    margin: "5px 0"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  cell: {
    border: "1px solid #334155",
    padding: "8px"
  },

  progressBar: {
    height: "10px",
    background: "#334155",
    borderRadius: "10px"
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg,#00f5ff,#ff00ff)"
  },

  mood: {
    fontSize: "25px",
    cursor: "pointer",
    margin: "5px"
  }
};

export default StudyPlanner;