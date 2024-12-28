import { useDispatch, useSelector } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useNowplayingmovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movie.nowPlyingmovie);
  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowplayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies &&  fetchApi();
  }, []);
}

export default useNowplayingmovies;