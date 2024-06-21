import Awards from "./components/awards/Awards";
import Register from "./components/register/Register";
import Speaker from "./components/speaker/Speaker";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";

function AllTab() {
  return (
    <>
      <Navbar />
      <About />
      <Speaker />
      <Awards />
      <Register />
    </>
  );
}

export default AllTab;
