import React from 'react'
import { DefaultPlayer as Video } from "react-html5video";
// import {Video, Overlay, Controls} from 'react-html5-video-editor';
import 'react-html5video/dist/styles.css'

import Defending from "./vid/Defending.mp4";
import Black from "./vid/Black.jpg";

const ReactVideoplayer = () => {
     

  return (
    <Video 
  
    poster={Black}
    style={{"width":"900px","height":"550px","margin":"auto","marginTop":"15px"}}
    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen','muted'
   ,'loop','autoPlay muted',
     ]}
           
         
            
            
           
    >
          
          <source src={Defending} type="video/webm"/>
         
          <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
    </Video>
  )
}

export default ReactVideoplayer;