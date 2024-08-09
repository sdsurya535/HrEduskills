import { Link } from "react-router-dom";
import eduskills from "../../assets/eduskillslogo.png";
import { Menu } from "lucide-react";

const SearchNav = ({ toggleSidebar }) => {
  return (
    <div>
      <nav className="bg-blue-500 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={eduskills} className="h-10" alt="Eduskills Logo" />
          </Link>

          <div className="items-center justify-between md:flex md:w-auto">
            <button onClick={toggleSidebar} className="relative">
              <Menu className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchNav;
