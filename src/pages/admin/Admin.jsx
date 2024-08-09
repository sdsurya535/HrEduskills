import { Outlet } from "react-router-dom";
import SearchNav from "../../components/search/SearchNav";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SearchNav toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {/* Sidebar: Hidden on smaller screens, visible on larger screens */}
        <Sidebar
          toggleSidebar={toggleSidebar}
          isOpen={isOpen}
          className="hidden md:block w-64 bg-gray-800 text-white"
        />

        {/* Content: Takes full width on smaller screens, adjusts when Sidebar is visible */}
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
