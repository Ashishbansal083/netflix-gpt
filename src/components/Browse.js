import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";

const Browse = () => {
  useNowplayingmovies();
  

  return (
    <div>
      <Header />
      <Maincontainer/>
    </div>
  );
};

export default Browse;
