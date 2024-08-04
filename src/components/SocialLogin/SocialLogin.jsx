import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signWithGoogle, signWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignWithGoogle = () => {
    signWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleSignWithFacebook = () => {
    signWithFacebook()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={handleSignWithGoogle}
          className="flex h-10 w-full items-center justify-center gap-1 rounded-md  bg-gradient-to-r from-gray-200 to-gray-50 px-4 py-2 text-sm font-medium "
        >
          <FaGoogle />
          Google
        </button>
        <button
          onClick={handleSignWithFacebook}
          className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          <FaFacebook />
          Facebook
        </button>
      </div>
      <div className="divider text-sm">Or Continue with Email</div>
    </div>
  );
};

export default SocialLogin;
