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


import { jumboSliderData } from "./MiniBanner/Data";
import MiniBanner from "./MiniBanner/MiniBanner";
import Kids from "./Kids/Kids";
import Drama from "./Drama/Drama";








const Home = () => {
  return (
    <div>
      <AutoPlay />
      <Trending />
      <Popular />
      <CurrentData />
      <ComedyData />
      <MiniBanner data={jumboSliderData} />
      <FutureReleased />
      <Historical />
      <Original />
      <Kids/>
      <Drama/>
  
    </div>
  );
};

export default Home;
