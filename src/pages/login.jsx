import Navbar from "../components/navbarSec";
import Footer from "../components/footer";
import shopVector from '../assets/shopping-vector.png'
import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/userprofile");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };



  return (
    <div className="featured-wrapper min-h-screen bg-sober-pink sm:container sm:mx-auto">
      <Navbar />
      <div className="form-wrapper flex flex-row mt-44 justify-center align-center">
        <div className="form-card-wrapper mx-12">
        <div className="form-content-wrapper ml-6 mt-5 text-lg text-center font-semibold font-manrope text-[#BA4440] text-left">Welcome Back 🎉</div>
        <div className="form-content-wrapper ml-6 mt-2 text-sm text-center font-semibold font-manrope text-[#BA4440] text-left">We're happy to see you here! 🧡</div>
        <div className="mt-12 flex item-center justify-center">
          <input 
                    id="email"
                    name="email"
                    type="text"
                    placeholder = "Enter your e-mail:"
                    autoComplete="email"
                    required
                    className="name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                    }}
                    />
          </div>
        <div className="mt-12 flex item-center justify-center">
          <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder = "Input password"
                    autoComplete="password"
                    required
                    className="name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                    }}
                    />
          </div>
              <div className="form-content-wrapper ml-6 mt-12 text-sm text-center font-semibold font-manrope text-[#BA4440] text-left">Not registered? Click here to <Link className="" to={"/Signup"}><button className="underline"> SignUp </button></Link> 🧡                </div>
        <div className="signup-btn-wrapper flex justify-center items-center mt-8">
        <button className="button-wrapper py-2 bg-white px-3 text-black border-2 rounded-sm border-slate-500 border-solid hover:bg-slate-50 w-fit mx-auto hover:text-green-900 transition-all" onClick={loginUser}>Login</button>
        </div>
        </div>
        <div className="image-wrapper w-[443px]"><img src={shopVector} alt="" /></div>
      </div>
      
      <div className="secondary-footer-wrapper mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
