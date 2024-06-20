import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Speaker from "./components/speaker/Speaker";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Speaker></Speaker>
      <Register></Register>
      <Footer></Footer>
    </>
  );
}

export default App;
