import React from "react";
import AutoPlay from "./HomepageSlider";
// import Responsive from "./MostPopular/Mostpopular";
import "./Home.css";
import Trending from "./Trending";
const Home = () => {
  return (
    <div>
      <h1>Navbar here</h1>
      <AutoPlay />
      <Trending />
      {/* <Responsive /> */}
    </div>
  );
};

export default Home;
