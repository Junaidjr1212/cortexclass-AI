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

    // ✅ SET LOGIN FLAG
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect to dashboard
    navigate("/dashboard");
  };

  const handleForgot = () => {
    alert("Password reset link sent (Demo)");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-[95%] max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/30 shadow-xl">

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Sign In
        </h2>

        <div className="space-y-6">

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white border border-white/40 outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 text-white border border-white/40 outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition"
          >
            Login
          </button>

        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleForgot}
            className="text-sm text-white hover:text-orange-300 transition"
          >
            Forgot Password?
          </button>
        </div>

      </div>
    </div>
  );
}