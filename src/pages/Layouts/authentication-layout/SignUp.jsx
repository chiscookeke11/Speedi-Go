"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const SignUp = ({ darkMode }) => {
  const navigate = useNavigate();
  const { signUpNewUser } = UserAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      setErrorMessageEmail(validateEmail(value) ? "" : "Please enter a valid email address");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormErrorMessage("Full name is required");
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormErrorMessage("Enter a valid email address");
      return;
    }

    if (!validatePassword(formData.password)) {
      setFormErrorMessage("Password must be at least 6 characters");
      return;
    }

    setFormErrorMessage("");
    setLoading(true);

    try {
      const result = await signUpNewUser(formData.email, formData.password, formData.name);

      if (result.success) {
        navigate("/sign-in");
      } else if (result.message?.toLowerCase().includes("already")) {
        setFormErrorMessage("This email is already registered. Please sign in.");
      } else {
        setFormErrorMessage(result.message || "Sign up failed");
      }
    } catch (error) {
      setFormErrorMessage("An error occurred during sign-up");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center px-4 py-4 gap-5 text-center ${
        darkMode ? "bg-[#141924]" : "bg-white"
      }`}
    >
      <h1 className={`text-2xl font-semibold ${darkMode ? "text-[#EFF1F4]" : "text-[#21252C]"}`}>Sign Up</h1>

      <form onSubmit={handleSignUp} className="w-full py-1 max-w-md">
        {/* Full Name */}
        <label
          htmlFor="name"
          className={`flex flex-col gap-2 text-start my-5 text-base font-medium ${
            darkMode ? "text-[#EFF1F4]" : "text-[#21252C]"
          }`}
        >
          Full Name
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            className={`w-full p-4 rounded-lg outline-none ${
              darkMode
                ? "bg-[#2B303A] border border-[#6D7688] text-[#EFF1F4] placeholder-[#6D7688]"
                : "bg-white border border-[#CFD5DB] text-[#21252C] placeholder-[#BABFC5]"
            }`}
            value={formData.name}
            required
          />
        </label>

        {/* Email Address */}
        <label
          htmlFor="email"
          className={`flex flex-col gap-2 text-start my-5 text-base font-medium ${
            darkMode ? "text-[#EFF1F4]" : "text-[#21252C]"
          }`}
        >
          Email Address
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className={`w-full p-4 rounded-lg outline-none ${
              darkMode
                ? "bg-[#2B303A] border border-[#6D7688] text-[#EFF1F4] placeholder-[#6D7688]"
                : "bg-white border border-[#CFD5DB] text-[#21252C] placeholder-[#BABFC5]"
            }`}
            value={formData.email}
            required
          />
          {errorMessageEmail && <p className="text-[#F33D3D] text-sm font-normal">{errorMessageEmail}</p>}
        </label>

        {/* Password */}
        <label
          htmlFor="password"
          className={`flex flex-col gap-2 text-start my-5 text-base font-medium ${
            darkMode ? "text-[#EFF1F4]" : "text-[#21252C]"
          }`}
        >
          Password
          <div
            className={`w-full flex items-center rounded-lg border ${
              darkMode ? "bg-[#2B303A] border-[#6D7688]" : "bg-white border-[#CFD5DB]"
            }`}
          >
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className={`flex-grow p-4 outline-none border-none rounded-lg ${
                darkMode
                  ? "bg-[#2B303A] text-[#EFF1F4] placeholder-[#6D7688]"
                  : "bg-white text-[#21252C] placeholder-[#BABFC5]"
              }`}
              value={formData.password}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={`w-12 h-12 flex items-center justify-center ${darkMode ? "text-[#BABFC5]" : "text-[#76889A]"}`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </label>

        {/* Error Message */}
        {formErrorMessage && <p className="text-[#F33D3D] text-sm font-normal mb-3">{formErrorMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-4 rounded-[8px] text-base font-semibold ${
            darkMode ? "bg-[#D7E0EE] text-[#21252C]" : "bg-[#21252C] text-white"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <Link to="/sign-in">
        <p className={`text-sm font-normal ${darkMode ? "text-[#8A9199]" : "text-[#76889A]"}`}>
          Already have an account? <span className={darkMode ? "text-white" : "text-[#21252C]"}>Sign In</span>
        </p>
      </Link>

      <p className="text-[#76889A] text-sm font-normal">Or sign up with</p>
    </div>
  );
};

export default SignUp;
