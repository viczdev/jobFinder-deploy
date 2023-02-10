import React from "react";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <React.Fragment>
      <StatsContainer></StatsContainer>
      {monthlyApplications.length > 0 && <ChartsContainer></ChartsContainer>}
    </React.Fragment>
  );
};

export default Stats;
