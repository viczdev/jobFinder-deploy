import React from "react";
import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (event) => {
    if (isLoading) return;
    handleChange({ name: event.target.name, value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>

          <FormRowSelect
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["All", ...statusOptions]}
          ></FormRowSelect>

          <FormRowSelect
            labelText="Job Type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["All", ...jobTypeOptions]}
          ></FormRowSelect>

          <FormRowSelect
            labelText="Sort"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
