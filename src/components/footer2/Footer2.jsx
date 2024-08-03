import "./footer2.css";

const Footer2 = () => {
  return (
    <div>
      <section className="py-8">
        <div className=" ">
          <div className="flex max-w-screen-xl mx-auto bg-orange-500 mb-8 justify-center">
            <div className="text-center">
              <div className=" py-2 ">
                <h2 className="text-4xl  font-bold  text-white">Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className=" p-6 rounded-lg">
                <div className="mb-5">
                  <div className="w-full text-center">
                    <div className="flex flex-col md:flex-row justify-center">
                      <div className="contact-text mx-2">
                        <p className="text-lg text-black">
                          Dr. Satya Ranjan Biswal(COO EduSkills):{" "}
                          <a href="tel:+918093254901" className="text-blue-500">
                            +91-8093254901
                          </a>
                        </p>
                      </div>
                      {/* <div className="contact-text mx-2">
                        <p className="text-lg text-black">
                          Pritipragyan (Sr. Relationship Manager):{" "}
                          <a href="tel:+918093254905" className="text-blue-500">
                            +91-8093254905
                          </a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <div className=" p-4 rounded-lg">
                    <div className="icon flex items-center justify-center">
                      <span className="text-white bg-gray-800 px-5 rounded-md py-2">
                        E-Mail
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <div className="contact-text mx-2">
                        <p className="text-lg text-black mt-5">
                          connect@eduskillsfoundation.org
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#003672]  py-4">
        <div className="max-w-screen-xl mx-auto border-t-2">
          <div className="text-center text-white">
            <div className="flex flex-col md:flex-row mt-8 justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="mr-4  ">
                  &copy; Copyright 2023. All Rights Reserved by EduSkills
                  Foundation
                </p>
              </div>
              <div>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://www.facebook.com/EduSkillsFoundation"
                      target="_blank"
                      className="bg-orange-600 px-4 py-3 rounded-lg"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/eduskillsfoundation/"
                      className="bg-orange-600 px-4 py-3 rounded-lg"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCP0pyuUu5bqA7NTD49kfsRQ"
                      className="bg-orange-600 px-3 py-3 rounded-lg"
                      target="_blank"
                    >
                      <i className="fab fa-youtube text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
