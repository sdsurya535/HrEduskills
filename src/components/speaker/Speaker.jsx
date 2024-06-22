/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import business from "../../assets/tim.jpg";
import blackdr from "../../assets/blackdr.jpg";
import bluedr from "../../assets/bluedr.jpg";
import bluishdr from "../../assets/bluishdr.jpg";
import coatdr from "../../assets/coatdr.jpg";
import balddr from "../../assets/balddr.jpg";
import youngdr from "../../assets/youngdr.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import "./speaker.css";

const Speaker = () => {
  const speakerArr = [
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: business,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: blackdr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: bluedr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: bluishdr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: coatdr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: youngdr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: balddr,
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Harjit Khanduja",
      designation: "Sr. Vice President- HR, Reliance Jio",
      image: business,
      linkedin: "https://www.linkedin.com/in/",
    },
  ];

  return (
    <>
      <div className="mt-16 speaker-bg" id="speaker">
        <h1 className="text-5xl text-center mt-2 mb-10 font-bold">
          Our Juries
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
