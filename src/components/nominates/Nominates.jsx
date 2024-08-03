// src/components/WhoCanNominate.jsx

const items = [
  "Talent recruitment and selection",
  "Campus Partnership",
  "Internship & PPO",
  "Women HR Leader",
  "Diversity & Inclusion",
  "Training and development",
  "Employee Value Proposition",
  "Technology in HR",
  "Innovator in HR",
];

const WhoCanNominate = () => {
  return (
    <div className="bg-black">
      <div
        id="nominate"
        className="p-8 mx-auto max-w-screen-xl text-white mt-10"
      >
        <h2 className="text-2xl font-bold text-center mb-8">
          Who Can Nominate
        </h2>
        <p className="text-center mb-8">
          We are inviting individuals and organizations who have contributed to
          the field of Human Resources
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white p-4 rounded-lg shadow-md"
            >
              <ul className="list-disc list-inside">
                <li className="text-left">{item}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanNominate;
