import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import loginBg from "../assets/login-bg.png";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[95%] max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/30 shadow-2xl"
      >

        {/* close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Login
        </h2>

        <div className="space-y-6">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          <div className="flex justify-between text-sm text-white">

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={()=>setRemember(!remember)}
              />
              Remember me
            </label>

            <button
              onClick={()=>alert("Password reset link sent")}
              className="hover:text-orange-300"
            >
              Forgot Password?
            </button>

          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-white bg-green-800 hover:bg-green-900 transition"
          >
            Login
          </button>

        </div>

        {/* REGISTER LINK FIX */}
        <p className="text-center text-white mt-6 text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange-300 hover:text-orange-400 underline ml-1"
          >
            Register
          </Link>
        </p>

      </motion.div>

    </div>
  );
}