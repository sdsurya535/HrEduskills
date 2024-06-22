import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const accordionDataLeft = [
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
  ];

  const accordionDataRight = [
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },{
      title:
        "What is the difference between a regular speaker and a Bluetooth speaker",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
  ];

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

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-1 xl:gap-9 sm:grid-cols-1 mb-52 lg:grid-cols-2">
        <div>
          {accordionDataLeft.map((accordion, index) => (
            <div key={index} className="w-full mb-4">
              <h2 id={`accordion-collapse-heading-left-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between bg-blue-700 w-full p-4 sm:p-6 lg:p-8 font-medium text-left text-white border rounded-lg dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-blue-800 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordionLeft(index)}
                  aria-expanded={openAccordionIndexLeft === index}
                  aria-controls={`accordion-collapse-body-left-${index}`}
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    {accordion.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      openAccordionIndexLeft === index ? "rotate-180" : ""
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
                <div className="p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {accordionDataRight.map((accordion, index) => (
            <div key={index} className="w-full mb-4">
              <h2 id={`accordion-collapse-heading-right-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between bg-blue-700 w-full p-4 sm:p-6 lg:p-8 font-medium text-left text-white border rounded-lg dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-blue-800 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordionRight(index)}
                  aria-expanded={openAccordionIndexRight === index}
                  aria-controls={`accordion-collapse-body-right-${index}`}
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    {accordion.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      openAccordionIndexRight === index ? "rotate-180" : ""
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
                    openAccordionIndexRight === index ? "visible" : "hidden",
                  transition: "height 0.5s ease, opacity 0.5s ease",
                }}
              >
                <div className="p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
