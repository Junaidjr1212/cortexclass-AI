import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Student");
  const [email, setEmail] = useState("student@cortexclass.ai");

  return (
    <div className="p-6 bg-[#14161c] rounded-xl border border-white/10 space-y-6">

      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-1 text-gray-400">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none"
          />
        </div>

        <button className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
          Save Changes
        </button>

      </div>

    </div>
  );
}