import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute"> 
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="relative top-44 bg-black/80 w-3/12 px-12 py-6 mx-auto text-white rounded">
        <h1 className="font-bold text-3xl my-4">Sign In</h1>
        <input type="text" placeholder="Email or Mobile Number" className="px-6 py-4 my-2 w-full rounded bg-transparent border-slate-400 border" />
        <input type="text" placeholder="Password" className="px-6 py-4 my-2 w-full rounded bg-transparent border-slate-400 border" />
        <button className="px-4 py-3 bg-red-700 text-white w-full my-2 rounded font-semibold">Sign In</button>
      </form>
    </div>  
  );
};

export default Login;
