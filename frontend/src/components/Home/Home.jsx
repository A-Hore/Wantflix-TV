import React from "react";
import AutoPlay from "./HomeSlider/HomepageSlider";
import "./Home.css";
import Trending from "./Trending/index";
import CurrentData from "./CurrentData/CurrentData";
import ComedyData from "./ComedyData/ComedyData";
import FutureReleased from "./FutureRelease/FutureRelease";
import Historical from "./HistoricalDrama/HistoricalDrama";
import Original from "./Original/original";
import Popular from "./MostPopular/Mostpopular";

const Home = () => {
  return (
    <div>
      <AutoPlay />
      <Trending />
      <Popular />
      <CurrentData />
      <ComedyData />
      <FutureReleased />
      <Historical />
      <Original />
    </div>
  );
};

export default Home;
