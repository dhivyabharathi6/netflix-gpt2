import React, { useEffect } from "react";
import Headers from "./Headers";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlics";
import Maincontainer from "./Maincontainer";
import Secondcontainer from "./Secondcontainer";
import useNowplaying from "../customhook/useNowplaying";
import Videotitle from "./Videotitle";
import usePopular from "../customhook/usePopular";
import useToprated from "../customhook/useToprated";
import useUpcoming from "../customhook/useUpcoming";
import Gptsearch from "./Gptsearch";

const Browse = () => {
  let showgpt = useSelector((store) => store.gpt.showgpt);

  useNowplaying();
  usePopular();
  useToprated();
  useUpcoming();

  return (
    <div>
      <Headers />
      {showgpt ? <Gptsearch /> : 
         <>
           <Maincontainer />
           <Secondcontainer />
         </>
      }
  
    </div>
  );
};

export default Browse;
