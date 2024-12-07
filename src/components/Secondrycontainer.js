import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondrycontainer = () => {
  const movie = useSelector((store) => store.movie.nowPlyingmovie);
  return (
    <div className="bg-black">
      <div className=" -mt-[400px] relative z-20">
        <Movielist title={"Now Playing"} movie={movie} />
        <Movielist title={"Trending"} movie={movie} />
        <Movielist title={"Upcoming"} movie={movie} />
        <Movielist title={"Popular"} movie={movie} />
      </div>
    </div>
  );
};

export default Secondrycontainer;
