import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import loginBg from "../assets/login-bg.png";

export default function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [robot, setRobot] = useState(false);

  const handleLogin = () => {

    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    if (!robot) {
      alert("Please verify you're not a robot 🤖");
      return;
    }

    // 👑 ADMIN LOGIN
    if (email === "admin@cortex.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      alert("Admin Login Successful 🚀");
      navigate("/admin");
      return;
    }

    // 👤 USER LOGIN (student / teacher)
    localStorage.setItem("role", role);
    alert("Login Successful ✅");
    navigate("/dashboard");

  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >

        {/* CLOSE */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-white text-xl hover:text-red-400"
        >
          ✕
        </button>

        {/* ROLE SWITCH */}
        <div className="flex mb-6 bg-white/10 rounded-full p-1">

          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 rounded-full text-sm transition ${
              role === "student"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "text-gray-300"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 rounded-full text-sm transition ${
              role === "teacher"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "text-gray-300"
            }`}
          >
            Teacher
          </button>

        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Welcome Back!
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">
          Login to your AI class account
        </p>

        {/* INPUTS */}
        <div className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* ROBOT */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={robot}
              onChange={()=>setRobot(!robot)}
            />
            I'm not a robot
          </div>

          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/30"
          >
            Sign In
          </motion.button>

        </div>

        {/* REGISTER */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-cyan-400 underline">
            Sign up
          </Link>
        </p>

      </motion.div>

    </div>
  );
}