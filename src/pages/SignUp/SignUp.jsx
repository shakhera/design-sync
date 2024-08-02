import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthPagination from "../../components/AuthPagination/AuthPagination";

const SignUp = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);

  const togglePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  const toggleConfirmPassVisibility = () => {
    setConfirmPassVisible(!confirmPassVisible);
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-[429px] mx-auto card bg-base-100 shrink-0">
            <div className="ml-8">
              <h1 className="text-4xl text-[#4285F3] font-bold font-serif uppercase mb-5">
                Logo
              </h1>
              <div>
                <h2 className="text-2xl font-bold text-[#152A16] mb-3">
                  Sign Up To Your Account
                </h2>
                <p>
                  Welcome Back! By clicking the sign up button, you agree to
                  Zenitood Terms and Service and acknowledge the{" "}
                  <a href="#" className="text-blue-500 link link-hover">
                    Privacy and Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 mt-10 flex items-center cursor-pointer"
                  onClick={togglePassVisibility}
                >
                  {passVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={confirmPassVisible ? "text" : "password"}
                  placeholder="Re-type password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 mt-10 flex items-center cursor-pointer"
                  onClick={toggleConfirmPassVisibility}
                >
                  {confirmPassVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary mr-2"
                    style={{ width: "16px", height: "16px" }}
                    required
                  />
                  <span className="label-text">Accept Terms of Service</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral bg-[#4285F3]">
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-500 link link-hover">
                  Log In
                </Link>
              </p>
            </form>
          </div>
          <div className="w-[508px] mx-auto text-center lg:text-left">
            <AuthPagination></AuthPagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;