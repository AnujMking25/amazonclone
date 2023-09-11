import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../../../Store/AuthSlice";
import Cookies from 'js-cookie';

const SignIn = () => {
  const [signUp, setSignUp] = useState(true);
  const navigate=useNavigate();
 const dispatch=useDispatch()
 const onAuthHandler=async(e)=>{
  e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;
const obj={email,password};
document.cookie=JSON.stringify(obj);
console.log("Email=>",email, "password==>>",password );
const headers={
  'Content-Type':'application/json',
  'Authorizations':'bearer abcdefg'
}
  const auth=await axios.post('http://localhost:4000/auth/login',obj,{headers}).then(res=>res);
  console.log(auth);
  // console.log();
  if(auth.data){
      const headers = auth.data.authHeader;
      Cookies.set(headers[0],headers[1], { expires: 7 });
      console.log(headers[0]);
      sessionStorage.setItem(headers[0],headers[1])
    dispatch(AuthSliceAction.login())
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
          <h1 className="text-3xl">{signUp? 'Sign in':'Create Account'}</h1>
        </div>

        <form onSubmit={(e)=>onAuthHandler(e)}>
        
        <div >
          <p className="font-bold text-sm">Email</p>
          <input type="text" className="w-[100%] border border-black" id="email"/>
          <p className="font-bold text-sm">Password</p>
          <input type="password" className="w-[100%] border border-black" id="password"/>
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

      {signUp && <div className=" mt-6 w-[30%] mx-auto text-center text-gray-500 text-sm divide-y">
        <button className="pl-2 pr-2 bg-white">New to Amazon?</button>
        <p className="-mt-2"></p>
      </div>}

      <div className="w-[30%] mx-auto mt-2">
        <button onClick={()=>{setSignUp(!signUp)}} className="border border-gray-300  w-full p-1 mt-3 text-sm xl:text-md rounded-lg hover:bg-gray-200">
         {signUp ? 'Create your Amazon account':'SignUp'}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
