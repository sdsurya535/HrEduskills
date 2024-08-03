import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import EduSkills from "../../assets/HR Summit logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import NomBtn from "../nombtn/NomBtn";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const offsetTop1 =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        98;
      const offsetTop2 =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        87;
      const offsetTop3 =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        50;
      if (section.id === "about") {
        window.scrollTo({
          top: offsetTop1,
          behavior: "smooth",
        });
      } else if (section.id === "speaker") {
        window.scrollTo({
          top: offsetTop2,
          behavior: "smooth",
        });
      } else if (section.id === "faq") {
        window.scrollTo({
          top: offsetTop3,
          behavior: "smooth",
        });
      } else if (section.id === "nominate") {
        window.scrollTo({
          top: offsetTop2,
          behavior: "smooth",
        });
      } else if (section.id === "attend") {
        window.scrollTo({
          top: offsetTop2,
          behavior: "smooth",
        });
      } else if (section.id === "process") {
        window.scrollTo({
          top: offsetTop2,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false); // Close the menu if it's open
  };

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

  const handleNominateClick = (e) => {
    e.preventDefault();
    setMenu("registration");
    Swal.fire({
      title:
        "Are you attending in person at the HR Summit Awards on 28th September 2024 at New Delhi?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/hreduskills/register");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the case when the user cancels
      }
    });
  };

  return (
    <>
      <div id="home">
        <div className="bg-image animate-bg-fade">
          <nav
            className={`bg-white navbar border-gray-200 dark:bg-gray-900 ${
              isScrolled
                ? "fixed transition-all duration-300 z-[50] top-0 w-full left-0 right-0 navbar-scrolled"
                : "mx-auto max-w-screen-xl"
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
                      href="#home"
                      onClick={() => {
                        setMenu("home");
                        window.scrollTo(0, 0);
                      }}
                      className={`block ${
                        menu === "home" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu("about");
                        handleScrollToSection(e, "about");
                      }}
                      className={`block ${
                        menu === "about" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://connect.eduskillsfoundation.org/#guests"
                      className={`block ${
                        menu === "speaker" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      Speakers
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#attend"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu("attend");
                        handleScrollToSection(e, "attend");
                      }}
                      className={`block ${
                        menu === "attend" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      Who Should Attend
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#nominate"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu("nominate");
                        handleScrollToSection(e, "nominate");
                      }}
                      className={`block ${
                        menu === "Who Can Nominate" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      Who Can Nominate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#process"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu("process");
                        handleScrollToSection(e, "process");
                      }}
                      className={`block ${
                        menu === "about" && "text-blue-700"
                      } nav-item py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                    >
                      Process
                    </Link>
                  </li>

                  {/* <li>
                    <NomBtn />
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>

          <div
            style={{ fontFamily: "Karla" }}
            className="banner-content z-[1] relative mt-20 flex flex-col items-center justify-center text-white text-center px-4 animate-fade-in"
          >
            <h1 className="text-4xl md:text-5xl mt-24 lg:text-6xl font-bold">
              Welcome To
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              EduSkills HR Summit & Awards 2024
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              28th September 2024
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Dr. Ambedkar International Centre, New Delhi
            </h2>
            <a
              style={{ fontFamily: "Roboto, sans-serif" }}
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setMenu("faq");
                handleScrollToSection(e, "faq");
              }}
              // onClick={handleNominateClick}
              className="mt-5 mb-48 hover:bg-[#3904f9] transition-all bg-[#3813C2] px-8 md:px-12 lg:px-16 py-3 md:py-4 text-base md:text-lg lg:text-xl font-bold btn-animate"
            >
              Nominate Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
