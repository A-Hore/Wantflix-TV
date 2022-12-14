import React from "react";
import AutoPlay from "./HomepageSlider";
// import Responsive from "./MostPopular/Mostpopular";
import "./Home.css";
import Trending from "./Trending";

import Homec from "../../Dibyanshu/components/Home1/Homec";

const Home = () => {
  return (
    <div>
      <h1>Navbar here</h1>
      <AutoPlay />
      <Trending />
      {/* <Responsive /> */}

      <Homec/>
    </div>
  );
};

export default Home;
