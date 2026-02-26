import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FeaturesPage from "./pages/FeaturesPage";
import Login from "./pages/Login";

function Layout() {
  const { bgColor } = useTheme();

  return (
    <div className={`${bgColor} min-h-screen flex flex-col text-white transition-all duration-500`}>
      
      <div className="flex-1">
        <Routes>

          {/* Default Route → Login First */}
          <Route path="/" element={<Login />} />

          {/* After Login */}
          <Route path="/home" element={<Landing />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<FeaturesPage />} />

          {/* If route not found → Redirect to Login */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>

    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;