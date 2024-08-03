import { useState } from "react";
import { BarChart, LogOut, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle button for all screen sizes */}
      <button onClick={toggleSidebar} className="absolute top-4 left-4 z-20">
        <Menu className="h-6 w-6 text-black" />
      </button>

      {/* Overlay for when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex min-w-[16rem] flex-col overflow-y-auto border-r bg-slate-800 px-5 py-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-28 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <NavLink
                className="flex items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to={"table"}
                onClick={toggleSidebar} // Close sidebar on navigation
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-lg font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className="flex items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/admin/files"
                onClick={toggleSidebar} // Close sidebar on navigation
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-lg font-medium">Files</span>
              </NavLink>
              <button
                onClick={() => {
                  dispatch(logout());
                  toggleSidebar();
                }}
                className="flex w-full items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-lg font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
