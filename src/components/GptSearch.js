import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestedMovieSection from "./GptSuggestedMovieSection";
import { BG_URL } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptSuggestedMovieSection />
    </div>
  );
};

export default GptSearch;
