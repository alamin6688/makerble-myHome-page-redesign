import React from "react";
import { Helmet } from "react-helmet-async";
import Dashboard from "../Dashboard/Dashboard";

const MyHome = () => {
  return (
    <>
      <Helmet>
        <title>My Home | Makerble</title>
      </Helmet>
      <div>
        <Dashboard></Dashboard>
      </div>
    </>
  );
};

export default MyHome;
