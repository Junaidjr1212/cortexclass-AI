import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {

  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full bg-[#0e1117] text-white">

      {/* SIDEBAR */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-1 w-full min-w-0">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 w-full overflow-y-auto p-6">

          <AnimatePresence mode="wait">

            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full"
            >

              {/* IMPORTANT */}
              <Outlet />

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}