import { Outlet } from "react-router-dom";
import Navbar from "../components/website/Navbar";
import Footer from "../components/website/Footer";

export default function WebsiteLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0f] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}