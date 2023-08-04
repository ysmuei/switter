import { async } from "@firebase/util";
import { authService } from "fbase";
import React, { useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    } from 'firebase/auth';
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async(event) => {
    const {target: {name},} = event;
    let provider;
    if(name === "google") {
        provider = new GoogleAuthProvider();
    }else if(name==="github"){
        provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(event.target.name);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
