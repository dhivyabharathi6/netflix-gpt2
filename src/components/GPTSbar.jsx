import React, { use, useRef } from "react";
import { useSelector } from "react-redux";
import { LANGUAGES } from "../utils/constants";
import lang from "../utils/langConstant";
import openai from "../utils/openai";

const GPTSbar = () => {
  let searchtext = useRef();
  let langkey = useSelector((store) => store.config.language);

  let handlegptsearch = async () => {


    let gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :"+searchtext.current.value +". only give me names of 5 movies , comma Seperated like the example result give ahead . Example Result : Gadar, Sholay, Don, Golmaal, Kol Mil Gaya"
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: gptQuery },
      ],
    });
     console.log(gptResults)
   
  };

  return (
    <div className="md:pt-[15%] pt-[40%] gridgrid-cols-12 flex justify-center ">
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
