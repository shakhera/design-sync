import React, { useContext } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import AuthPagination from "../../components/AuthPagination/AuthPagination";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col-reverse lg:flex-row ">
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <SocialLogin />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
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
            <AuthPagination></AuthPagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
