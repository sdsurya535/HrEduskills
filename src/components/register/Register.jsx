import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";

import award from "../../assets/award-2.jpg";
import Swal from "sweetalert2";
import api from "../../utils/axios";

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const [fileInputs, setFileInputs] = useState([0]);

  const location = useLocation();

  const { title } = location.state || {};
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    console.log(title);
  }, []);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const addFileInput = () => {
    setFileInputs([...fileInputs, fileInputs.length]);
  };

  const removeLastFileInput = () => {
    if (fileInputs.length > 1) {
      setFileInputs(fileInputs.slice(0, -1));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    if (!isChecked) {
      toast.error("You must certify the information to proceed.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to submit the form? you won't be able to edit it after submission.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    });

    if (!result.isConfirmed) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("companyAbout", data.companyAbout);
    formData.append("website", data.website);
    formData.append("aboutYou", data.aboutYou);
    formData.append("achievement", data.achievement);
    formData.append("reasonClaim", data.reasonClaim);
    formData.append("awardCategory", data.awardCategory);
    formData.append("appName", data.appName);
    formData.append("mail", data.email);
    formData.append("mobile", data.mobile);
    fileInputs.forEach((_, index) => {
      if (data[`files_${index}`]) {
        Array.from(data[`files_${index}`]).forEach((file) => {
          formData.append("files", file);
        });
      }
    });

    console.log(data);

    try {
      await api.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      reset();
      setIsSubmitting(false);
      toast.success("Successfully Submitted", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thank you for your nomination! Your submission has been received successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
        timer: 10000,
        timerProgressBar: true,
        didClose: () => {
          // Navigate to a specific URL when the timer ends
          window.location.href = "https://connect.eduskillsfoundation.org";
        },
        preConfirm: () => {
          // Navigate to a specific URL when the button is clicked
          window.location.href = "https://connect.eduskillsfoundation.org";
        },
      });
    } catch (error) {
      console.error("There was an error!", error);
      setIsSubmitting(false);
      toast.error("Registration failed", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <section
      style={{
        background: "#e2e2e2",
      }}
    >
      <motion.div
        className="grid grid-cols-1 max-w-screen-xl mx-auto lg:grid-cols-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative flex items-end px-4 pb-10 pt-40 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src={award}
              alt=""
            />
          </div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              {/* <h3 className="text-4xl font-bold text-white">EduSkills</h3> */}
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {/* <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    WorkForce 4.0
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Virtual Internships
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Institute Collaborations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    Faculty Development
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center col-span-1 justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <motion.div
            className="w-full max-w-sm xl:max-w-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              NOMINATE
            </h2>
            <p className="mt-2 text-base text-gray-600"></p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="company"
                    className="text-base font-medium text-gray-900"
                  >
                    Award Category
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("awardCategory")}
                    className="flex h-10 bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    rows={"4"}
                    readOnly
                    id="company"
                    value={title}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="designation"
                    className="text-base font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("appName", {
                      required: "applicant name is required",
                    })}
                    className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="enter your name.."
                    id="appName"
                    onBlur={() => trigger("appName")}
                  />
                  {errors.appName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.appName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="designation"
                    className="text-base font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    onBlur={() => trigger("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="number"
                    className="text-base font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/, // Validates for exactly 10 numeric characters
                        message: "Mobile number must be 10 digits",
                      },
                    })}
                    className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter your mobile number"
                    id="mobile"
                    onBlur={() => trigger("mobile")}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="company"
                    className="text-base font-medium text-gray-900"
                  >
                    About Company (Minimum 100 Words and Maximum 300 Words)
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    {...register("companyAbout", {
                      required: "Company is required",
                    })}
                    className="flex h-20 bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    rows={"4"}
                    placeholder="about your company..."
                    id="company"
                    onBlur={() => trigger("companyAbout")}
                  />
                  {errors.companyAbout && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.companyAbout.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="designation"
                    className="text-base font-medium text-gray-900"
                  >
                    Website
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    {...register("website", {
                      required: "website is required",
                    })}
                    className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="website"
                    id="website"
                    onBlur={() => trigger("website")}
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.website.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="about"
                    className="text-base  font-medium text-gray-900"
                  >
                    About Yourself (Minimum 100 Words and Maximum 300 Words)
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    {...register("aboutYou", {
                      required: "about yourself is required",
                    })}
                    className="flex  h-20 bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    rows="10"
                    placeholder="about yourself..."
                    id="company"
                    onBlur={() => trigger("aboutYou")}
                  />
                  {errors.aboutYou && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.aboutYou.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="about"
                    className="text-base font-medium text-gray-900"
                  >
                    Unique Achievement(If Any)
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    {...register("achievement")}
                    className="flex h-20 w-full bg-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    rows="10"
                    placeholder="achievement"
                    id="company"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="claim"
                    className="text-base font-medium text-gray-900"
                  >
                    Justify your claim. (Minimum 100 Words and Maximum 300
                    Words)
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    {...register("reasonClaim", {
                      required: "claim is required",
                    })}
                    className="flex h-20 bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    rows="10"
                    placeholder="Justify your claim here..."
                    id="claim"
                    onBlur={() => trigger("reasonClaim")}
                  />
                  {errors.reasonClaim && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.reasonClaim.message}
                    </p>
                  )}
                </div>
              </div>

              {fileInputs.map((input, index) => (
                <div className="relative" key={index}>
                  <label
                    htmlFor={`files_${index}`}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Upload Documents (zip or pdf)
                  </label>
                  <input
                    type="file"
                    id={`files_${index}`}
                    multiple
                    {...register(`files_${index}`, {
                      required: "File upload is required",
                      validate: {
                        acceptedFormats: (files) => {
                          const validFormats = [
                            "application/zip",
                            "application/x-zip-compressed",
                            "application/pdf",
                          ];
                          const validExtensions = [
                            ".zip",
                            ".pdf",
                            ".zipx",
                            ".tar",
                            ".tar.gz",
                            ".tar.bz2",
                            ".7z",
                            ".rar",
                          ];

                          const isValid = Array.from(files).every((file) => {
                            const fileExtension = file.name
                              .split(".")
                              .pop()
                              .toLowerCase();
                            return (
                              validFormats.includes(file.type) ||
                              validExtensions.includes(`.${fileExtension}`)
                            );
                          });

                          return (
                            isValid || "Only zip and pdf files are allowed"
                          );
                        },
                      },
                    })}
                    className={`block w-full text-sm text-gray-900 border ${
                      errors[`files_${index}`]
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md cursor-pointer bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />

                  {errors[`files_${index}`] && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors[`files_${index}`]?.message}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFileInput}
                className="mt-4 inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add More Documents
              </button>
              {fileInputs.length > 1 && (
                <button
                  type="button"
                  onClick={removeLastFileInput}
                  className="mt-1 sm:mt-0 sm:ml-2 w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Remove Last Document
                </button>
              )}

              <div className="relative flex items-start mt-4">
                <input
                  type="checkbox"
                  id="certify"
                  className={`h-4 w-4 text-blue-600 border-gray-300 rounded ${
                    errors.certify ? "border-red-500" : ""
                  } focus:ring-blue-500`}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="certify"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  I certify that all information provided in this form is
                  accurate and true to the best of my knowledge. I am willing to
                  provide any supporting document/evidence that may be required
                  to verify the information provided here and I agree to abide
                  by the decision of EduSkills in all matters relating to the
                  award.
                </label>
              </div>

              <div>
                {isSubmitting ? (
                  <button
                    disabled
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Submitting...
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Submit <ArrowRight className="ml-2" size={18} />
                    </button>{" "}
                    <Link
                      to={"/hrsummit"}
                      className="inline-flex mt-5 w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Go Back
                    </Link>
                  </>
                )}
              </div>
              <ToastContainer />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

{
  /* <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    {...register("name", {
                      required: "Full Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]{2,50}$/,
                        message:
                          "Please enter a valid full name (2-50 characters)",
                      },
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    onBlur={() => trigger("name")} // Trigger validation on blur
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div> */
}

{
  /* <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Entered value does not match email format",
                      },
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onBlur={() => trigger("email")} // Trigger validation on blur
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div> */
}

{
  /* <div>
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    {...register("mobile", {
                      required: "mobile number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message:
                          "mobile number must be 10 digits and start with 6,7,8,9",
                      },
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Mobile Number"
                    id="mobile"
                    onBlur={() => trigger("mobile")} // Trigger validation on blur
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
              </div> */
}

{
  /* <div>
                <label
                  htmlFor="award"
                  className="text-base font-medium text-gray-900"
                >
                  Award
                </label>
                <div className="mt-2">
                  <select
                    {...register("awardCategory", {
                      required: "Award selection is required",
                    })}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="award"
                    onChange={handleAwardChange}
                    value={selectedAward}
                  >
                    {awardsData.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.awardCategory && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.awardCategory.message}
                    </p>
                  )}
                </div>
              </div>

              {fileInputs.map((_, index) => (
                <div key={index}>
                  <input
                    type="file"
                    className={`block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 ${
                      errors[`file${index + 1}`]
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-md focus:outline-none`}
                    {...register(`file${index + 1}`, {
                      required: "This file is required",
                      validate: validateFile,
                    })}
                  />
                  <div className="flex flex-col gap-1">
                    {!errors[`file${index + 1}`] && (
                      <span className="text-red-700 text-sm mt-2">
                        <span className="text-red-700">*</span> file must be in
                        pdf format.
                        <br />
                        <span className="text-red-700">*</span> file must not
                        exceed 2MB.
                      </span>
                    )}
                    {errors[`file${index + 1}`] && (
                      <span className="text-red-500 mt-1 text-sm">
                        {errors[`file${index + 1}`].message}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {fileInputs.length > 1 && (
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    {...register("reason", {
                      required: "thoughts are required",
                    })}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    onBlur={() => trigger("reason")}
                  ></textarea>
                  {errors.reason && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.reason.message}
                    </p>
                  )}
                </div>
              )} */
}

/* fileInputs.forEach((_, index) => {
      const file = data[`file${index + 1}`];
      if (file && file.length > 0) {
        formData.append(`file${index + 1}`, file[0]);
      }
    }); */
// formData.append("awardCategory", data.awardCategory);
// if (data.reason) {
//   formData.append("reason", data.reason);
// }
// const validateFile = (file) => {
//   if (file && file[0]) {
//     const fileType = file[0].type;
//     const fileSize = file[0].size;
//     if (fileType !== "application/pdf") {
//       return "*file must be in PDF format";
//     }
//     if (fileSize > 2 * 1024 * 1024) {
//       return "*file size must not exceed 2MB";
//     }
//   }
//   return true;
// };
// const handleAwardChange = (event) => {
//   const award = event.target.value;
//   setSelectedAward(award);

//   let numberOfFiles = 0;
//   switch (award) {
//     case "Best Choice Award":
//       numberOfFiles = 2;
//       break;
//     case "People's Choice Award":
//       numberOfFiles = 5;
//       break;
//     case "Hr Skills Award":
//       numberOfFiles = 3;
//       break;
//     default:
//       numberOfFiles = 0;
//       break;
//   }

//   setFileInputs(Array(numberOfFiles).fill(null));
// };
// const [selectedAward, setSelectedAward] = useState("");
// const [fileInputs, setFileInputs] = useState([]);
