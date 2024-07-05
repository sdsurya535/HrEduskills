import { motion } from "framer-motion";
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
import { LinkedinIcon } from "lucide-react";
import "./juries.css";

const Juries = () => {
  const juriesArr = [
    {
      name: "Pallav Singh",
      designation: "AVP Human Resources at HSBC",
      img: pallav,
      linkedin: "https://linkedin.com/in/pallav-bhattacharya-2776a8b",
      about:
        "Experienced Human Resources Manager with a demonstrated history of working in the financial services industry. Strong human resources professional skilled in Soft Skills, Human Resources, Vendor Management, People Management, and HR policies and processes.",
    },
    {
      name: "Malini Saravanan",
      designation:
        "Head HR (III SBG) Water & EffluentTreatment IC, L&T Construction",
      img: malini,
      linkedin: "https://linkedin.com/in/malini-saravanan-2041b9b",
      about:
        "Experienced Human Resources Manager with a demonstrated history of working in the financial services industry. Strong human resources professional skilled in Soft Skills, Human Resources, Vendor Management, People Management, and HR policies and processes.",
    },
    {
      name: "Arvind Mathur",
      designation:
        "Global People Operations, Corporate Affairs, Global Mobility & Government Relations",
      img: arvind,
      linkedin: "https://linkedin.com/in/arvindmathur1",
      about:
        "Seasoned Human Resource Leader in Global People Operations, HR Compliance, Apprenticeship Program Management, Corporate Affairs, Government Relationships, International Assignment Management, Global Mobility – Visas, Immigration and Expatriate Management.",
    },
    {
      name: "Sudarshan Rajagopal",
      designation: "Partner cybersecurity- Technology Consulting",
      img: sudarshan,
      linkedin: "https://linkedin.com/in/sudarshanrajagopal",
      about:
        "Consulting, Business Management and Business / Management Consulting, Security evangelist, Managing Large programs and team. Business Strategy & Technology for Information Security. ",
    },
    {
      name: "Talha Tahir",
      designation:
        "Associate Director Recruitment at FIS - India and Philippines",
      img: talha,
      linkedin: "https://linkedin.com/in/talhatahir",
      about:
        "Extensive experience in managing India and Philippines recruitment operations.Proven track record for hiring volumes with high contribution from direct channels,leading initiatives.",
    },
    {
      name: "Anshul Bhargava",
      designation: "Senior Vice President & Global Head – Talent Acquisition",
      img: anshul,
      linkedin: "https://linkedin.com/in/anshul-bhargava-3151a6199",
      about:
        "Experience of handling teams in a fast paced customer centric environment. Proven ability to manage multiple projects and meet deadlines on time. Adept at working effectively to achieve goals both as a cross functional team member and individual contributor.",
    },
    {
      name: "Prashant Sinha",
      designation: "Operations Head at Tech Mahindra",
      img: prashant,
      linkedin: "https://linkedin.com/in/prashant-sinha-link",
      about:
        "Seasoned business leader with more than twenty two years of experience in ITeS and IT infrastructure Management and Application Managed services. ",
    },
    {
      name: "Dr. Reena Das",
      designation: "Chief Human Resource Officer @ Keolis Hyderabad",
      img: reena,
      linkedin: "https://linkedin.com/in/dr-reena-das-1434255a",
      about:
        "HR professional with over 23 years of experience in all aspects of Human Resource Management and Industrial Relations with strong focus in manpower planning and resource management.",
    },
    {
      name: "Rohit Raj Setu",
      designation:
        "Navigator, Thought Leader, Mentor | Data Driven Solution, Digital Adoption, Platforms and Innovation",
      img: rohit,
      linkedin: "https://linkedin.com/in/rohitrajsetu",
      about:
        "19+ years of experience across the Services and Banking Industry. Leading and grooming talent and delivering solutions in the Data Analytics domain. Quick learner and have the ability to adapt to new dynamic environments.",
    },
    {
      name: "Deepti Gupta",
      designation: "Function Head at Tech Mahindra Limited",
      img: deepti,
      linkedin: "https://linkedin.com/in/deepti-gupta-47a3597",
      about:
        "Functional expertise in handling and implementation of HR practices,process and policies with exposure and experience in WFR/CSR/HRP/PMS/ ER/Internal Recruitment/Bench Management.",
    },
  ];

  return (
    <div id="speaker" className="container bg-gray-50 mx-auto p-4 ">
      <h1 className="text-5xl text-center font-bold mt-8 mb-8">Our Juries</h1>
      {juriesArr.map((jury) => (
        <motion.div
          key={jury.name}
          className="flex flex-col md:flex-row mt-8 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex w-full max-w-4xl flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="m-0 w-full md:w-[35%] shrink-0 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl bg-white bg-clip-border text-gray-700">
              <img
                src={jury.img}
                alt="eduskills"
                className="sm:h-[38rem] md:h-full w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col w-full">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {jury.name}
              </h4>
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-700 antialiased">
                {jury.designation}
              </h6>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                {jury.about}
              </p>
              <a className="inline-block mt-auto" href={jury.linkedin}>
                <button
                  className="flex rounded-full select-none items-center gap-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <LinkedinIcon size={35} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Juries;
