import React, { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/Constants";

const VideoBackround = ({ movieId }) => {
  const getMovievideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      FETCH_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const Trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(Trailer);
  };
  useEffect(() => {
    getMovievideos();
  }, []);
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/JdSl4RMNtGE?si=wo4LlKD15U6oeUQ2"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackround;
