import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-start">
        <Sidebar />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
