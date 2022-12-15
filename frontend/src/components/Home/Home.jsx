import React from "react";
import AutoPlay from "./HomeSlider/HomepageSlider";
import "./Home.css";
import Trending from "./Trending/index";
import CurrentData from "./CurrentData/CurrentData";
import ComedyData from "./ComedyData/ComedyData";
import FutureReleased from "./FutureRelease/FutureRelease";
const Home = () => {
  return (
    <div>
      <h1>Navbar here</h1>
      <AutoPlay />
      <Trending />
      <CurrentData />
      <ComedyData />
      <FutureReleased />
    </div>
  );
};

export default Home;
