import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movie }) => {
  console.log(movie);
  return (
    <div className="">
      <h1 className="font-semibold text-3xl py-6 px-6 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll px-4 no-scrollbar">
        <div className="flex ">
          {movie?.map((movie) => (
            <Moviecard
              title={movie?.original_title}
              poster_url={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
