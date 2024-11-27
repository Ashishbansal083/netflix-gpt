import React from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/UserSlice";

const Browse = () => {
  
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      
    </div>
  );
};

export default Browse;
