import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaChartPie,
  FaRobot,
  FaClipboardList,
  FaCalendarAlt,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaSignOutAlt
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
    { name: "Analytics", icon: <FaChartBar />, path: "/dashboard/analytics" },
    { name: "Reports", icon: <FaFileAlt />, path: "/dashboard/reports" },
  ];

  return (
    <div className="w-64 bg-[#111217] border-r border-white/10 flex flex-col p-6">

      {/* 🔥 Animated Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center font-bold text-white">
          C
        </div>

        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          CortexClass
        </h1>
      </motion.div>

      <div className="flex-1 space-y-3">
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
                `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 shadow-lg"
                    : "hover:bg-white/5 text-gray-400"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-3 p-3 text-gray-400 hover:bg-white/5 rounded-lg"
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