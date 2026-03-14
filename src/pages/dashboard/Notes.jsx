import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilePdf, FaRobot, FaVideo, FaBrain } from "react-icons/fa";

export default function Notes() {

const navigate = useNavigate();

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science"
];

const [selectedSubject, setSelectedSubject] = useState(null);
const [noteView, setNoteView] = useState(null);

const demoNotes = {
  pdf: "These are sample PDF notes for the subject. Topics include important concepts, formulas, and explanations that help students understand the chapter clearly.",
  ai: "AI Generated Notes: Artificial Intelligence helps computers learn from data. Machine learning, neural networks, and deep learning are key AI technologies.",
  video: "Video Explanation: This section provides video tutorials explaining concepts step by step for better understanding.",
  revision: "Smart Revision: Key points for quick revision — formulas, definitions, and important exam concepts."
};

return (

<div className="p-8 text-white">

{/* BACK TO DASHBOARD */}

<button
onClick={() => navigate("/dashboard")}
className="mb-6 text-orange-400 hover:text-orange-500"
>
← Back to Dashboard
</button>

<h1 className="text-3xl font-bold mb-8">Smart Study Notes</h1>

{/* SUBJECT GRID */}

{!selectedSubject && (

<div className="grid md:grid-cols-3 gap-6">

{subjects.map((subject) => (

<div
key={subject}
onClick={() => setSelectedSubject(subject)}
className="p-6 rounded-xl bg-[#151620] border border-white/10
hover:border-orange-500 hover:shadow-lg transition cursor-pointer"
>

<h2 className="text-xl font-semibold">{subject}</h2>

<p className="text-gray-400 mt-2">
Click to explore notes
</p>

</div>

))}

</div>

)}

{/* SUBJECT NOTES */}

{selectedSubject && !noteView && (

<div>

<button
onClick={() => setSelectedSubject(null)}
className="mb-6 text-orange-400"
>
← Back to Subjects
</button>

<h2 className="text-2xl font-semibold mb-6">
{selectedSubject} Notes
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* PDF NOTES */}

<div
onClick={() => setNoteView("pdf")}
className="p-6 bg-[#151620] rounded-xl border border-white/10
hover:border-red-500 transition cursor-pointer">

<FaFilePdf size={28} className="text-red-400 mb-3"/>

<h3 className="text-lg font-semibold">PDF Notes</h3>

<p className="text-gray-400 text-sm mt-2">
Download complete chapter notes
</p>

<button className="mt-4 text-sm text-orange-400">
Open Notes
</button>

</div>

{/* AI NOTES */}

<div
onClick={() => setNoteView("ai")}
className="p-6 bg-[#151620] rounded-xl border border-white/10
hover:border-purple-500 transition cursor-pointer">

<FaRobot size={28} className="text-purple-400 mb-3"/>

<h3 className="text-lg font-semibold">AI Generated Notes</h3>

<p className="text-gray-400 text-sm mt-2">
AI explains concept in simple language
</p>

<button className="mt-4 text-sm text-orange-400">
Generate Notes
</button>

</div>

{/* VIDEO */}

<div
onClick={() => setNoteView("video")}
className="p-6 bg-[#151620] rounded-xl border border-white/10
hover:border-blue-500 transition cursor-pointer">

<FaVideo size={28} className="text-blue-400 mb-3"/>

<h3 className="text-lg font-semibold">Video Explanation</h3>

<p className="text-gray-400 text-sm mt-2">
Watch concept explanation video
</p>

<button className="mt-4 text-sm text-orange-400">
Watch Video
</button>

</div>

{/* SMART REVISION */}

<div
onClick={() => setNoteView("revision")}
className="p-6 bg-[#151620] rounded-xl border border-white/10
hover:border-green-500 transition cursor-pointer">

<FaBrain size={28} className="text-green-400 mb-3"/>

<h3 className="text-lg font-semibold">Smart Revision</h3>

<p className="text-gray-400 text-sm mt-2">
Quick revision notes
</p>

<button className="mt-4 text-sm text-orange-400">
Start Revision
</button>

</div>

{/* PROGRESS */}

<div className="p-6 bg-[#151620] rounded-xl border border-white/10
hover:border-orange-500 transition">

<h3 className="text-lg font-semibold mb-2">
Progress Tracking
</h3>

<div className="w-full bg-gray-700 rounded-full h-2">

<div className="bg-orange-500 h-2 rounded-full w-[60%]"></div>

</div>

<p className="text-sm text-gray-400 mt-2">
60% Completed
</p>

</div>

</div>

</div>

)}

{/* NOTES VIEW */}

{noteView && (

<div className="bg-[#151620] p-8 rounded-xl border border-white/10">

<button
onClick={() => setNoteView(null)}
className="text-orange-400 mb-4"
>
← Back to Notes
</button>

<h2 className="text-2xl font-semibold mb-4">
{selectedSubject} {noteView.toUpperCase()} Notes
</h2>

<p className="text-gray-300 leading-relaxed">
{demoNotes[noteView]}
</p>

</div>

)}

</div>

);

}