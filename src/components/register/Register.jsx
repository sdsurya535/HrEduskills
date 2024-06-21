import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import mainteam from "../../assets/mainteam.jpg";

export default function Register() {
  const [selectedAward, setSelectedAward] = useState("");
  const [fileInputs, setFileInputs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();

  const handleAwardChange = (event) => {
    const award = event.target.value;
    setSelectedAward(award);

    let numberOfFiles = 0;
    if (award === "Best Choice Award") {
      numberOfFiles = 2;
    } else if (award === "People's Choice Award") {
      numberOfFiles = 4;
    }

    setFileInputs(Array(numberOfFiles).fill(null));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="registration">
      <motion.div
        className="grid grid-cols-1 max-w-screen-xl mx-auto lg:grid-cols-2 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Now you don't have to rely on your designer to create a new page
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
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
                    Commercial License
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
                    Unlimited Exports
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
                    120+ Coded Blocks
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
                    Design Files Included
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <motion.div
            className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              REGISTER
            </h2>
            <p className="mt-2 text-base text-gray-600"></p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
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
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
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
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
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
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="phone"
                      className="text-base font-medium text-gray-900"
                    >
                      Mobile Number
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("phone", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="mobile number"
                      id="phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
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
                      Company
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("company", {
                        required: "Company is required",
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="company"
                      id="company"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message}
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
                      Designation
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      {...register("designation", {
                        required: "Designation is required",
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="designation"
                      id="designation"
                    />
                    {errors.designation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.designation.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="award"
                    className="text-base font-medium text-gray-900"
                  >
                    Award
                  </label>
                  <div className="mt-2">
                    <select
                      {...register("award", {
                        required: "Award selection is required",
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="award"
                      value={selectedAward}
                      onChange={handleAwardChange}
                    >
                      <option value="">Select an award</option>
                      <option value="Best Choice Award">
                        Best Choice Award
                      </option>
                      <option value="People's Choice Award">
                        People's Choice Award
                      </option>
                    </select>
                    {errors.award && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.award.message}
                      </p>
                    )}
                  </div>
                </div>

                {fileInputs.map((_, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`file-${index}`}
                      className="text-base font-medium text-gray-900"
                    >
                      Supportive Document {index + 1}
                    </label>
                    <div className="mt-2">
                      <input
                        {...register(`file-${index}`, {
                          required: "File is required",
                        })}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-gray-200"
                        id={`file-${index}`}
                        type="file"
                      />
                      {errors[`file-${index}`] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[`file-${index}`].message}
                        </p>
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
                      {...register("message", {
                        required: "Message is required",
                      })}
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    REGISTER HERE <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 w-full space-y-3"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
