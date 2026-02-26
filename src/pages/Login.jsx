import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import loginBg from "../assets/login-bg.png";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // Demo login success
    navigate("/home");
  };

  const handleForgot = () => {
    alert("Password reset link sent to your registered email (Demo)");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center 
      bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Animated floating leaves effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-3 h-3 bg-orange-500 rounded-full top-20 left-20 animate-bounce opacity-70"></div>
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-40 right-40 animate-bounce opacity-60"></div>
        <div className="absolute w-2 h-2 bg-orange-400 rounded-full bottom-32 left-1/3 animate-bounce opacity-60"></div>
      </div>

      {/* Login Card */}
      <div
        className="relative w-[95%] max-w-md bg-white/20 backdrop-blur-xl
        border border-white/40 rounded-3xl p-10
        shadow-[0_15px_60px_rgba(0,0,0,0.4)]
        transition-all duration-500
        hover:scale-105 hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Sign In
        </h2>

        <div className="space-y-6">
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl
              bg-white/30 text-white placeholder-white/80
              border border-white/40 focus:border-orange-400
              outline-none transition duration-300
              focus:shadow-lg"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl
              bg-white/30 text-white placeholder-white/80
              border border-white/40 focus:border-orange-400
              outline-none transition duration-300
              focus:shadow-lg"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-orange-500 to-red-500
            hover:from-orange-600 hover:to-red-600
            transition-all duration-300
            hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Login
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <button
            onClick={handleForgot}
            className="text-white text-sm hover:text-orange-300 transition"
          >
            Forgot Password?
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-white text-sm hover:text-orange-300 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}