import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SkeletonLoader = () => (
  <div className="w-full mb-4 p-4 bg-gray-200 animate-pulse">
    <div className="h-6 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
  </div>
);

const Faq = () => {
  const navigate = useNavigate();

  const [accordionDataLeft, setAccordionDataLeft] = useState([]);
  const [accordionDataRight, setAccordionDataRight] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://connectapi.eduskillsfoundation.org/api/auth/getAward")
      .then((response) => {
        setAccordionDataLeft(response.data.leftdata);
        setAccordionDataRight(response.data.rightdata);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching award data:", error);
        setLoading(false);
      });
  }, []);

  const [openAccordionIndexLeft, setOpenAccordionIndexLeft] = useState(null);
  const [openAccordionIndexRight, setOpenAccordionIndexRight] = useState(null);

  const contentRefsLeft = useRef([]);
  const contentRefsRight = useRef([]);

  useEffect(() => {
    contentRefsLeft.current.forEach((ref, index) => {
      if (ref) {
        if (openAccordionIndexLeft === index) {
          ref.style.height = `${ref.scrollHeight}px`;
          ref.style.opacity = 1;
          ref.style.visibility = "visible";
        } else {
          ref.style.height = "0px";
          ref.style.opacity = 0;
          ref.style.visibility = "hidden";
        }
      }
    });
  }, [openAccordionIndexLeft]);

  useEffect(() => {
    contentRefsRight.current.forEach((ref, index) => {
      if (ref) {
        if (openAccordionIndexRight === index) {
          ref.style.height = `${ref.scrollHeight}px`;
          ref.style.opacity = 1;
          ref.style.visibility = "visible";
        } else {
          ref.style.height = "0px";
          ref.style.opacity = 0;
          ref.style.visibility = "hidden";
        }
      }
    });
  }, [openAccordionIndexRight]);

  const toggleAccordionLeft = (index) => {
    setOpenAccordionIndexLeft((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const toggleAccordionRight = (index) => {
    setOpenAccordionIndexRight((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const handleNominate = (id, title) => {
    navigate(`/hrsummit/register/${id}`, { state: { title } });
    Swal.fire({
      title:
        "Are you attending in person at the HR Summit Awards on 28th September 2024 at New Delhi?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the case when the user confirms
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the case when the user cancels
        navigate("/hrsummit");
      }
    });
  };

  return (
    <section
      id="faq"
      className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl text-center font-bold mt-8 mb-10">
        Award Categories
      </h1>
      <div className="grid gap-1 xl:gap-9 sm:grid-cols-1 mb-52 lg:grid-cols-2">
        <div>
        <h2 className="text-2xl mb-8 font-semibold text-center uppercase">Individual Categories</h2>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : accordionDataLeft.map((accordion, index) => (
                <div key={accordion.awardCode} className="w-full mb-4">
                  <h2 id={`accordion-collapse-heading-left-${index}`}>
                    <div className="flex items-center justify-between w-full">
                      <button
                        type="button"
                        className="flex-grow flex items-center justify-between bg-blue-700 w-full p-4 sm:p-6 lg:p-7 font-medium text-left text-white border rounded-lg dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-blue-800 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleAccordionLeft(index)}
                        aria-expanded={openAccordionIndexLeft === index}
                        aria-controls={`accordion-collapse-body-left-${index}`}
                      >
                        <span className="text-sm sm:text-base lg:text-sm">
                          {accordion.awardName}
                        </span>
                        <button
                          className="ml-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNominate(
                              accordion.awardCode,
                              accordion.awardName
                            );
                          }}
                        >
                          Nominate Now
                        </button>
                        <svg
                          data-accordion-icon
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            openAccordionIndexLeft === index
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </div>
                  </h2>
                  <div
                    id={`accordion-collapse-body-left-${index}`}
                    ref={(el) => (contentRefsLeft.current[index] = el)}
                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                    aria-labelledby={`accordion-collapse-heading-left-${index}`}
                    style={{
                      height:
                        openAccordionIndexLeft === index
                          ? `${contentRefsLeft.current[index].scrollHeight}px`
                          : "0px",
                      opacity: openAccordionIndexLeft === index ? 1 : 0,
                      visibility:
                        openAccordionIndexLeft === index ? "visible" : "hidden",
                      transition: "height 0.5s ease, opacity 0.5s ease",
                    }}
                  >
                    <div className="p-4 space-y-4 dark:border-gray-700 dark:bg-gray-900">
                      {accordion.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm list-inside sm:text-base lg:text-sm text-gray-800 dark:text-gray-400"
                        >
                          {desc}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold uppercase mb-8 text-center">Organizational Categories</h2>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : accordionDataRight.map((accordion, index) => (
                <div key={accordion.awardCode} className="w-full mb-4">
                  <h2 id={`accordion-collapse-heading-right-${index}`}>
                    <div className="flex items-center justify-between w-full">
                      <button
                        type="button"
                        className="flex-grow flex items-center justify-between bg-blue-700 w-full p-4 sm:p-6 lg:p-7 font-medium text-left text-white border rounded-lg dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-blue-800 dark:hover:bg-gray-800 gap-3"
                        onClick={() => toggleAccordionRight(index)}
                        aria-expanded={openAccordionIndexRight === index}
                        aria-controls={`accordion-collapse-body-right-${index}`}
                      >
                        <span className="text-sm sm:text-base lg:text-sm">
                          {accordion.awardName}
                        </span>
                        <button
                          className="ml-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNominate(
                              accordion.awardCode,
                              accordion.awardName
                            );
                          }}
                        >
                          Nominate Now
                        </button>
                        <svg
                          data-accordion-icon
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            openAccordionIndexRight === index
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </div>
                  </h2>
                  <div
                    id={`accordion-collapse-body-right-${index}`}
                    ref={(el) => (contentRefsRight.current[index] = el)}
                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                    aria-labelledby={`accordion-collapse-heading-right-${index}`}
                    style={{
                      height:
                        openAccordionIndexRight === index
                          ? `${contentRefsRight.current[index].scrollHeight}px`
                          : "0px",
                      opacity: openAccordionIndexRight === index ? 1 : 0,
                      visibility:
                        openAccordionIndexRight === index
                          ? "visible"
                          : "hidden",
                      transition: "height 0.5s ease, opacity 0.5s ease",
                    }}
                  >
                    <div className="p-4 space-y-4 dark:border-gray-700 dark:bg-gray-900">
                      {accordion.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm list-inside sm:text-base lg:text-sm text-gray-800 dark:text-gray-400"
                        >
                          {desc}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
