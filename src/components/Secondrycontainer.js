import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondrycontainer = () => {
  const movie = useSelector((store) => store.movie.nowPlyingmovie);
  const Populermovie = useSelector((store) => store.movie.Populermovies);
  console.log(Populermovie);
  return (
    <div className="bg-black">
      <div className=" -mt-[400px] relative z-20">
        <Movielist title={"Now Playing"} movie={movie} />
        <Movielist title={"Popular"} movie={Populermovie} />
        <Movielist title={"Upcoming"} movie={movie} />
        <Movielist title={"Trending"} movie={movie} />
      </div>
    </div>
  );
};

export default Secondrycontainer;
