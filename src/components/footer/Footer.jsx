import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main text-white ">
      <div className="flex flex-col lg:flex-row lg:space-x-44  max-w-screen-xl mx-auto justify-between h-full items-center lg:items-start gap-8 lg:gap-0 p-4 lg:p-0">
        <div className="hrsummit-sec flex-1 text-center lg:text-left">
          <h4
            style={{ fontFamily: "Montserrat,sans-serif" }}
            className="text-[24px] font-bold"
          >
            EduSkills HR Summit
          </h4>
          <p
            style={{ fontFamily: "Karla,sans-serif" }}
            className="text-[18px] mt-5 leading-[30px] font-semibold"
          >
            The HR Summit organized by EduSkills in collaboration with AICTE and
            the Ministry of Education, Government of India, is set to take place
            in New Delhi on 28th September 2024.
          </p>
          <div className="social-icons flex justify-center lg:justify-start gap-4 mt-5">
            <a href="#">
              <AiOutlineFacebook
                size={50}
                className="icon transition border-[2px]  px-3 py-3 rounded-full hover:bg-[#3813c2]"
              />
            </a>
            <a href="#">
              <FaXTwitter
                size={50}
                fill="white"
                className="icon transition border-[2px] px-3 py-3 rounded-full hover:bg-[#3813c2]"
              />
            </a>
            <a href="#">
              <FaYoutube
                size={50}
                className="icon transition border-[2px]  px-3 py-3 rounded-full hover:bg-[#3813c2]"
              />
            </a>
            <a href="#">
              <FaLinkedin
                size={50}
                className="icon transition border-[2px]  px-3 py-3 rounded-full hover:bg-[#3813c2]"
              />
            </a>
          </div>
        </div>

        <div className="address-sec flex-1 space-y-6 text-center lg:text-left">
          <div className="add flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <FaLocationDot size={60} className="icon" />
            <div className="flex flex-col leading-8">
              <h4
                className="text-[24px] font-bold"
                style={{ fontFamily: "Montserrat,sans-serif" }}
              >
                Address
              </h4>
              <p
                className="text-[18px] font-semibold"
                style={{ fontFamily: "Karla,sans-serif" }}
              >
                EduSkills Foundation #806, DLF Cyber City, Tech Park
                Bhubaneswar, Odisha - 751024, India.
              </p>
            </div>
          </div>
          <div className="contact flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <FaPhoneVolume size={30} className="icon" />
            <div className="flex flex-col leading-8">
              <h4
                className="text-[24px] font-bold"
                style={{ fontFamily: "Montserrat,sans-serif" }}
              >
                Contact
              </h4>
              <p
                className="text-[18px] font-semibold"
                style={{ fontFamily: "Karla,sans-serif" }}
              >
                +91 9324956400
              </p>
            </div>
          </div>
          <div className="email flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <IoMdMail size={30} className="icon" />
            <div className="flex flex-col leading-8">
              <h4
                className="text-[24px] font-bold"
                style={{ fontFamily: "Montserrat,sans-serif" }}
              >
                Email Us
              </h4>
              <p
                className="text-[18px] font-semibold"
                style={{ fontFamily: "Karla,sans-serif" }}
              >
                info@synnexgroup.com
              </p>
            </div>
          </div>
        </div>

        <div className="quicklinks-sec flex-1">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h4
              className="text-[24px] font-bold"
              style={{ fontFamily: "Montserrat,sans-serif" }}
            >
              Quick Links
            </h4>
            <a
              style={{ fontFamily: "Karla,sans-serif" }}
              className="font-semibold"
              href="#"
            >
              Home
            </a>
            <a
              style={{ fontFamily: "Karla,sans-serif" }}
              className="font-semibold"
              href="#about"
            >
              About
            </a>
            <Link
              style={{ fontFamily: "Karla,sans-serif" }}
              className="font-semibold"
              to="/awards"
            >
              Awards
            </Link>
            <a
              style={{ fontFamily: "Karla,sans-serif" }}
              className="font-semibold"
              href="#speaker"
            >
              Jury
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
