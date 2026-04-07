import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIChat() {
  const [activeTab, setActiveTab] = useState("chat");
  const [fullscreen, setFullscreen] = useState(false);

  const tabs = [
    { id: "chat", label: "💬 Chatbot" },
    { id: "voice", label: "🎙️ Voice Agent" },
    { id: "video", label: "🎥 Video Agent" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f1117] text-white p-4">

      <div
        className={`transition-all duration-300 ${
          fullscreen ? "w-full h-screen" : "w-full max-w-4xl h-[80vh]"
        } bg-[#14161c] rounded-xl border border-white/10 flex flex-col`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl font-bold">🤖 AI Assistant</h2>

          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="px-3 py-1 bg-orange-500 rounded hover:bg-orange-600"
          >
            {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-3 p-3 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded ${
                activeTab === tab.id
                  ? "bg-orange-500"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-4 overflow-hidden">
          {activeTab === "chat" && <ChatBot />}
          {activeTab === "voice" && <VoiceAgent />}
          {activeTab === "video" && <VideoAgent />}
        </div>
      </div>
    </div>
  );
}

/* ================= CHATBOT ================= */
function ChatBot() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! Ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    let reply = "I am a demo AI.";
    if (input.toLowerCase().includes("hello")) reply = "Hi there!";
    if (input.toLowerCase().includes("java")) reply = "Java is OOP language.";
    if (input.toLowerCase().includes("dbms")) reply = "DBMS manages data.";

    setMessages([...messages, { role: "user", text: input }, { role: "ai", text: reply }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">

      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-2 rounded max-w-[70%] ${
              msg.role === "user"
                ? "bg-orange-500 ml-auto text-black"
                : "bg-gray-700"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-gray-800 rounded"
        />
        <button onClick={handleSend} className="bg-orange-500 px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}

/* ================= VOICE ================= */
function VoiceAgent() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.onresult = (event) => {
        const speech = event.results[0][0].transcript;
        setText(speech);
        speak("You said " + speech);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const speak = (msg) => {
    const speech = new SpeechSynthesisUtterance(msg);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">

      <div className="text-xl">{text || "Speak something..."}</div>

      <button
        onClick={listening ? stopListening : startListening}
        className="bg-orange-500 px-6 py-2 rounded"
      >
        {listening ? "Stop Mic" : "Start Mic"}
      </button>
    </div>
  );
}

/* ================= VIDEO ================= */
function VideoAgent() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">

      <video
        ref={videoRef}
        autoPlay
        className="w-full max-w-md rounded border"
      />

      <button
        onClick={startCamera}
        className="bg-orange-500 px-6 py-2 rounded"
      >
        Start Camera
      </button>
    </div>
  );
}