import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/speaker.jpg";
import campaign from "../../assets/campaign.jpg";
import osborn from "../../assets/osborn.jpg";
import "./about.css";


const About = () => {
  return (
    <div>
      <div className="about-sec bg-[#fff6f6] px-4 md:px-16" id="about">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between">
          <motion.div
            className="image-sec mt-8 mb-10 md:mt-16 lg:pr-[15px] lg:mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={aboutimg} className="md:mx-auto border-[20px] border-white rounded-full  lg:w-[420px] xl:w-[560px]" alt="" />
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
              India HR Summit & Awards 2024
            </h4>
            <h4 className="lg:text-[15px] xl:text-[18px] font-bold uppercase mt-3 mb-4">
              For the people and about the people
            </h4>
            <p className="lg:text-[14px] xl:text-[16px] text-[#497898] leading-7 mb-4">
              The India HR Summit 2024 (IHRS2024) is the most prestigious annual
              conference on human resources for top executives and HR
              professionals in India organized By Synnex Group.
            </p>
            <p className="lg:text-[14px] xl:text-[16px] text-[#497898] mb-5 leading-7">
              It is a non-profit and self-funded event for HR professionals to
              keep abreast with the trends, best practices and to strengthen
              their network. India HR Summit 2024” with the theme “Moving
              Towards the Next Gen HR” seeks to provide a platform for industry
              stakeholders to work out a road map for unleashing the true
              potential of the Business.
            </p>

            <div className="buttons mb-8 md:mb-8 space-y-4 lg:space-y-0 lg:space-x-5">
              <a
                href=""
                style={{ fontFamily: "Roboto,sans-serif" }}
                className="block lg:inline-block transition-all hover:bg-[#3904f9] bg-[#3813C2] text-white px-[48px] py-[16px] lg:text-[14px] xl:text-[1rem] font-bold text-center"
              >
                Register Now
              </a>
              <a
                className="block lg:inline-block lg:text-[14px] xl:text-[1rem] hover:text-white transition-all hover:bg-[#3813C2] border-[2px] px-[48px] py-[16px] border-[#dae6ff] text-center"
                style={{ fontFamily: "Roboto,sans-serif" }}
                href=""
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
