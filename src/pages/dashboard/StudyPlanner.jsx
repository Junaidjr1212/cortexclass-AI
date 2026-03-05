import { useState } from "react";

export default function StudyPlanner() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="p-6 bg-[#14161c] rounded-xl border border-white/10">

      <h2 className="text-2xl font-bold mb-4">Study Planner</h2>

      <div className="flex gap-3 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add study task..."
          className="flex-1 px-4 py-2 bg-gray-800 rounded-lg outline-none"
        />
        <button
          onClick={addTask}
          className="px-5 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded-lg">
            {t}
          </li>
        ))}
      </ul>

    </div>
  );
}