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



import { Footer } from "../Footer/Footer"

import Kids from "./Kids/Kids";
import Drama from "./Drama/Drama";
import Clitter from "./Clitter/Clitter";
import Music from "./Music/Music";



import Minishowcase from "./Minishowcase/Minishowcase";
import Homec from "./Upcomming/Homec";
import { jumboSliderData } from "./Data/Data";





const Home = () => {
  return (
    <div>
      <AutoPlay />
       <Homec />

      <Trending />
      <hr className="colourhr" />
      <Popular />
      <hr className="colourhr" />
      <CurrentData />
      <hr className="colourhr" />
      <ComedyData />
  

      <Minishowcase data={jumboSliderData}/>


      <FutureReleased />
      <hr className="colourhr" />
    
      <Historical />
      <hr className="colourhr" />
      <Original />
      <hr className="colourhr" />
      <Kids/>
      <hr className="colourhr" />
      <Drama/>
      <hr className="colourhr" />
      <Clitter/>
      <hr className="colourhr" />
    
      <Music/>
      
      <Footer/>
      
    </div>
  );
};

export default Home;
