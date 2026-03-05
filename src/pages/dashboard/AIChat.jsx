import { useState } from "react";
import { motion } from "framer-motion";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Ask me any academic question." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const aiReply = {
      role: "ai",
      text: "This is a demo AI response. Backend integration pending."
    };

    setMessages([...messages, userMessage, aiReply]);
    setInput("");
  };

  return (
    <div className="p-6 flex flex-col h-[80vh] bg-[#14161c] rounded-xl border border-white/10">

      <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg max-w-[70%] ${
              msg.role === "user"
                ? "bg-orange-500 ml-auto text-black"
                : "bg-gray-700"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 outline-none"
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Send
        </button>
      </div>

    </div>
  );
}