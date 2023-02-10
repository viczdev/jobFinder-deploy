import React from "react";
import StatsItem from "./StatsItem";
import { useAppContext } from "../context/appContext";
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaRegSmileBeam,
} from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: "Pending Applications",
      count: stats.Pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "Interviews Scheduled",
      count: stats.Interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Jobs Declined",
      count: stats.Declined || 0,
      icon: <TbMoodSad />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "Jobs Offered",
      count: stats.Offer || 0,
      icon: <FaRegSmileBeam />,
      color: "#336600",
      bcg: "#00CC00",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item}></StatsItem>;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
