import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatBox() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Ask me anything about your studies." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const aiMessage = {
        role: "ai",
        text: "Here is a helpful explanation for your query."
      };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#14161c] p-6 rounded-xl border border-white/10 flex flex-col h-[500px]">

      <h3 className="text-lg font-semibold mb-4">AI Assistant</h3>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">

        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.role === "user"
                  ? "bg-orange-500 text-white ml-auto"
                  : "bg-white/10 text-gray-200"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Animation */}
        {loading && (
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
          </div>
        )}

      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-4 py-2 rounded-lg bg-[#1c1f26] border border-white/10 focus:border-orange-500 outline-none"
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg hover:scale-105 transition"
        >
          Send
        </button>
      </div>

    </div>
  );
}