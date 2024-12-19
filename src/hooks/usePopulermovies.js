import { useDispatch } from "react-redux";
import { addPopulermovie } from "../utils/movieSlice";
import { FETCH_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const usePopulermovies = ()=>{
    const dispatch = useDispatch();
  const fetchApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      FETCH_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addPopulermovie(json.results));
  };
  useEffect(() => {
    fetchApi();
  }, []);
}

export default usePopulermovies;