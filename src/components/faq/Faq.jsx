import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const accordionData = [
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
    },
    
  ];

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openAccordionIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`;
        } else {
          ref.style.height = "0px";
        }
      }
    });
  }, [openAccordionIndex]);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-9 sm:grid-cols-1 mb-52 lg:grid-cols-1">
        {accordionData.map((accordion, index) => (
          <div key={index} className="w-full">
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between bg-blue-700 w-full p-4 sm:p-6 lg:p-8 font-medium text-left text-white border rounded-lg dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-700 hover:bg-blue-800 dark:hover:bg-gray-800 gap-3"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordionIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span className="text-sm sm:text-base lg:text-lg">
                  {accordion.title}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    openAccordionIndex === index ? "rotate-180" : ""
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
              id={`accordion-collapse-body-${index}`}
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
              style={{ height: "0px" }}
            >
              <div className="p-4 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                  {accordion.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
