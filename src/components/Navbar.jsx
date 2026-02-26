import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {

  const { changeTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50">

      <div className="absolute top-0 w-[92%] h-[2px] bg-orange-500 blur-md opacity-80"></div>

      <div
        className="relative w-[92%] max-w-6xl 
        bg-[#0d0d12]/95 backdrop-blur-xl 
        border border-orange-500/40 
        rounded-full px-12 py-4 
        flex items-center justify-between 
        shadow-[0_0_40px_rgba(249,115,22,0.5)]
        transition-all duration-500"
      >

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-orange-500 tracking-wide cursor-pointer 
          hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.9)] 
          transition duration-300"
        >
          CortexClass AI 👩‍🏫
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-14 text-gray-300 font-medium">

          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`relative group transition duration-300 
              ${location.pathname === item.path ? "text-orange-400" : "hover:text-white"}`}
            >
              {item.name}

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] 
                bg-orange-500 transition-all duration-300
                ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
                shadow-[0_0_12px_rgba(249,115,22,1)]`}
              ></span>
            </button>
          ))}

          {/* CONTACT */}
          <button
            onClick={() => navigate("/contact")}
            className={`relative group transition duration-300 
            ${location.pathname === "/contact" ? "text-orange-400" : "hover:text-white"}`}
          >
            Contact

            <span
              className={`absolute left-0 -bottom-2 h-[2px] 
              bg-orange-500 transition-all duration-300
              ${location.pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}
              shadow-[0_0_12px_rgba(249,115,22,1)]`}
            ></span>
          </button>

        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* SEARCH */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-orange-500/20 
            hover:scale-110 hover:shadow-[0_0_15px_rgba(249,115,22,0.7)] 
            transition duration-300"
          >
            <FaSearch size={18} />
          </button>

          {/* DARK MODE */}
          <button
            onClick={changeTheme}
            className="relative px-5 py-2 rounded-full border border-white/20 
            text-white overflow-hidden
            hover:border-orange-500
            transition-all duration-300 
            hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] 
            active:scale-95"
          >
            <span className="relative z-10">Dark Mode</span>
            <span className="absolute inset-0 bg-gradient-to-r 
            from-transparent via-white/10 to-transparent 
            translate-x-[-100%] hover:translate-x-[100%] 
            transition duration-1000"></span>
          </button>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="relative px-8 py-3 rounded-full font-semibold text-black
            bg-gradient-to-r from-orange-500 to-orange-600
            overflow-hidden
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_0_35px_rgba(249,115,22,1)]
            active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r 
            from-transparent via-white/30 to-transparent 
            translate-x-[-120%] hover:translate-x-[120%] 
            transition duration-1000"></span>
          </button>

          {/* MOBILE ICON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full 
            hover:bg-orange-500/20 
            hover:scale-110 transition"
          >
            <FaBars />
          </button>

        </div>
      </div>

      <div className="absolute bottom-0 w-[92%] h-[2px] bg-orange-500 blur-md opacity-80"></div>

      {/* SEARCH BOX */}
      {searchOpen && (
        <div className="absolute top-24 w-full flex justify-center">
          <input
            type="text"
            placeholder="Search courses, quizzes, topics..."
            className="w-[90%] max-w-md px-5 py-3 rounded-xl 
            bg-[#111] text-white border border-orange-500/40 
            focus:border-orange-500 outline-none 
            shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          />
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-24 w-[92%] max-w-6xl bg-[#0d0d12] 
        border border-orange-500/30 rounded-xl p-6 md:hidden 
        shadow-[0_0_30px_rgba(249,115,22,0.4)]">

          <div className="flex flex-col gap-6 text-white text-center">

            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  closeMobile();
                }}
                className="hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                navigate("/contact");
                closeMobile();
              }}
              className="hover:text-orange-500 transition duration-300"
            >
              Contact
            </button>

          </div>
        </div>
      )}

    </header>
  );
}