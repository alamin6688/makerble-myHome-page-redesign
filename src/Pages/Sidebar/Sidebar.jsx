import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { GoProjectSymlink, GoSidebarCollapse } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { HiNewspaper } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { LuClipboardSignature, LuSettings } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <aside
      className={`bg-gray-100 ${
        isCollapse ? "w-[40%] md:w-[20%] lg:w-[15%]" : "w-[80px]"
      }
     min-h-screen boxShadow transition-all duration-300 ease`}
    >
      <div
        className={`pt-4 ${
          isCollapse ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {isCollapse ? (
          <div className="flex items-center justify-between">
            <div className="pl-1">
              <h1 className="text-2xl font-extrabold tracking-wide  text-gray-800">
                Mekrble
              </h1>
            </div>
            <div className="relative group">
              <GoSidebarCollapse
                className="text-[1.5rem] text-gray-600 cursor-pointer"
                onClick={() => setIsCollapse(false)}
              />

              {/* tooltip */}
              <div
                className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                  Collapse
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setIsCollapse(!isCollapse)}
              class="w-[50px] mx-auto cursor-pointer flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              M
            </button>
          </div>
        )}

        {/* search bar */}
        {isCollapse ? (
          <div className="relative mt-5">
            <input
              className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
          </div>
        ) : (
          <div className="w-full relative group">
            <IoIosSearch className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />

            {/* tooltip */}
            <div
              className={`${
                isCollapse ? "hidden" : "inline"
              } absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
            >
              <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                Search
              </p>
            </div>
          </div>
        )}
      </div>

      {/* general section */}
      <div
        className={`mt-6 ${
          isCollapse ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Newsfeed */}
        <NavLink to={`/`}>
          <div className="mt-3 flex flex-col gap-[5px]">
            <div
              className={`${
                isCollapse ? "justify-between" : "justify-center"
              } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
            >
              <div className="flex items-center gap-[8px]">
                <HiNewspaper className="text-[1.3rem] text-gray-500" />
                <p
                  className={`${
                    isCollapse ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  Newsfeed
                </p>
              </div>

              {/* tooltip */}
              <div
                className={`${
                  isCollapse ? "hidden" : "inline"
                } absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                  Newsfeed
                </p>
              </div>
            </div>

            {/* Events */}
            <NavLink to={"/events"}>
              <div
                className={`${
                  isCollapse ? "justify-between" : "justify-center"
                } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
              >
                <div className="flex items-center gap-[8px]">
                  <CiCalendar className="text-[1.3rem] text-gray-500" />
                  <p
                    className={`${
                      isCollapse ? "inline" : "hidden"
                    } text-[1rem] font-[400] text-gray-500`}
                  >
                    Events
                  </p>
                </div>

                {/* tooltip */}
                <div
                  className={`${
                    isCollapse ? "hidden" : "inline"
                  } absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
                >
                  <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                    Events
                  </p>
                </div>
              </div>
            </NavLink>
            {/* Tasks */}
            <div
              className={`${
                isCollapse ? "justify-between" : "justify-center"
              } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
            >
              <div className="flex items-center gap-[8px]">
                <FaTasks className="text-[1.3rem] text-gray-500" />
                <p
                  className={`${
                    isCollapse ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  Tasks
                </p>
              </div>

              {/* tooltip */}
              <div
                className={`${
                  isCollapse ? "hidden" : "inline"
                } absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                  Tasks
                </p>
              </div>
            </div>
            <div
              className={`${isCollapse && "justify-center"} ${
                isDropdownOpen && "bg-gray-50"
              }  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className={`${
                  isCollapse ? " justify-between" : "justify-center"
                } flex items-center gap-[8px  w-full`}
              >
                <div className="flex items-center gap-[8px]">
                  <GoProjectSymlink className="text-[1.3rem] text-gray-500" />
                  <p
                    className={`${
                      isCollapse ? "inline" : "hidden"
                    } text-[1rem] font-[400] text-gray-500`}
                  >
                    Projects
                  </p>
                </div>

                <IoIosArrowDown
                  className={`${
                    isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                  } ${
                    isCollapse ? "inline" : "hidden"
                  } transition-all duration-300 text-[1rem] text-gray-500`}
                />
              </div>

              {!isCollapse && (
                <>
                  {/* hover projects dropdown */}
                  <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                    <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                      Google
                    </li>
                    <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                      Facebook
                    </li>
                    <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                      Twitter
                    </li>
                    <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">
                      Linkedin
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* active projects dropdown */}
            <ul
              className={`${
                isDropdownOpen
                  ? "h-auto my-3 opacity-100 z-[1]"
                  : "opacity-0 z-[-1] h-0"
              } ${
                isCollapse ? "inline" : "hidden"
              } transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500`}
            >
              <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                Google
              </li>
              <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                Facebook
              </li>
              <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                Twitter
              </li>
              <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                Linkedin
              </li>
            </ul>

            <div
              className={`${
                isCollapse ? "justify-between" : "justify-center"
              } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
            >
              <div className="flex items-center gap-[8px]">
                <FiBarChart className="text-[1.3rem] text-gray-500" />
                <p
                  className={`${
                    isCollapse ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  Personal Progress
                </p>
              </div>

              {/* tooltip */}
              <div
                className={`${
                  isCollapse ? "hidden" : "inline"
                } absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                  Personal Progress
                </p>
              </div>
            </div>
            {/* Boards */}
            <div
              className={`${
                isCollapse ? "justify-between" : "justify-center"
              } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
            >
              <div className="flex items-center gap-[8px]">
                <LuClipboardSignature className="text-[1.3rem] text-gray-500" />
                <p
                  className={`${
                    isCollapse ? "inline" : "hidden"
                  } text-[1rem] font-[400] text-gray-500`}
                >
                  Boards
                </p>
              </div>

              {/* tooltip */}
              <div
                className={`${
                  isCollapse ? "hidden" : "inline"
                } absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                  Boards
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      {/* Notoficaton & Setting section */}
      <div
        className={`${
          isCollapse ? "px-[20px]" : "px-[10px]"
        } mt-6 border-t border-gray-200  transition-all duration-300 ease-in-out`}
      >
        <div className="mt-3 flex flex-col gap-[5px]">
          {/* Home */}
          <div
            className={`${
              isCollapse ? "justify-between" : "justify-center"
            } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
          >
            <div className="flex items-center gap-[8px]">
              <TiHomeOutline className="text-[1.3rem] text-gray-500" />
              <p
                className={`${
                  isCollapse ? "inline" : "hidden"
                } text-[1rem] font-[400] text-gray-500`}
              >
                Home
              </p>
            </div>

            {/* tooltip */}
            <div
              className={`${
                isCollapse ? "hidden" : "inline"
              } absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
            >
              <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                Home
              </p>
            </div>
          </div>
          {/* Notifications */}
          <div
            className={`${
              isCollapse ? "justify-between" : "justify-center"
            } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
          >
            <div className="flex items-center gap-[8px]">
              <MdOutlineNotificationsActive className="text-[1.3rem] text-gray-500" />
              <p
                className={`${
                  isCollapse ? "inline" : "hidden"
                } text-[1rem] font-[400] text-gray-500`}
              >
                Notifications
              </p>
            </div>

            {/* tooltip */}
            <div
              className={`${
                isCollapse ? "hidden" : "inline"
              } absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
            >
              <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                Notifications
              </p>
            </div>
          </div>
          {/* Settings */}
          <div
            className={`${
              isCollapse ? "justify-between" : "justify-center"
            } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
          >
            <div className="flex items-center gap-[8px]">
              <LuSettings className="text-[1.3rem] text-gray-500" />
              <p
                className={`${
                  isCollapse ? "inline" : "hidden"
                } text-[1rem] font-[400] text-gray-500`}
              >
                Settings
              </p>
            </div>

            {/* tooltip */}
            <div
              className={`${
                isCollapse ? "hidden" : "inline"
              } absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
            >
              <p className="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">
                Settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
