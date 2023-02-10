import React from "react";
import { JobContainer, SearchContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const AllJobs = () => {
  return (
    <React.Fragment>
      <SearchContainer></SearchContainer>
      <JobContainer></JobContainer>
    </React.Fragment>
  );
};

export default AllJobs;
