import React from "react";
import Header from "./Header";
import useNowplayingmovies from "../hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer";
import usePopulermovies from "../hooks/usePopulermovies";
import useTopratedmovies from "../hooks/useTopratedmovies";
import useUpcomingmovies from "../hooks/useUpcomingmovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const GptSearchView = useSelector((store) => store.gpt.GptSearchView);

  useNowplayingmovies();
  usePopulermovies();
  useTopratedmovies();
  useUpcomingmovies();

  return (
    <div>
      <Header />
      {GptSearchView ? (
        <GptSearch></GptSearch>
      ) : (
        <>
          <Maincontainer />
          <Secondrycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
