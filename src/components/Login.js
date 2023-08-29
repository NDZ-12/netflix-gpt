import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setisSignInform] = useState(true);
  const toggleSignUpForm = () => {
    setisSignInform(!isSignInform);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>

        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <button className="p-4 my-6 bg bg-red-700 w-full rounded-lg">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-extrabold py-4 cursor-pointer"
          onClick={toggleSignUpForm}
        >
          {isSignInform
            ? "New to netflix ? Sign Up Now"
            : "Already Sign In Please Sign In Now!!!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
