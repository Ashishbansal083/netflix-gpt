import { useDispatch } from "react-redux";
import { addTopratedmovie} from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useTopratedmovies = ()=>{
    const dispatch = useDispatch();
  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedmovie(json.results));
  };
  useEffect(() => {
    fetchApi();
  }, []);
}

export default useTopratedmovies;