import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCrown, FaUserShield } from "react-icons/fa";

import {
  FaChartPie,
  FaRobot,
  FaClipboardList,
  FaCalendarAlt,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaBook
} from "react-icons/fa";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", icon: <FaChartPie />, path: "/dashboard" },
    { name: "AI Assistant", icon: <FaRobot />, path: "/dashboard/ai" },
    { name: "Quiz Generator", icon: <FaClipboardList />, path: "/dashboard/quiz" },
    { name: "Study Planner", icon: <FaCalendarAlt />, path: "/dashboard/planner" },
    { name: "Notes", icon: <FaBook />, path: "/dashboard/notes" },
    { name: "Analytics", icon: <FaChartBar />, path: "/dashboard/analytics" },
    { name: "Reports", icon: <FaFileAlt />, path: "/dashboard/reports" },
    { name: "Subscription", icon: <FaCrown />, path: "/dashboard/subscription" },

    // ✅ FIXED NAME + PATH (IMPORTANT)
    { name: "Mock Test", icon: <FaUserShield />, path: "/dashboard/mocktest" },
  ];

  return (
    <div className="w-64 bg-[#111217] border-r border-white/10 flex flex-col p-6 h-screen">

      {/* 🔥 Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-3 mb-10 cursor-pointer"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center font-bold text-white">
          C
        </div>

        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          CortexClass
        </h1>
      </motion.div>

      {/* MENU */}
      <div className="flex-1 space-y-2 overflow-y-auto">

        {menu.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 shadow-lg"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <span className="text-lg group-hover:scale-110 transition">
                {item.icon}
              </span>

              <span className="font-medium">{item.name}</span>
            </NavLink>
          </motion.div>
        ))}

      </div>

      {/* BOTTOM */}
      <div className="space-y-3 pt-4 border-t border-white/10">

        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-3 p-3 text-gray-400 hover:bg-white/5 rounded-lg transition"
        >
          <FaCog /> Settings
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300"
        >
          <FaSignOutAlt /> Logout
        </button>

      </div>

    </div>
  );
}