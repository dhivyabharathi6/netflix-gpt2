import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlics";
import { useEffect } from "react";

let useMovieTrailer =(movie_id)=>{
   
  
  let dispatch= useDispatch()
  let getvideos = async () => {
    let videos = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "/videos",
      API_OPTIONS
    );
    let mvideos = await videos.json();
 
  
    let trailers = mvideos.results.filter((videos) => videos?.type == "Trailer");
    let trailer = trailers.length ? trailers[0] : mvideos.results[0];
    dispatch(addTrailer(trailer))
   
    
  };

  useEffect(() => {
    getvideos();
  }, []);
}

export default useMovieTrailer