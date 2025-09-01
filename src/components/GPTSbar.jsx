import React, { use, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LANGUAGES } from "../utils/constants";
import lang from "../utils/langConstant";
import openai from "../utils/openai";
import { addGptMovies } from "../utils/gptSlice";

const GPTSbar = () => {
  let dispatch = useDispatch()
  let searchtext = useRef(null);
  let langkey = useSelector((store) => store.config.language);

  let searchmovie =async(movie)=>{
    console.log(movie)
    let data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
    let json = await data.json()
    console.log(json.results)
    let filteredMov = await json.results.filter(m=> m.title && m.title?.trim().toLowerCase() === movie.trim().toLowerCase())
    return filteredMov
  }

  let handlegptsearch = async () => {
    let gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :"+ searchtext.current.value +". only give me names of 5 movies , comma Seperated like the example result give ahead . Example Result : Gadar, Sholay, Don, Golmaal, Kol Mil Gaya"
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: gptQuery },
      ],
    });
     const gptMovies=gptResults?.choices?.[0]?.message?.content.split(",")
     console.log(gptMovies)
    const promisesArr = gptMovies.map(movie => searchmovie(movie))
    const tmdbMovies =await Promise.all(promisesArr)
    console.log(tmdbMovies);
    dispatch(addGptMovies({movieNames : gptMovies, movieResults : tmdbMovies}))
    

  };

  return (
    <div className="md:pt-[15%] pt-[40%] grid-cols-12 flex justify-center ">
      <form
        className=" bg-black grid grid-cols-12 mx-1 text-sm md:text-md w-full md:w-1/2 z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="bg-white p-3 m-4 col-span-9 rounded-md"
          placeholder={lang[langkey]?.gptplaceholder}
        />
        <button
          className="py-2 px-5 col-span-3 m-4 mx-2 bg-red-700 text-white rounded-md"
          onClick={handlegptsearch}
        >
          {lang[langkey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSbar;
