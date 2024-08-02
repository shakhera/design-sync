import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
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

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

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
              <a className="btn btn-circle text-xl">
                <FaUser />
              </a>
            </div>

            <div className="flex justify-between">
              <button className="btn btn-sm btn-circle btn-outline text-[#5C635A] mr-2 md:mr-0">
                <FaBell className="" />
              </button>
              <div className="divider lg:divider-horizontal"></div>

              <button className="btn btn-sm hidden md:block">
                <Link to="/signin" className="hover:text-blue-500">
                  Sign In
                </Link>
              </button>
            </div>
            <div
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className=" transition-transform md:hidden"
            >
              <FaBars />
              {dropDownState && (
                <>
                  <div className="gap-2 bg-gray-50 absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base  ">
                    <h1 className="text-4xl text-[#4285F3] font-bold font-serif w-[109px] h-[45px] mt-[55px] uppercase">
                      Logo
                    </h1>
                    <button className="btn btn-sm ">
                      <Link to="/signin" className="hover:text-blue-500">
                        Sign In
                      </Link>
                    </button>
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
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Navbar;
