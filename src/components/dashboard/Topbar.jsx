import { FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0f1117] border-b border-white/10">
      <input
        type="text"
        placeholder="Search courses, topics..."
        className="bg-[#1a1c22] px-4 py-2 rounded-lg w-96 outline-none focus:ring-2 focus:ring-orange-500"
      />

      <div className="flex items-center gap-6">
        <FaBell className="text-gray-400 hover:text-orange-400 cursor-pointer transition" />
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold">Alex Rivera</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}