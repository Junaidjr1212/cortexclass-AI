import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import loginBg from "../assets/login-bg.png";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    userId: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    emailOtp: "",
    phoneOtp: ""
  });

  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.userId || !form.email || !form.phone || !form.password || !form.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please agree to terms");
      return;
    }

    if (showOtp && (!form.emailOtp || !form.phoneOtp)) {
      alert("Enter OTPs");
      return;
    }

    alert("Registration Successful 🚀");
    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔥 FIXED CARD SIZE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-[90%] max-w-md p-7 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      >

        {/* CLOSE */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-4 text-white text-lg hover:text-red-400"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create Account
        </h2>

        {/* FORM */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* USER ID */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={form.userId}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-2 bg-transparent border-b border-white text-white outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs cursor-pointer text-gray-300"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          {/* SEND OTP */}
          <button
            type="button"
            onClick={() => setShowOtp(true)}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
          >
            Send OTP
          </button>

          {/* ✅ OTP FIX */}
          {showOtp && (
            <div className="space-y-3">

              <input
                type="text"
                name="emailOtp"
                placeholder="Enter Email OTP"
                value={form.emailOtp}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white outline-none"
              />

              <input
                type="text"
                name="phoneOtp"
                placeholder="Enter Phone OTP"
                value={form.phoneOtp}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white outline-none"
              />

            </div>
          )}

          {/* TERMS */}
          <label className="flex items-center gap-2 text-white text-xs">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            Agree to terms & conditions
          </label>

          {/* REGISTER */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-green-700 hover:bg-green-800 transition"
          >
            Register
          </button>

        </form>

        {/* LOGIN */}
        <p className="text-center text-white mt-4 text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 underline">
            Login
          </Link>
        </p>

      </motion.div>

    </div>
  );
}