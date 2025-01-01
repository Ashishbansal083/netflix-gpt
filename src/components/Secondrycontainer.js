import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondrycontainer = () => {
  const movie = useSelector((store) => store.movie.nowPlyingmovie);
  const Populermovie = useSelector((store) => store.movie.Populermovies);
  const Topratedmovie = useSelector((store) => store.movie.Topratedmovies);
  const Upcomingmovie = useSelector((store) => store.movie.Upcomingmovies);
  
  return (
    <div className="bg-black">
      <div className=" -mt-[10%] relative z-20 sm:-mt-[200px] md:-mt-[300px] lg:-mt-[400px]">
        <Movielist title={"Now Playing"} movie={movie} />
        <Movielist title={"Popular"} movie={Populermovie} />
        <Movielist title={"Top rated"} movie={Topratedmovie} />
        <Movielist title={"Upcoming movies"} movie={Upcomingmovie} />
      </div>
    </div>
  );
};

export default Secondrycontainer;
