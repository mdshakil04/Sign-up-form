/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import signUpImg from "../assets/image/signUp.png";
import logo from "../assets/image/typeform-logo-A4FC2E0B41-seeklogo.com.png";
import { FaCopyright } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoft } from "react-icons/tfi";
import SignUpFrom from "./SignUpFrom";

const SignUp = () => {
  const [showSignUpFrom, setShowSignUpFrom] = useState(false);
  const [showAnotherButton, setShowAnotherButton] = useState(true);

  const handleSignUpButtonClick = () => {
    setShowSignUpFrom(true);
    setShowAnotherButton(false);
  };
  return (
    <div className=" flex h-dvh">
      <div className=" text-white flex flex-col gap-12 w-1/2 items-center text-center justify-center bg-[#191919]">
        <h1 className="  lg:text-5xl text-center">
          Sign Up <br></br> and come on in
        </h1>
        <img className="" src={signUpImg} alt="Album" />
        <div className=" flex items-center gap-1">
          <p>
            <FaCopyright />
          </p>
          <p>Typeform</p>
        </div>
      </div>
      <div className=" w-1/2 rounded-l-3xl flex flex-col bg-blue justify-center items-center max-h-full text-center lg:p-32">
        <div className=" flex justify-center items-center gap-2">
          <img className=" w-1/12" src={logo} alt="" />
          <h1 className=" text-3xl font-bold">Typeform</h1>
        </div>
        <div>
          <p className=" lg:text-3xl font-thin my-2 lg:mt-8">
            Get better data with conversational forms, surveys,<br></br> quizzes
            & more.
          </p>
        </div>
        <div className=" lg:mt-12">
          {/* -------------------------------------------------------- */}
          {showAnotherButton && (
            <div className=" flex flex-col">
              <button className="btn btn-outline  font-semibold lg:text-xl mb-4"><FcGoogle /> Sign up with Google
              </button>
              <button className=" btn btn-outline font-semibold lg:text-xl"><TfiMicrosoft /> Sign up with Microsoft
              </button>
              <p className=" my-4">OR</p>
            </div>
          )}
          {/* --------------------------------------------------------- */}

          {!showSignUpFrom ? (
            <div>
              <button className="btn btn-outline bg-black text-white font-semibold lg:text-xl" onClick={handleSignUpButtonClick}>Sign Up with Email</button>
            </div>
          ) : (
            <SignUpFrom></SignUpFrom>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
