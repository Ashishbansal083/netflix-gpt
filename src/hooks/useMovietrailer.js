import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../utils/Constants";
import { addmovieTrailervedio } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovietrailer = ({movieId})=>{
    const dispatch = useDispatch();
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
      dispatch(addmovieTrailervedio(Trailer));
  
    };
    useEffect(() => { 
      getMovievideos();
    }, []);
  

}

export default useMovietrailer;