import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestedMovieSection from "./GptSuggestedMovieSection";
import { BG_URL } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="background-img" className="object-cover h-screen sm:h-auto"/>
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestedMovieSection />
      </div>
    </div>
  );
};

export default GptSearch;
