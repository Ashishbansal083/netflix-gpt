import React from "react";
import {  useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovietrailer";

const VideoBackround = ({ movieId }) => {
  const trailerId = useSelector(store=>store.movie.movieTrailervedio);

  useMovietrailer(movieId={movieId});
   return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"+trailerId?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackround;
