"use client";
import { useState } from "react";
import {
  Search,
  Bell,
  Moon,
  Sun,
  User,
  Settings,
  Menu,
  Users,
  BookOpen,
  Activity,
  DollarSign,
  BarChart2,
  MessageSquare,
  BellRing,
  Award,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function AdminPanel() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // 🔥 FIXED PREMIUM CARD STYLE (ALL CARDS SAME EFFECT)
 const cardStyle =
  "relative rounded-2xl p-[1px] bg-gradient-to-r from-[#ff4d6d] via-[#a855f7] to-[#00f5ff] group";
    const innerCard =
  "rounded-2xl p-5 bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 transition duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_35px_rgba(255,80,120,0.4)]";
  const data = [
    { name: "Mon", users: 50 },
    { name: "Tue", users: 80 },
    { name: "Wed", users: 120 },
    { name: "Thu", users: 90 },
    { name: "Fri", users: 140 },
  ];

  return (
    <div
      className={`min-h-screen flex ${
        darkMode
          ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* SIDEBAR */}
      {sidebarOpen && (
        <div className="w-64 p-5 bg-white/10 backdrop-blur-xl transition">
          <h1 className="text-xl font-bold text-indigo-400 mb-6">
            Cortex Admin
          </h1>

          {[
            "Dashboard",
            "Students",
            "Courses",
            "Transactions",
            "Schedule",
            "Live Classes",
            "Resources",
            "Reports",
            "Settings",
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg hover:bg-indigo-500 hover:text-white cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* MAIN */}
      <div className="flex-1 p-6 space-y-6">

        {/* NAVBAR */}
        <div className="flex justify-between items-center">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Menu
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer hover:text-indigo-400"
            />

            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
              <Search />
              <input
                placeholder="Search..."
                className="bg-transparent outline-none"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* 🔥 ICON UPGRADE */}
            <Bell className="hover:text-pink-400 cursor-pointer" />
            <Settings className="hover:text-indigo-400 cursor-pointer" />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-110 transition"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <User />
              <span>Admin</span>
            </div>
          </div>
        </div>

{/* TOP ANALYTICS */}
<div className="grid grid-cols-4 gap-4">

  <div className={cardStyle}>
    <div className={`${innerCard} flex justify-between items-center`}>
      <div>
        <h2>Total Users</h2>
        <h1 className="text-2xl font-bold">12,450</h1>
      </div>
      <Users />
    </div>
  </div>

  <div className={cardStyle}>
    <div className={`${innerCard} flex justify-between items-center`}>
      <div>
        <h2>Active Users</h2>
        <h1 className="text-2xl font-bold">8,320</h1>
      </div>
      <Activity />
    </div>
  </div>

  <div className={cardStyle}>
    <div className={`${innerCard} flex justify-between items-center`}>
      <div>
        <h2>Live Classes</h2>
        <h1 className="text-2xl font-bold">24</h1>
      </div>
      <BookOpen />
    </div>
  </div>

  <div className={cardStyle}>
    <div className={`${innerCard} flex justify-between items-center`}>
      <div>
        <h2>Transactions</h2>
        <h1 className="text-2xl font-bold">$45,200</h1>
      </div>
      <DollarSign />
    </div>
  </div>

</div>

{/* CHART SECTION */}
<div className="grid grid-cols-2 gap-6">

  <div className={cardStyle}>
    <div className={innerCard}>
      <h2 className="mb-3">User Activity</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1f2937" />
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip contentStyle={{ background: "#0b1220", border: "none" }} />
          <Line type="monotone" dataKey="users" stroke="#7c83ff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className={cardStyle}>
    <div className={innerCard}>
      <h2 className="mb-3">Performance</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid stroke="#1f2937" />
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="users" fill="#22c55e" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className={cardStyle}>
    <div className={innerCard}>
      <h2 className="mb-3">Growth Trend</h2>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />
          <Area stroke="#ff7a18" fill="#ff7a1830" dataKey="users" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>

  <div className={cardStyle}>
    <div className={innerCard}>
      <h2 className="mb-3">Weekly Engagement</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <Tooltip />
          <Line stroke="#22c55e" dataKey="users" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>

</div>

{/* FEATURE GRID */}
<div className="grid grid-cols-4 gap-4">

  {[
    { name: "Reports", icon: <BarChart2 /> },
    { name: "Review", icon: <MessageSquare /> },
    { name: "Feedback", icon: <MessageSquare /> },
    { name: "Notification", icon: <BellRing /> },
    { name: "Broadcast", icon: <BellRing /> },
    { name: "Reminder", icon: <BellRing /> },
    { name: "Leaderboard", icon: <Award /> },
    { name: "Syllabus Update", icon: <BookOpen /> },
    { name: "Recent Activity", icon: <Activity /> },
    { name: "Agents Active", icon: <Users /> },
    { name: "Subjects", icon: <BookOpen /> },
    { name: "User History", icon: <Users /> },
  ].map((item, i) => (
    <div key={i} className={cardStyle}>
      <div className={innerCard}>
        <div className="flex items-center gap-3 text-base">
          {item.icon}
          {item.name}
        </div>
      </div>
    </div>
  ))}

</div>

        {/* EXTRA DATA */}
        <div className="grid grid-cols-3 gap-4">

          <div className={`${cardStyle} bg-white/10 flex justify-between`}>
            <div>
              <h2>Students</h2>
              <p>1200 enrolled</p>
            </div>
            <Users />
          </div>

          <div className={`${cardStyle} bg-white/10 flex justify-between`}>
            <div>
              <h2>Courses</h2>
              <p>45 courses active</p>
            </div>
            <BookOpen />
          </div>

          <div className={`${cardStyle} bg-white/10 flex justify-between`}>
            <div>
              <h2>Schedule</h2>
              <p>12 upcoming classes</p>
            </div>
            <Activity />
          </div>

        </div>

      </div>
    </div>
  );
}