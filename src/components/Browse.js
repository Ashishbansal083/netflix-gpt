import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";

const Browse = () => {
  useNowplayingmovies();
  

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
