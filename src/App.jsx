import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

/* WEBSITE PAGES */
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FeaturesPage from "./pages/FeaturesPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";

/* DASHBOARD */
import DashboardLayout from "./layouts/DashboardLayout";

/* DASHBOARD PAGES */
import DashboardHome from "./pages/dashboard/DashboardHome";
import AIChat from "./pages/dashboard/AIChat";
import QuizGenerator from "./pages/dashboard/QuizGenerator";
import StudyPlanner from "./pages/dashboard/StudyPlanner";
import Analytics from "./pages/dashboard/Analytics";
import Reports from "./pages/dashboard/Reports";
import Settings from "./pages/dashboard/Settings";
import Notes from "./pages/dashboard/Notes";
import Subscription from "./pages/dashboard/Subscription";
import AIPlatform from "./pages/AIPlatform";
import MockTestSystem from "./pages/MockTestSystem";

/* ADMIN */
import AdminPanel from "./pages/dashboard/AdminPanel";

/* PROTECTED ROUTE */
import ProtectedRoute from "./routes/ProtectedRoute";


// 🔐 ADMIN PROTECTED ROUTE
function AdminRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}


function Layout() {
  const { bgColor } = useTheme();

  return (
    <div className={`${bgColor} text-white min-h-screen`}>

      <Routes>

        {/* ================= WEBSITE ================= */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai" element={<AIPlatform />} />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />

        {/* ================= DASHBOARD ================= */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="ai" element={<AIChat />} />
          <Route path="quiz" element={<QuizGenerator />} />
          <Route path="planner" element={<StudyPlanner />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="notes" element={<Notes />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />

          {/* ✅ FIXED LINE (IMPORTANT) */}
          <Route path="mocktest" element={<MockTestSystem />} />

        </Route>

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}