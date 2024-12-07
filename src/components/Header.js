import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
import { LOGO, PHOTO_URL } from "../utils/Constants";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const navigate = useNavigate();
  const handleSignout = () => {    
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse') 
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
               

        // ...
      } else {
        dispatch(removeUser());
        navigate('/')        

      }
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black px-20 py-6 z-10 w-screen flex justify-between">
      <div>
        <img
          className="w-40 "
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && <div className="flex">
        <img className='w-8 h-8'    src={user.photoURL||"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="profile photo"></img>
        <button className="text-white font-semibold mx-3" onClick={handleSignout}>SignOut</button>
      </div>}
    </div>
  );
};

export default Header;
