import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/speaker.jpg";
import campaign from "../../assets/campaign.jpg";
import osborn from "../../assets/osborn.jpg";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const About = () => {
  const navigate = useNavigate();
  const handleNominateClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title:
        "Are you attending in person at the HR Summit Awards on 28th September 2024 at New Delhi?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/hreduskills/register");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the case when the user cancels
      }
    });
  };
  return (
    <div id="about">
      <div className="about-sec bg-[#fff6f6] px-4  md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between">
          <motion.div
            className="image-sec mt-8 mb-10 md:mt-16 lg:pr-[15px] lg:mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutimg}
              className="md:mx-auto border-[20px] border-white rounded-full  lg:w-[420px] xl:w-[560px]"
              alt=""
            />
            {/* <img src={campaign} className="campaigns md:mx-auto border-[20px] border-white rounded-full" alt="" />
            <img src={osborn} className="campaign md:mx-auto border-[20px] border-white rounded-full " alt="" /> */}
          </motion.div>
          <motion.div
            className="about-content px-4 md:px-6 lg:px-0  lg:w-[50%] mt-8 lg:mt-16 md:mt-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className=" text-[24px] lg:text-[20px] xl:text-[24px] font-bold">
              Eduskills HR Summit & Awards 2024
            </h4>
            <h4 className="lg:text-[15px] xl:text-[18px] font-bold uppercase mt-3 mb-4">
              For the people and about the people
            </h4>
            <p className="lg:text-[14px] xl:text-[16px] text-[#497898] leading-7 mb-4">
              The HR Summit organized by EduSkills in collaboration with AICTE
              and the Ministry of Education, Government of India, is set to take
              place in New Delhi on 28th September 2024. This event is designed
              to bring together a diverse group of HR professionals, thought
              leaders, talent acquisition heads, and industry experts. The
              summit aims to explore the latest trends, challenges, and
              innovations in human resources management.
            </p>

            <div className="buttons mb-8 md:mb-8 space-y-4 lg:space-y-0 lg:space-x-5">
              <Link
                to={"/register"}
                onClick={handleNominateClick}
                style={{ fontFamily: "Roboto,sans-serif" }}
                className="block lg:inline-block transition-all hover:bg-[#3904f9] bg-[#3813C2] text-white px-[48px] py-[16px] lg:text-[14px] xl:text-[1rem] font-bold text-center"
              >
                Nominate Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
