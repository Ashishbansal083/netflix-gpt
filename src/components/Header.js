import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector(store=>store.user);
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
  return (
    <div className="absolute bg-gradient-to-b from-black px-40 py-6 z-10 w-screen flex justify-between">
      <div>
        <img
          className="w-40 "
          src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
          alt="logo"
        />
      </div>
      {user && <div className="flex">
        <img className='w-8 h-8'    src={user.photoURL} alt="profile photo"></img>
        <button className="text-white font-semibold mx-3" onClick={handleSignout}>SignOut</button>
      </div>}
    </div>
  );
};

export default Header;
