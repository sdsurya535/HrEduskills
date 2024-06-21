import { useEffect, useState } from "react";
import EduSkills from "../../assets/logo.png";
import "../../components/navbar/navbar.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

/*   const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Close the menu if it's open
  }; */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`bg-white border-gray-200 dark:bg-gray-900 transition-all duration-100 mx-auto ${
          isScrolled
            ? "fixed transition-all top-0 w-full left-0 right-0"
            : " mx-auto max-w-screen-xl"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={EduSkills}
              className="h-12 logo-animate"
              alt="EduSkills Logo"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`fixed z-20 top-0 left-0 w-64 h-full bg-gray-50 dark:bg-gray-800 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:w-auto z-40 md:bg-transparent`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block uppercase py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
