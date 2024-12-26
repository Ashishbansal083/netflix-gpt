import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptSuggestedMovieSection = () => {
  const { movieResult, searchMovieName } = useSelector((store) => store.gpt);

  if(!movieResult) return null;

  return (
    <div className="bg-black p-4 m-2 bg-opacity-70">
      <div>
        {searchMovieName?.map((movie, index) => (
          <Movielist key={movie} title={movie} movie={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestedMovieSection;
