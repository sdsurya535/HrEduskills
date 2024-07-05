import { useState } from "react";
import { BarChart, LogOut, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Toggle button for smaller screens */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 mb-10 left-4 z-20 lg:hidden"
      >
        <Menu className="h-6 w-6 text-black " />
      </button>

      {/* Overlay for smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed  inset-y-0 left-0  flex min-w-64 flex-col z-[99] overflow-y-auto border-r bg-slate-800 px-5 py-8 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <NavLink
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to={"/admin/table"}
              >
                <BarChart
                  className="h-5 w-5 hover:text-gray-700"
                  aria-hidden="true"
                />
                <span className="mx-2 text-lg font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/admin/files"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-lg font-medium">Files</span>
              </NavLink>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <LogOut className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-lg font-medium">Logout</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
