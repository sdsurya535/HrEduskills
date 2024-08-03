import { Outlet } from "react-router-dom";
import SearchNav from "../../components/search/SearchNav";
import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SearchNav />
      <div className="flex flex-1">
        {/* Sidebar: Hidden on smaller screens, visible on larger screens */}
        <Sidebar className="hidden md:block w-64" />
        
        {/* Content: Takes full width on smaller screens, adjusts when Sidebar is visible */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
