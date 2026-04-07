import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Student",
    email: "student@cortexclass.ai",
    phone: "",
    bio: "",
    educationLevel: "school",
    schoolName: "",
    collegeName: "",
    course: "",
    year: "",
    subjects: [],
    difficulty: "medium",
    learningStyle: "visual",
    studyTime: "morning",
    studyGoal: 2,
    examDate: "",
    aiAssistant: true,
    weakDetection: true,
    chatTone: "friendly",
    voiceAssistant: true,
    darkMode: true,
    notifications: true,
    focusMode: false,
    theme: "orange",
    fontSize: "medium",
  });

  const subjectOptions = [
    "Mathematics","Physics","Chemistry","Computer Science","Biology",
    "English","Java","Python","DBMS","OS","CN"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubjectChange = (subject) => {
    setForm((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const Card = ({ title, children }) => (
    <div className="bg-[#1a1d25] p-5 rounded-xl border border-white/10 hover:border-orange-500 transition duration-300 hover:scale-[1.02] shadow-lg hover:shadow-orange-500/20">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="p-6 space-y-6 text-white">

      <h2 className="text-3xl font-bold tracking-wide">
        ⚙️ Student Settings Panel
      </h2>

      {/* PERSONAL */}
      <Card title="👤 Personal Info">
        <div className="grid gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input"/>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input"/>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="input"/>
          <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" className="input"/>
        </div>
      </Card>

      {/* EDUCATION */}
      <Card title="🎓 Education">
        <select name="educationLevel" value={form.educationLevel} onChange={handleChange} className="input">
          <option value="school">School</option>
          <option value="college">College</option>
        </select>

        {form.educationLevel === "school" && (
          <input name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="School Name" className="input mt-2"/>
        )}

        {form.educationLevel === "college" && (
          <div className="grid gap-2 mt-2">
            <input name="collegeName" value={form.collegeName} onChange={handleChange} placeholder="College Name" className="input"/>
            <input name="course" value={form.course} onChange={handleChange} placeholder="Course" className="input"/>
            <input name="year" value={form.year} onChange={handleChange} placeholder="Year" className="input"/>
          </div>
        )}
      </Card>

      {/* ACADEMIC */}
      <Card title="📚 Academic Settings">
        <div className="grid md:grid-cols-2 gap-3">
          <select name="difficulty" value={form.difficulty} onChange={handleChange} className="input">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select name="learningStyle" value={form.learningStyle} onChange={handleChange} className="input">
            <option value="visual">Visual</option>
            <option value="audio">Audio</option>
            <option value="practical">Practical</option>
          </select>

          <select name="studyTime" value={form.studyTime} onChange={handleChange} className="input">
            <option value="morning">Morning</option>
            <option value="night">Night</option>
          </select>

          <input type="number" name="studyGoal" value={form.studyGoal} onChange={handleChange} className="input" placeholder="Daily Hours"/>

          <input type="date" name="examDate" value={form.examDate} onChange={handleChange} className="input"/>
        </div>
      </Card>

      {/* SUBJECT */}
      <Card title="📖 Subject Selection">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {subjectOptions.map((s) => (
            <label key={s} className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500/20 cursor-pointer transition">
              <input type="checkbox" checked={form.subjects.includes(s)} onChange={() => handleSubjectChange(s)} /> {s}
            </label>
          ))}
        </div>
      </Card>

      {/* AI */}
      <Card title="🤖 AI Features">
        <Toggle label="AI Assistant" name="aiAssistant" form={form} handleChange={handleChange}/>
        <Toggle label="Weak Area Detection" name="weakDetection" form={form} handleChange={handleChange}/>
        <Toggle label="Voice Assistant (Shibra)" name="voiceAssistant" form={form} handleChange={handleChange}/>

        <select name="chatTone" value={form.chatTone} onChange={handleChange} className="input mt-2">
          <option value="friendly">Friendly</option>
          <option value="teacher">Teacher</option>
          <option value="professional">Professional</option>
        </select>
      </Card>

      {/* PRODUCTIVITY */}
      <Card title="📊 Productivity">
        <Toggle label="Focus Mode" name="focusMode" form={form} handleChange={handleChange}/>
      </Card>

      {/* UI */}
      <Card title="🎨 UI Settings">
        <Toggle label="Dark Mode" name="darkMode" form={form} handleChange={handleChange}/>

        <select name="theme" value={form.theme} onChange={handleChange} className="input mt-2">
          <option>orange</option>
          <option>blue</option>
          <option>neon</option>
        </select>

        <select name="fontSize" value={form.fontSize} onChange={handleChange} className="input mt-2">
          <option>small</option>
          <option>medium</option>
          <option>large</option>
        </select>
      </Card>

      {/* NOTIFICATIONS */}
      <Card title="🔔 Notifications">
        <Toggle label="Enable Notifications" name="notifications" form={form} handleChange={handleChange}/>
      </Card>

      {/* SAVE */}
      <button className="w-full py-3 bg-orange-500 rounded-xl hover:bg-orange-600 transition font-bold text-lg shadow-lg hover:shadow-orange-500/40">
        🚀 Save All Settings
      </button>

    </div>
  );
}

/* REUSABLE TOGGLE */
function Toggle({ label, name, form, handleChange }) {
  return (
    <label className="flex justify-between items-center bg-gray-800 p-3 rounded-lg mt-2 hover:bg-gray-700 transition">
      {label}
      <input type="checkbox" name={name} checked={form[name]} onChange={handleChange}/>
    </label>
  );
}

/* INPUT STYLE */
const inputStyle = "w-full px-4 py-2 bg-gray-800 rounded-lg outline-none";

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .input { ${"width:100%;padding:10px;background:#1f2937;border-radius:8px;outline:none;color:white;"} }
  </style>`
);