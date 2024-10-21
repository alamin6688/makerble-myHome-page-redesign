import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { BsQuestionCircleFill } from "react-icons/bs";
import { CgMoreVerticalO, CgProfile } from "react-icons/cg";
import { FaBoltLightning } from "react-icons/fa6";
import { IoIosCreate, IoMdArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the visibility of "My Apps"
  const [isAppVisible, setIsAppVisible] = useState(false);

  // Toggle the visibility of "My Apps"
  const toggleAppVisibility = () => {
    setIsAppVisible((prevState) => !prevState);
  };

  return (
    <section className="bg-gray-100">
      <div className="navbar h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  className="text-gray-900 font-poppins hover:font-semibold text-lg flex items-center justify-between"
                  onClick={toggleAppVisibility}
                >
                  My Apps
                  <span>
                    <IoMdArrowDropdownCircle className="text-2xl text-gray-700" />
                  </span>
                </a>
                {/* Conditional rendering for "My Apps" */}
                {isAppVisible && (
                  <ul className="ml-4">
                    <li>
                      <a className="text-gray-800 font-poppins hover:font-semibold text-lg">
                        App 01
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-800 font-poppins hover:font-semibold text-lg">
                        App 02
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a className="text-gray-900 font-poppins hover:font-semibold text-lg">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-900 font-poppins hover:font-semibold text-lg">
                  Explore
                </a>
              </li>
              {/* Search Input For Small Devices */}
              <li>
                <a>
                  <div className="md:hidden form-control flex items-center justify-start">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-full md:w-auto"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl md:text-3xl lg:text-4xl px-0 md:px-1 tracking-wider"
          >
            Makerble
          </Link>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {/* Search Input For Medium To Large Devices */}
          <div className="hidden form-control md:flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for contacts or events"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          {/* Know More Icon */}
          <div className="hidden md:flex items-center justify-center px-2 btn btn-circle btn-ghost">
            <BsQuestionCircleFill className="w-6 h-6 text-[#293EE8]" />
          </div>

          {/* Alert Icon */}
          <div className="hidden md:flex items-center justify-center indicator px-2 btn btn-circle btn-ghost">
            <AiFillAlert className="w-8 h-8 text-red-600" />
            <span className="badge badge-neutral indicator-item">10</span>
          </div>

          {/* Bolt Icon */}
          <div className="hidden md:flex items-center justify-center px-2 btn btn-circle btn-ghost">
            <FaBoltLightning className="w-6 h-6 text-gray-900" />
          </div>

          {/* Notification Button */}
          <div className="flex items-center justify-center mr-2">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-primary indicator-item">+99</span>
              </div>
            </button>
          </div>

          {/* Profile */}
          <div className="dropdown dropdown-end relative flex items-center justify-center pr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 md:w-12 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box w-52 p-2 shadow absolute top-full mt-2 z-5 space-y-1"
            >
              <li>
                <a className="text-gray-900 font-poppins font-semibold text-sm flex items-center justify-between tracking-wide">
                  Sportykids Admin
                  <span>
                    <CgProfile className="text-2xl text-gray-900" />
                  </span>
                </a>
              </li>
              <li>
                <a className="justify-between text-gray-900 font-poppins hover:font-semibold text-lg">
                  Messages
                  <span className="badge bg-blue-700 text-white py-3">+99</span>
                </a>
              </li>
              <li>
                <a className="text-gray-900 font-poppins hover:font-semibold text-lg flex items-center justify-between">
                  Create
                  <span>
                    <IoIosCreate className="text-2xl text-blue-800 hover:text-blue-600" />
                  </span>
                </a>
              </li>
              <li>
                <a className="text-gray-900 font-poppins hover:font-semibold text-lg flex items-center justify-between">
                  More
                  <span>
                    <CgMoreVerticalO className="text-2xl text-gray-900" />
                  </span>
                </a>
              </li>
              <li>
                <button className="btn bg-red-600 hover:bg-red-500 text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
