/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pallav from "../../assets/juriesimg/pallav.jpg";
import malini from "../../assets/juriesimg/malini.jpg";
import arvind from "../../assets/juriesimg/arvind.jpg";
import sudarshan from "../../assets/juriesimg/sudarshan.jpg";
import talha from "../../assets/juriesimg/talha.jpg";
import anshul from "../../assets/juriesimg/anshul.jpg";
import prashant from "../../assets/juriesimg/prashant.jpg";
import reena from "../../assets/juriesimg/reena.png";
import rohit from "../../assets/juriesimg/rohit.jpg";
import deepti from "../../assets/juriesimg/deepti.jpeg";
import { FaLinkedinIn } from "react-icons/fa";
import "./speaker.css";

const Speaker = () => {
  const speakerArr = [
    {
      name: "Pallav Singh",
      designation: "AVP Human Resources at HSBC",
      image: pallav,
      linkedin: "https://linkedin.com/in/pallav-bhattacharya-2776a8b",
    },
    {
      name: "Malini Saravanan",
      designation: "Head HR (III SBG) Water & EffluentTreatment IC",
      image: malini,
      linkedin: "https://linkedin.com/in/malini-saravanan-2041b9b",
    },
    {
      name: "Arvind Mathur",
      designation: "Global People Operations",
      image: arvind,
      linkedin: "https://linkedin.com/in/arvindmathur1",
    },
    {
      name: "Sudarshan Rajagopal",
      designation: "Partner cybersecurity- Technology Consulting",
      image: sudarshan,
      linkedin: "https://linkedin.com/in/sudarshanrajagopal",
    },
    {
      name: "Talha Tahir",
      designation: "Associate Director Recruitment at FIS",
      image: talha,
      linkedin: "https://linkedin.com/in/talhatahir",
    },
    {
      name: "Anshul Bhargava",
      designation: "Senior Vice President & Global Head – Talent Acquisition",
      image: anshul,
      linkedin: "https://linkedin.com/in/anshul-bhargava-3151a6199",
    },
    {
      name: "Prashant Sinha",
      designation: "Operations Head at Tech Mahindra",
      image: prashant,
      linkedin: "https://linkedin.com/in/prashant-sinha-link",
    },
    {
      name: "Dr. Reena Das",
      designation: "Chief Human Resource Officer @ Keolis Hyderabad",
      image: reena,
      linkedin: "https://linkedin.com/in/dr-reena-das-1434255a",
    },
  ];

  return (
    <>
      <div className="mt-16 speaker-bg" id="speaker">
        <h1 className="text-5xl text-center mt-2 mb-10 font-bold">
          Our Expert Speakers
        </h1>
        <div className="speaker-sec max-w-full md:max-w-screen-xl mx-auto px-0 md:px-16 lg:px-14 xl:px-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
          {speakerArr.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </>
  );
};

const SpeakerCard = ({ speaker }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative h-[400px] w-[300px]  sm:h-[500px] overflow-hidden sm:w-[400px] md:h-[330px] mx-auto md:mx-0 md:w-[300px] rounded-md speaker-card"
    >
      <img
        src={speaker.image}
        alt={speaker.name}
        className="z-0 h-full  mx-auto w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 opacity-95 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{speaker.name}</h1>
        <p className="mt-2 text-sm font-bold text-gray-100">
          {speaker.designation}
        </p>
        <a
          href={speaker.linkedin}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
        >
          View Profile &rarr;
        </a>
      </div>
      <a href={speaker.linkedin}>
        <FaLinkedinIn size={20} className="link-icon" />
      </a>
    </motion.div>
  );
};

export default Speaker;
