import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({ email: "", otp: "" });
  const [timer, setTimer] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [resendEnabled, setResendEnabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && otpSent) {
      setResendEnabled(true);
      setAlert({ type: "error", message: "OTP expired. Please resend OTP." });
    }
    return () => clearInterval(interval);
  }, [timer, otpSent]);

  const resetState = () => {
    setEmail("");
    setOtp("");
    setLoading(false);
    setOtpSent(false);
    setAlert({ type: "", message: "" });
    setErrors({ email: "", otp: "" });
    setTimer(0);
    setAttempts(0);
    setResendEnabled(false);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.length !== 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: "OTP must be 6 digits",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, otp: "" }));
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      return;
    }

    sendOtp();
  };

  const sendOtp = () => {
    setLoading(true);
    setAlert({ type: "", message: "" });

    // Simulate API call to send OTP
    setTimeout(() => {
      setLoading(false);
      if (email === "test@example.com") {
        setOtpSent(true);
        setAlert({ type: "success", message: "OTP sent successfully!" });
        setTimer(60); // Set timer for 1 minute
        setResendEnabled(false);
      } else {
        setAlert({ type: "error", message: "Failed to send OTP. Try again." });
      }
    }, 2000);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: "OTP must be 6 digits",
      }));
      return;
    }

    setLoading(true);
    setAlert({ type: "", message: "" });

    // Simulate API call to verify OTP
    setTimeout(() => {
      setLoading(false);
      if (otp === "123456") {
        // Assume '123456' is the correct OTP for demonstration
        setAlert({ type: "success", message: "OTP verified successfully!" });
        navigate("/admin/table"); // Redirect to /admin/table on successful OTP verification
      } else {
        setAttempts((prevAttempts) => {
          if (prevAttempts + 1 >= 4) {
            resetState();
            return 0;
          }
          return prevAttempts + 1;
        });
        setAlert({ type: "error", message: "Invalid OTP. Try again." });
      }
    }, 2000);
  };

  const handleResendOtp = () => {
    sendOtp();
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {otpSent ? "Enter OTP" : "Enter Your Email to Get OTP"}
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={otpSent ? handleOtpSubmit : handleEmailSubmit}
              >
                {!otpSent && (
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`bg-gray-50 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="name@company.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                )}
                {otpSent && (
                  <div>
                    <label
                      htmlFor="otp"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      className={`bg-gray-50 border ${
                        errors.otp ? "border-red-500" : "border-gray-300"
                      } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleOtpChange}
                    />
                    {errors.otp && (
                      <p className="mt-2 text-sm text-red-600">{errors.otp}</p>
                    )}
                    {timer > 0 && (
                      <p className="mt-2 text-sm text-gray-600">
                        OTP valid for {timer} seconds
                      </p>
                    )}
                    {resendEnabled && (
                      <button
                        type="button"
                        className="mt-2 text-sm text-blue-500 hover:underline"
                        onClick={handleResendOtp}
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : otpSent
                    ? "Submit OTP"
                    : "GET OTP"}
                </button>
              </form>
              {alert.message && (
                <div
                  className={`mt-4 p-4 text-sm ${
                    alert.type === "success"
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                  } rounded-lg`}
                  role="alert"
                >
                  {alert.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
