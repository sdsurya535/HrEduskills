import "./awards.css";
import icon1 from "../../assets/icon-1.png";
import icon5 from "../../assets/icon-5.png";
import icon4 from "../../assets/icon-4.png";
import icon6 from "../../assets/icon-6.png";
import icon7 from "../../assets/icon7.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger animation when 30% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const awardsArr = [
    { name: "Innovative Talent Acquisition Award", img: icon1 },
    { name: "Outstanding Internship Award", img: icon5 },
    { name: "Excellence in Employee Onboarding Award", img: icon4 },
    { name: "Campus to Corporate Excellence Award", img: icon6 },
    { name: "Best Campus Partnership Award", img: icon7 },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      className="awards-sec flex flex-col items-center mt-8 text-white  px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl mt-14  mb-8 font-bold relative z-[9]"
      >
        Awards
      </motion.h1>

      <motion.div
        className="award-content  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-5 mb-5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {awardsArr.map((award, index) => (
          <motion.div
            key={index}
            className="award-card border-2 px-4 py-4 border-white relative z-[9]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={award.img}
              className="w-[50%] sm:w-[50%] md:w-[70%] mx-auto"
              alt=""
            />
            <h4 className="text-center mt-5">{award.name}</h4>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4 }}
        className="award-buttons relative mb-14 z-[9] mt-10"
      >
        <Link className="view-all-button " to="/awards">
          View All Categories
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Awards;
