import { useDispatch, useSelector } from "react-redux";
import { addTopratedmovie} from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useTopratedmovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movie.Topratedmovies);

  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedmovie(json.results));
  };
  useEffect(() => {
    !topRatedMovies && fetchApi();
  }, []);
}

export default useTopratedmovies;