import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer"

const Browse = () => {
  useNowplayingmovies();
  

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondrycontainer/>
    </div>
  );
};

export default Browse;
