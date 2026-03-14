import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import loginBg from "../assets/login-bg.png";

export default function Register() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [agree,setAgree] = useState(false);

  const handleRegister = () => {

    if(!username || !email || !password){
      alert("Please fill all fields");
      return;
    }

    if(!agree){
      alert("Please agree to terms");
      return;
    }

    alert("Registration Successful");
    navigate("/login");

  };

  return (

    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ opacity:0,y:60 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:0.5 }}
        className="relative w-[95%] max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/30 shadow-2xl"
      >

        <button
          onClick={()=>navigate("/")}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Register
        </h2>

        <div className="space-y-6">

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white"/>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white"/>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white"/>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-white text-white outline-none"
            />
          </div>

          <label className="flex items-center gap-2 text-white text-sm">

            <input
              type="checkbox"
              checked={agree}
              onChange={()=>setAgree(!agree)}
            />

            Agree to terms & conditions

          </label>

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl font-semibold text-white bg-green-800 hover:bg-green-900 transition"
          >
            Register
          </button>

        </div>

        <p className="text-center text-white mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={()=>navigate("/login")}
            className="cursor-pointer text-orange-300"
          >
            Login
          </span>
        </p>

      </motion.div>

    </div>

  );
}