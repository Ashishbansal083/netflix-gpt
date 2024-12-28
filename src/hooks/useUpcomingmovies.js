import { useDispatch, useSelector } from "react-redux";
import { addUpcomingmovie} from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useUpcomingmovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movie.Upcomingmovies);
  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingmovie(json.results));
  };
  useEffect(() => {
    !upcomingMovies && fetchApi();
  }, []);
}

export default useUpcomingmovies;