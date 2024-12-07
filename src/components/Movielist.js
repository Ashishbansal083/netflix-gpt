import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movie }) => {
  console.log(movie);
  return (
    <div className="w-full border-black border-2">
      <h1>{title}</h1>
      {movie?.map((movie) => (
        <div className="flex-wrap w-[200px]">
          <Moviecard
            title={movie?.original_title}
            poster_url={movie?.poster_path}
          />
        </div>
      ))}
    </div>
  );
};

export default Movielist;
