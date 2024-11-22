import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInFrom, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const toggleSigninform = () => {
    setisSignInForm(!isSignInFrom);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;

    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" +errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"
          alt="background-img"
        />
      </div>
      <form
        className="relative top-44 bg-black/80 w-3/12 px-12 py-6 mx-auto text-white rounded"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl my-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-6 py-4 my-2 w-full rounded bg-transparent border-slate-400 border"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="px-6 py-4 my-2 w-full rounded bg-transparent border-slate-400 border"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-6 py-4 my-2 w-full rounded bg-transparent border-slate-400 border"
        />
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <button
          className="px-4 py-3 bg-red-700 text-white w-full my-2 rounded font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSigninform} className="cursor-pointer">
          {isSignInFrom
            ? "New to Netflix ? SignUp Now"
            : " Already a user ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
