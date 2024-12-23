import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/LanguageConsts";
import OpenAi from "../utils/OpenAi";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const PreferLang = useSelector((store) => store.config.lang_key);
  const handleSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation systum and suggest some movies for the query :" +
      searchText.current.value +
      ".only give me the name of five movies comma separated like the example given ahead.Example given:Don,sholey,Gadar,Golmaal,Koi mil gaya";
    const gptResults = await OpenAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: gptQuery,
        },
      ],
    });
    console.log(gptResults.choices[0].message.content);
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
