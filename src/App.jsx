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
    <div className={`${bgColor} text-white overflow-x-hidden`}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}