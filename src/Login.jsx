"use client"
import React, { useState } from "react";
import Image from "next/image";
export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailOrPhone)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setErrorMessage("Please enter a valid  email address.");
      return;
    }

    if (otp.trim() === "") {
      setErrorMessage("Please enter the OTP.");
      return;
    }

    // Handle successful login
    setErrorMessage(""); // Clear error messages
    // Proceed with your login logic here
  };

  return (
    <div className="login-bg h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center mb-6">
          <img src="/Images/cusp-logo.webp" className="w-24 mb-4" alt="cusp-logo" width={96} />
          <h1 className="font-[700] text-[#153060] text-[40px] mb-2 ad">
            Login
          </h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="emailOrPhone"
            className="mb-2 text-[14px] font-[400] text-[#153060]"
          >
            Email
          </label>
          <input
            type="text"
            id="emailOrPhone"
            placeholder="testmail@xyz.com"
            value={emailOrPhone}
            onChange={handleInputChange}
            className="mb-4 p-2 text-[14px] font-[400] border border-gray-300 rounded placeholder-[#9BADCA] focus:outline-none"
            required
          />
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
            required
          />

          {errorMessage && (
            <p className="text-red-500 text-center text-sm mb-4">
              {errorMessage}
            </p>
          )}

          <div className="flex justify-center w-full gap-3 mt-4">
            <div className="w-1/2">
              <button
                type="button"
                className="border-[#0BB68D] border text-[#0BB68D] py-2 text-[14px] rounded uppercase w-full"
                onClick={() => {
                  // Handle resend OTP logic here
                }}
              >
                Resend OTP
              </button>
            </div>
            <div className="w-1/2">
              <button
                type="submit"
                className="bg-[#0BB68D] text-white py-2 text-[14px] rounded uppercase w-full"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


