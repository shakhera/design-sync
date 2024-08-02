import React from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import AuthPagination from "../../components/AuthPagination/AuthPagination";

const SignIn = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="w-[429px] mx-auto card bg-base-100 shrink-0 ">
            <div className="ml-8">
              <h1 className="text-4xl text-[#4285F3] font-bold font-serif uppercase mb-5">
                Logo
              </h1>
              <div>
                <h2 className="text-2xl font-bold text-[#152A16] mb-3">
                  Log In To Your Account
                </h2>
                <p>Welcome Back! Select a method to log in:</p>
              </div>
            </div>
            <form className="card-body">
              <SocialLogin />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className=" flex justify-between">
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary mr-2"
                    style={{ width: "16px", height: "16px" }}
                  />
                  <span className="label-text">Remember Me</span>
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral bg-[#4285F3]">Login</button>
              </div>
              <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 link link-hover">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
          <div className="w-[508px] mx-auto text-center lg:text-left">
            {/* <img src={bg1} alt="login" className="h-[622px] w-[508px]" /> */}
            <AuthPagination></AuthPagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
