import Awards from "./components/awards/Awards";
import Register from "./components/register/Register";
import Speaker from "./components/speaker/Speaker";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Juries from "./components/juries/Juries";
import ContactUs from "./components/contactus/ContactUs";
import Faq from "./components/faq/Faq";
import Footer2 from "./components/footer2/Footer2";
import ResponsiveStepper from "./components/stepper/Stepper";
import WhoShouldAttend from "./components/attend/Attend";
import WhoCanNominate from "./components/nominates/Nominates";
import Process from "./components/process/Process";

function AllTab() {
  return (
    <>
      <Navbar />
      <About />
      <WhoShouldAttend />
      <WhoCanNominate />
      <Process />
      <Faq />
      {/* <ResponsiveStepper /> */}
      <Footer2 />
    </>
  );
}

export default AllTab;
