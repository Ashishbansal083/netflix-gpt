import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/LanguageConsts";
import OpenAi from "../utils/OpenAi";
import { FETCH_OPTIONS } from "../utils/Constants";
import { addgptMovieResults } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const PreferLang = useSelector((store) => store.config.lang_key);
  const searchMoviestmdb=async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",FETCH_OPTIONS);
    const json = await data.json();
    return json.results ;
  }
  const handleSearch = async () => {
    // const gptQuery =
    //   "Act as a movie recommendation systum and suggest some movies for the query :" +
    //   searchText.current.value +
    //   ".only give me the name of five movies comma separated like the example given ahead.Example given:Don,sholey,Gadar,Golmaal,Koi mil gaya";
    // const gptResults = await OpenAi.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     {
    //       role: "system",
    //       content: gptQuery,
    //     },
    //   ],
    // });
    // console.log(gptResults.choices[0].message.content);
    // const gptMovies = gptResults.choices[0].message.content.split(",");
    //the Above part is commented due to the reason thhat OpenAi api's are paid and if used the app not work proper so we are using hard coded data.
    const gptMovies = ["gadar" , "Don" , "sholey" , "Golmaal" , "Koi Mil Gya"]

    const GptMoviesResult = gptMovies.map((movie)=>searchMoviestmdb(movie));
    const gptPromiseResult =await Promise.all(GptMoviesResult);

    
    dispatch(addgptMovieResults({movieNames:gptMovies,searchResults:gptPromiseResult}));

  };
  return (
    <div className="flex justify-center  pt-[10%] ">
      <form
        className="bg-black  p-2 w-[50%] grid grid-cols-12 rounded-md gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder={lang[PreferLang].GptSearchPlaceholder}
          className="p-2 col-span-9  rounded-md"
        ></input>
        <button
          className="text-white bg-red-700 col-span-3  rounded-md font-semibold"
          onClick={handleSearch}
        >
          {lang[PreferLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
