import React, { useRef, useState } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { checkvalidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInform, setisSignInform] = useState(true);
  const [errorhandlemesage, seterrorhandlemessage] = useState();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignUpForm = () => {
    setisSignInform(!isSignInform);
  };
  const handleButtonClick = () => {
    const message = checkvalidData(email.current.value, password.current.value);
    seterrorhandlemessage(message);
    if (message) return;

    if (!isSignInform) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://img.icons8.com/plasticine/100/logout-rounded.png",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browser");
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorhandlemessage(error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorhandlemessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browser");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorhandlemessage(errorCode + "-" + errorMessage);
        });
    }
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <p className="text-red-500 text-xl font-bold">{errorhandlemesage}</p>
        <button
          className="p-4 my-6 bg bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
