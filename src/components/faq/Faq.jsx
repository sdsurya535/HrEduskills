import { useState, useRef, useEffect } from "react";

const Faq = () => {
  const accordionDataLeft = [
    {
      title: "Campus to Corporate Excellence Award ",
      content1:
        "Demonstrated success in creating and implementing effective transition programs for graduates from tier-2 and tier-3 institutions.",
      content2:
        "Evidence of innovative practices that have significantly improved employability and job readiness of students.",
      content3:
        "Strong partnerships with academic institutions to align curriculum with industry needs.",
      content4:
        "Quantifiable outcomes such as improved placement rates, retention rates, and student feedback.",
    },
    {
      title: "Outstanding Internship Program Award",
      content1:
        "Development of comprehensive internship programs that provide meaningful, hands-on experience to students from tier-2 and tier-3 institutions.",
      content2: "High conversion rate of interns to full-time employees.",
      content3:
        "Positive feedback from interns and academic institutions about the program’s impact on student career development.",
      content4:
        "Strong mentorship and training components within the internship program.",
    },
    {
      title: "Best Campus Partnership Award",
      content1:
        "Establishment of strong, collaborative partnerships with tier-2 and tier-3 academic institutions.",
      content2:
        "Active involvement in curriculum development, guest lectures, workshops, and other educational activities.",
      content3:
        "Joint initiatives that have led to significant improvements in student readiness for the corporate world.",
      content4:
        "Recognition from academic partners for contributions to student success.",
    },
    {
      title: "Champion of Diversity and Inclusion Award",
      content1:
        "Development and execution of initiatives that promote diversity and inclusion, particularly in the recruitment and development of graduates from tier-2 and tier-3 institutions.",
      content2:
        "Evidence of creating an inclusive workplace culture that supports diverse talent.",
      content3:
        "Demonstrated impact of diversity and inclusion initiatives on business outcomes and employee satisfaction.",
      content4:
        "Active participation in community outreach and partnerships that support underrepresented groups.",
    },
  ];

  const accordionDataRight = [
    {
      title: "Innovative Talent Acquisition Award ",
      content1:
        "Adoption of creative and effective strategies to recruit fresh talent from tier-2 and tier-3 institutions.",
      content2:
        "Utilization of technology and innovative methods to identify and attract top talent.",
      content3:
        "Proven track record of successful hires who have excelled in their roles.",
      content4:
        "Implementation of diversity and inclusion initiatives in the recruitment process.",
    },
    {
      title: "Excellence in Employee Onboarding Award",
      content1:
        "Effective onboarding processes that ensure smooth transitions for new graduates into the corporate environment.",
      content2:
        "Implementation of structured training programs that align with company goals and individual career development.",
      content3: "High retention rates of new hires within the first year.",
      content4:
        "Positive feedback from new employees about their onboarding experience.",
    },
    {
      title: "Leadership in HR Innovation Award ",
      content1:
        "Pioneering new HR practices and technologies that enhance the Campus to Corporate transition.",
      content2:
        "Implementation of programs that have demonstrated measurable success and can serve as models for other organizations.",
      content3:
        "Strong emphasis on continuous improvement and adaptability in HR processes.",
      content4:
        "Recognition as a thought leader in HR innovation by peers and industry experts.",
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
    <h1 className="text-4xl text-center font-bold mt-8 mb-10">All Award Categories</h1>
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
                    className={`w-4 h-4 shrink-0   transition-transform duration-200 ${
                      openAccordionIndexLeft === index
                        ? "rotate-0"
                        : "rotate-180"
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
                <div className="p-4 space-y-4 dark:border-gray-700 dark:bg-gray-900">
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content1}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content2}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content3}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content4}
                  </li>
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
                      openAccordionIndexRight === index
                        ? "rotate-0"
                        : "rotate-180"
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
                <div className="p-4 space-y-4 dark:border-gray-700 dark:bg-gray-900">
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content1}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content2}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content3}
                  </li>
                  <li className="text-sm list-inside sm:text-base lg:text-lg text-gray-800 dark:text-gray-400">
                    {accordion.content4}
                  </li>
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
