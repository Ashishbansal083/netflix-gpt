import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/LanguageConsts";
import OpenAi from "../utils/OpenAi";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const PreferLang = useSelector((store) => store.config.lang_key);
  const handleSearch = async () => {
    const completion = await OpenAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:searchText.current.value
        },
      ],
    });
    console.log(completion.choices[0].message);
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
