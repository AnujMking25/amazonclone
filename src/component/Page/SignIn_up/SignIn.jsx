import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div>
      <div className="flex justify-center items-center ">
        <Link to="/">
          <img
            className="h-[55px] w-[100px] m-2"
            src={"../images/amazon_black.png"}
            alt="amazon_black.png"
          />
        </Link>
        <span className="-ml-2 mb-2 pl-0">.in</span>
      </div>

      <div className="w-[30%] mx-auto border border-gray-300 rounded-lg p-6">
        <div className="mb-4">
          <h1 className="text-3xl">{signUp? 'Sign in':'Create Account'}</h1>
        </div>

        <div >
          <p className="font-bold text-sm">Email</p>
          <input type="text" className="w-[100%] border border-black" />
          <p className="font-bold text-sm">Password</p>
          <input type="text" className="w-[100%] border border-black" />
        </div>

        <button className="bg-yellow-400 w-full p-1 mt-3 text-sm xl:text-md rounded-lg hover:bg-yellow-500">
          Continue
        </button>

        <div className="text-sm xl:text-md">
          <p>
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue-700">Conditions of Use</span> 
            <span className="text-blue-700">Privacy Notice.</span>
          </p>
        </div>
      </div>

      <div className=" mt-6 w-[30%] mx-auto text-center text-gray-500 text-sm divide-y">
        <button className="pl-2 pr-2 bg-white">New to Amazon?</button>
        <p className="-mt-2"></p>
      </div>

      <div className="w-[30%] mx-auto mt-2">
        <button onClick={()=>{setSignUp(!signUp)}} className="border border-gray-300  w-full p-1 mt-3 text-sm xl:text-md rounded-lg hover:bg-gray-200">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default SignIn;
