import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useNowplayingmovies = ()=>{
    const dispatch = useDispatch();
  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowplayingMovies(json.results));
  };
  useEffect(() => {
    fetchApi();
  }, []);
}

export default useNowplayingmovies;