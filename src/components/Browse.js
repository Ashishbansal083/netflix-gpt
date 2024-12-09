import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer"
import usePopulermovies from "../hooks/usePopulermovies";
import useTopratedmovies from "../hooks/useTopratedmovies";
import useUpcomingmovies from "../hooks/useUpcomingmovies";

const Browse = () => {
  useNowplayingmovies();
  usePopulermovies();
  useTopratedmovies();
  useUpcomingmovies();
  

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondrycontainer/>
    </div>
  );
};

export default Browse;
