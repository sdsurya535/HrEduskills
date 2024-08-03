import processimg from "../../assets/Untitled-1.png";

const Process = () => {
  return (
    <div id="process" className="container mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Processes</h2>
      <div className="flex justify-center">
        <img
          src={processimg}
          alt="Process"
          className="w-full max-w-6xl h-auto"
        />
      </div>
    </div>
  );
};

export default Process;
