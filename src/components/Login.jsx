import React, { useRef, useState } from "react";
import Headers from "./Headers";
import { checkvalidation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser ,addUser} from "../utils/userSlice";
import { AVATAR_URL, BG_URL } from "../utils/constants";

const Login = () => {
  const [issignin, setissignin] = useState(true);
  const [errormsg, setErrmsg] = useState(null);
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  let handleSignin = () => {
    setissignin(!issignin);
  };

  let handleSubmit = () => {
    let message = checkvalidation(
      email.current.value,
      password.current.value,
      name.current?.value || ""
    );
    setErrmsg(message);
    if (message) return;

    if (!issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL
          })
            .then(() => {
               const {uid, email, displayName, photoURL} = auth.currentUser
                dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}))
                
            })
            .catch((error) => {
              setErrmsg(error.message)
            });
        
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
          // ..
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
          //  dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}))
          //   })
        

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Headers />
      <div className="absolute ">
        <img
          className="h-screen w-screen"
          src={BG_URL}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/4 absolute bg-black/70 p-12 my-36 mx-auto right-0 left-0   text-white bg-opacity-70"
      >
        <h2 className="font-bold text-3xl py-4">
          {issignin ? "Sign in" : "Sign Up"}
        </h2>
        {!issignin && (
          <input
            className="p-4 my-4  bg-gray-600 w-full text-sm rounded-sm"
            ref={name}
            type="text"
            placeholder="Enter Your Name"
          />
        )}

        <input
          className="p-4 my-4  bg-gray-600 w-full text-sm rounded-sm"
          type="text"
          ref={email}
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4  bg-gray-600  w-full text-sm rounded-sm"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <p className="text-xs text-red-600">{errormsg}</p>
        <button
          className="p-4 my-6  bg-red-700 bg-opacity-80  w-full text-sm rounded-sm"
          onClick={handleSubmit}
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm text-gray-400">
          {issignin ? "New to netflix?" : "Already user?"}?
          <a className="cursor-pointer" onClick={handleSignin}>
            {issignin ? "Sign UP" : "Sign in"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
