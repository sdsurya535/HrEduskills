import { motion, AnimatePresence } from "framer-motion";
import award from "../../assets/award.jpg";
import award2 from "../../assets/award-2.jpg";
import "./allawards.css";
import MainNav from "../another/MainNav";
import Faq from "../../components/faq/Faq";

const AllAward = () => {
  return (
    <div>
      <MainNav />
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-award dark:bg-gray-900"
          id="home"
        >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="relative z-[9] mr-auto place-self-center lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                CATEGORIES & CRITERIA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-white max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              >
                Our team has thoughtfully selected a range of categories to
                showcase excellence in various areas of human resources, such as
                diversity and inclusion, leadership development, and more. These
                categories are designed to recognise outstanding achievements
                and innovations in the field and provide opportunities for
                organisations of all sizes and types to showcase their
                successes. Below, you will find the categories and criteria that
                form the basis of our judging process. Take a look to find the
                perfect fit for your organisation and join us in celebrating the
                best of HR.
              </motion.p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                src={award2}
                alt="mockup"
                className="object-cover relative z-[9]"
              />
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
      <Faq />
    </div>
  );
};

export default AllAward;
