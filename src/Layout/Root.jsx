import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profile from "../../src/assets/profile/profile.png";
import {
  FaAngleDown,
  FaBars,
  FaBell,
  FaCog,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaPlus,
  FaQuestionCircle,
  FaSearchPlus,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const dropDownMenuRef = useRef();

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  const toggleEmailVisibility = () => {
    setIsEmailVisible(!isEmailVisible);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="flex">
      <div className="">
        <div className="w-[250px] bg-white shadow-lg min-h-screen hidden md:block">
          <div className="flex justify-center">
            <h1 className="text-4xl text-[#4285F3] font-bold font-serif w-[109px] h-[45px] mt-[55px] uppercase">
              Logo
            </h1>
          </div>
          <div className="mt-8">
            <ul className="space-y-5 text-md">
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaHome className="mr-2" />
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaPlus className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  New Listing
                </Link>
              </li>

              <li className="text-[#5C635A] flex items-center ml-4">
                <FaSearchPlus className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  Search
                </Link>
              </li>
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaInfoCircle className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaHeart className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  Favorites
                </Link>
              </li>
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaQuestionCircle className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  Help Center
                </Link>
              </li>
              <li className="text-[#5C635A] flex items-center ml-4">
                <FaCog className="mr-2" />
                <Link to="#" className="hover:text-blue-500">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1190px]">
        <div className=" bg-white shadow-md pl-6 pr-10">
          <div className="navbar bg-base-100 flex items-center justify-between">
            <div className="flex-1 hidden md:block">
              <div className="flex gap-x-3 items-center">
                <div className="avatar">
                  <div className="w-9 h-9 rounded-full">
                    <img src={profile} alt="profile" />
                  </div>
                </div>
                <div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={toggleEmailVisibility}
                  >
                    <p className="text-sm mr-2">{user?.displayName}</p>
                    <FaAngleDown
                      className={`transition-transform ${
                        isEmailVisible ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isEmailVisible && <p className="text-sm">{user?.email}</p>}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button className="btn btn-sm btn-circle btn-outline text-[#5C635A] mr-2 md:mr-0">
                <FaBell className="" />
              </button>
              <div className="divider lg:divider-horizontal"></div>

              {user ? (
                <>
                  <button
                    onClick={handleSignOut}
                    className=" text-red-500 hidden md:block "
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button className="btn btn-sm hidden md:block">
                  <Link to="/signin" className="hover:text-blue-500">
                    Sign In
                  </Link>
                </button>
              )}
            </div>
            <div
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className=" transition-transform md:hidden"
            >
              <FaBars />
              {dropDownState && (
                <>
                  <div className="gap-2 bg-gray-50 absolute right-0 top-0 flex w-[200px] flex-col  rounded-lg  z-10 pt-4 pb-6 text-base  ">
                    {user && (
                      <div className="bg-[#156BCA]  h-[232px]">
                        <div className="flex flex-col gap-x-3 space-y-4 items-end justify-center mr-3 mt-20">
                          <div className="avatar">
                            <div className="w-9 h-9 rounded-full">
                              <img src={profile} alt="profile" />
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-end space-y-1 ">
                            <p className="text-xl text-white mr-2">
                              {user?.displayName}
                            </p>
                            <p className="text-sm text-white">{user?.email}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {user ? (
                      <>
                        <button
                          onClick={handleSignOut}
                          className=" text-red-500 "
                        >
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <button className="btn btn-sm">
                        <Link to="/signin" className="hover:text-blue-500">
                          Sign In
                        </Link>
                      </button>
                    )}
                    <ul className="space-y-5 ">
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaHome className="mr-2" />
                        <Link to="/" className="hover:text-blue-500">
                          Home
                        </Link>
                      </li>
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaPlus className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          New Listing
                        </Link>
                      </li>

                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaSearchPlus className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          Search
                        </Link>
                      </li>
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaInfoCircle className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          About
                        </Link>
                      </li>
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaHeart className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          Favorites
                        </Link>
                      </li>
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaQuestionCircle className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          Help Center
                        </Link>
                      </li>
                      <li className="text-[#5C635A] flex items-center ml-4">
                        <FaCog className="mr-2" />
                        <Link to="#" className="hover:text-blue-500">
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                    Home
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    Services
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    About
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    Contact
                  </li>
                </ul> */}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
