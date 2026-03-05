import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1117]">

      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotateX: 5, rotateY: 5, scale: 1.03 }}
        className="w-[400px] bg-[#14161c] p-8 rounded-2xl border border-white/10 shadow-2xl"
        style={{ perspective: 1000 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          Create Account
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 hover:scale-105 transition"
          >
            Sign Up
          </button>

        </div>

      </motion.div>
    </div>
  );
}