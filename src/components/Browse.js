import React from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/UserSlice";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignout = () => {    
    signOut(auth)
      .then(() => {
        navigate('/')        
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <button
        className="font-bold text-green text-5xl w-full cursor-pointer mt-44"
        onClick={handleSignout}
      >
        signout
      </button>
    </div>
  );
};

export default Browse;
