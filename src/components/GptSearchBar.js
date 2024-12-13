import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/LanguageConsts";

const GptSearchBar = () => {
    const PreferLang = useSelector(store=>store.config.lang_key);
  return (
    <div className="flex justify-center  pt-[10%] ">
      <form className="bg-black  p-2 w-[50%] grid grid-cols-12 rounded-md gap-2">
        <input
          placeholder={lang[PreferLang].GptSearchPlaceholder}
          className="p-2 col-span-9  rounded-md"
        ></input>
        <button className="text-white bg-red-700 col-span-3  rounded-md font-semibold">
        {lang[PreferLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
