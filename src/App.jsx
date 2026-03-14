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

/* DASHBOARD LAYOUT */
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

/* PROTECTED ROUTE */
import ProtectedRoute from "./routes/ProtectedRoute";

function Layout() {
  const { bgColor } = useTheme();

  return (
    <div className={`${bgColor} text-white min-h-screen`}>

      <Routes>

        {/* ================= WEBSITE ROUTES ================= */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= DASHBOARD ROUTES ================= */}
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

          {/* NOTES PAGE */}
          <Route path="notes" element={<Notes />} />

          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
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