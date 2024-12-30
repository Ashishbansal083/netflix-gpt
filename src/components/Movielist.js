import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movie }) => {
  
  return (
    <div className="">
      <h1 className="font-semibold text-lg py-6 px-6 text-white md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll px-4 no-scrollbar">
        <div className="flex gap-2">
          {movie?.map((movie,index) => (
            <Moviecard
              key={index}
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
