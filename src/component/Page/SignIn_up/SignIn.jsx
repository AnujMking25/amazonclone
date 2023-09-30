import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../../../Store/AuthSlice";
// import Cookies from 'js-cookie';

const SignIn = () => {
  const [signIn, setSignIn] = useState(true);
  const navigate=useNavigate();
 const dispatch=useDispatch()
 const BASE_URL=process.env.REACT_APP_BASE_URL;

 const onAuthHandler=async(e)=>{
  e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;
const name=e.target.name.value;
let SLurl;
let obj={email,password,name};

if(!signIn){
SLurl=`${BASE_URL}/auth/signup`
const confirmPassword=e.target.confirmPassword.value;
obj={...obj,confirmPassword};
}else{
  SLurl=`${BASE_URL}/auth/signin`;
}

  const auth=await axios.post(SLurl,obj).then(res=>res);
  console.log(auth);
  // console.log();
  if(auth.data){
    // console.log(auth.data.token);
    
    dispatch(AuthSliceAction.login({token:auth.data.token,name:auth.data.userName}))
   navigate('/') 
  }

 }
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
          <h1 className="text-3xl">{signIn? 'SignIn':'Create Account'}</h1>
        </div>

        <form onSubmit={(e)=>onAuthHandler(e)}>
        
        <div >
        {!signIn && <div><p className="font-bold text-sm">Name</p>
          <input type="text" className="w-[100%] border border-black" id="name"/>
        </div>
        }
          <p className="font-bold text-sm">Email</p>
          <input type="text" className="w-[100%] border border-black" id="email"/>
          <p className="font-bold text-sm">Password</p>
          <input type="password" className="w-[100%] border border-black" id="password"/>
          { !signIn && <div>
           <p className="font-bold text-sm">Confirm Password</p>
          <input type="password" className="w-[100%] border border-black" id="confirmPassword"/>
          </div>
           }
        </div>

        <button className="bg-yellow-400 w-full p-1 mt-3 text-sm xl:text-md rounded-lg hover:bg-yellow-500"
        type="submit"
        >
          Continue
        </button>
        </form>

        <div className="text-sm xl:text-md">
          <p>
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue-700">Conditions of Use</span> 
            <span className="text-blue-700">Privacy Notice.</span>
          </p>
        </div>
      </div>

      {signIn && <div className=" mt-6 w-[30%] mx-auto text-center text-gray-500 text-sm divide-y">
        <button className="pl-2 pr-2 bg-white">New to Amazon?</button>
        <p className="-mt-2"></p>
      </div>}

      <div className="w-[30%] mx-auto mt-2">
        <button onClick={()=>{setSignIn(!signIn)}} className="border border-gray-300  w-full p-1 mt-3 text-sm xl:text-md rounded-lg hover:bg-gray-200">
         {signIn ? 'Create your Amazon account':'SignIn'}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
