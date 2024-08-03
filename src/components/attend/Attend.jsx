// src/components/WhoShouldAttend.jsx
import React from "react";

const items = [
  "CHROs/HR Leaders",
  "CEOs/MDs",
  "Chief Learning Officers/Learning & Development Heads",
  "Director, VP, Head Of Total Rewards, Employee Experience, HR Tech",
  "Academicians/ Vice Chancellor/Chancellor/Deans",
  "DEI Heads/ Practitioners",
  "Director/ Head Of Talent Management/ Talent Development Leaders",
  "Policymakers, Thinkers, Educationists",
];

const WhoShouldAttend = () => {
  return (
    <div id="attend" className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Who Should Attend</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 p-4 rounded shadow-md"
          >
            <ul className="list-disc list-inside text-white">
              <li>{item}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoShouldAttend;
