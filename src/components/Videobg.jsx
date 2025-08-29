import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlics";
import useMovieTrailer from "../customhook/useMovieTrailer";

const Videobg = ({ movie }) => {
 console.log(movie)
  useMovieTrailer(movie?.id);
  const trailervid = useSelector((store) => store.movie?.trailer);
  console.log(trailervid)
   if (!trailervid) {
    return <div className="w-screen aspect-video bg-black">Loading</div>; 
    // black placeholder while loading
  }
  return (
    <div className="absolute">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailervid?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobg;
