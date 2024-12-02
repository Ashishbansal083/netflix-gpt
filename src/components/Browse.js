import React, { useEffect } from "react";
import Header from "./Header";
import { FETCH_OPTIONS } from "../utils/Constants";

const Browse = () => {
  const fetchApi = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",FETCH_OPTIONS);
    const json = await data.json();
    console.log(json);

  }
  useEffect(()=>{
    fetchApi();
  },[]);
  
  return (
    <div>
      <Header />
      
    </div>
  );
};

export default Browse;
