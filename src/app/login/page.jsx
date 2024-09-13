"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux"; // To store tokens in Redux
import { toast } from "react-toastify"; // For showing toast messages
import { LoginEmail, VerifyOTP } from "../functions/ServerFunctions";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false); // Controls OTP input visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [issubmitting, setIssubmitting]=useState(false)
  const dispatch = useDispatch(); // Redux dispatch

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
  
    // Allow only numeric input
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value); // Set OTP state only if the input is numeric
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSendOtp = async () => {
    if (!validateEmail()) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage(""); // Clear any previous errors
    setLoading(true); // Show the loader

    try {
      const response = await LoginEmail({ email: email });
      if (response.status === 200) {
        toast.success("OTP Sent Successfully!");
        setShowOtpInput(true); // Show the OTP input field
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
    } finally {
      setLoading(false); // Hide the loader
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIssubmitting(true)
    if (otp.trim() === "") {
      setErrorMessage("Please enter the OTP.");
      setIssubmitting(false)

      return;
    }
    setErrorMessage(""); // Clear any previous errors

    try {
      const response = await VerifyOTP({ email: email, otp: otp });
      if (response.status === 200) {
        // Assuming accessToken and refreshToken are returned from the server
        const { accessToken, refreshToken, userDetails } = response.data;

        // Dispatch tokens to Redux for global state management
        dispatch({
          type: "SET_TOKENS",
          payload: { accessToken, refreshToken, userDetails },
        });

        toast.success("OTP Verified Successfully. Welcome!");
        router.push("/dashboard")
      } else {
        toast.error("Invalid OTP. Please try again.");
        console.log("Invalid OTP")
      }
    } catch (error) {
      toast.error("OTP verification failed. Please try again.");
    } finally {
      setIssubmitting(false)
    }
  };

  return (
    <div className={`login-bg h-screen w-full flex items-center justify-center `}>

      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Images/cusp-logo.webp"
            className="w-24 mb-4"
            alt="cusp-logo"
            width={96}
            height={96}
          />
          <h1 className="font-[700] text-[#153060] text-[40px] mb-2 ad">
            Login
          </h1>
        </div>

        {/* Email Input */}
        <form className="flex flex-col" onSubmit={handleLogin}>
          <label
            htmlFor="email"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="testmail@xyz.com"
            value={email}
            onChange={handleInputChange}
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
            disabled={showOtpInput} // Disable email input after OTP is sent
          />

          {/* OTP Input */}
          {showOtpInput && (
            <>
              <label
                htmlFor="otp"
                className="mb-2 text-[14px] font-[400] text-[#153060]"
              >
                OTP
              </label>
              <input
                type="password"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"

              />
            </>
          )}

          {errorMessage && (
            <p className="text-red-500 text-center text-sm mb-4">
              {errorMessage}
            </p>
          )}

          <div className="flex justify-center w-full gap-3 mt-4">
            {!showOtpInput ? (
              <div className="w-full">
                {/* Send OTP Button */}
                <button
                  type="button"
                  className="bg-[#0BB68D] text-white py-2 text-[14px] rounded uppercase w-full"
                  onClick={handleSendOtp}
                  disabled={loading}
                >
                  {loading ? "Please wait.." : "Send OTP"}
                </button>
              </div>
            ) : (
              <>
                {/* Resend OTP Button */}
                <div className="w-1/2">
                  <button
                    type="button"
                    className="border-[#0BB68D] border text-[#0BB68D] py-2 text-[14px] rounded uppercase w-full"
                    onClick={handleSendOtp} // Reuse the Send OTP logic
                    disabled={loading}
                  >
                    {loading ? "Please wait.." : "Resend OTP"}
                  </button>
                </div>

                {/* Login Button */}
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="bg-[#0BB68D] text-white py-2 text-[14px] rounded uppercase w-full"
                    disabled={issubmitting}
                  >
                  {issubmitting ? "Please wait.." : "Login"}
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

    </div>
  );
}
