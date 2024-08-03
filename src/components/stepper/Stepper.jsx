import React from "react";
import { FaMobileAlt, FaUser, FaClipboard, FaStar } from "react-icons/fa";
import { HiArrowRight, HiArrowDown } from "react-icons/hi";

const steps = [
  {
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
    title: "STEP 1",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    icon: <FaUser size={40} className="text-blue-500" />,
    title: "STEP 2",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    icon: <FaClipboard size={40} className="text-blue-500" />,
    title: "STEP 3",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
  {
    icon: <FaStar size={40} className="text-blue-500" />,
    title: "STEP 4",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
  },
];

const ResponsiveStepper = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4"></h2>
      <p className="text-center mb-8 text-gray-600">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex flex-col items-center md:flex-row md:items-center w-8 h-8 md:w-12 md:h-12">
                <div className="block md:hidden">
                  <HiArrowDown size={32} className="text-gray-400" />
                </div>
                <div className="hidden md:block">
                  <HiArrowRight size={32} className="text-gray-400" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveStepper;
