import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const JobContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    clearValues,
    search,
    searchStatus,
    searchType,
    sort,
  } = useAppContext();

  useEffect(() => {
    getJobs();
    clearValues();
  }, [search, searchStatus, searchType, sort, page]);

  if (isLoading) {
    return <Loading center></Loading>;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job}></Job>;
        })}
      </div>
      <PageBtnContainer></PageBtnContainer>
    </Wrapper>
  );
};

export default JobContainer;
