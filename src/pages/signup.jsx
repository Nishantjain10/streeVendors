import { useState, useEffect } from "react";
import Navbar from "../components/navbarSec";
import Footer from "../components/footer";
import shopVector from '../assets/shopping-vector.png'
import { Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import alanBtn from '@alan-ai/alan-sdk-web';


function Signup() {
  const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('');
    const [submit, setSubmit] = useState(false);
    const ALAN_Key = `96bd99c3882a0fa848348b1c9fd575412e956eca572e1d8b807a3e2338fdd0dc/stage`
  useEffect(() => {
    alanBtn({
        key: ALAN_Key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
          if (commandData.command === 'submit'){ 
              document.getElementById('submit-button').click()
              document.getElementById('submit-button').focus()
              console.log('submit-working');
              console.log(document.getElementById('submit-button'));
          }
        }
    });
  }, []);




  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });


  //Signup
  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/login");
        alert("Account Created SuccessFully"); //success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };





  return (
    <div className="featured-wrapper min-h-screen bg-sober-pink sm:container sm:mx-auto">
      <Navbar />
      <div className="form-wrapper flex flex-row mt-44 justify-center align-center">
        <div className="form-card-wrapper mx-12">
        <div className="form-content-wrapper ml-6 mt-5 text-lg text-center font-semibold font-manrope text-[#BA4440] text-left">Welcome 🎉</div>
        <div className="form-content-wrapper ml-6 mt-2 text-sm text-center font-semibold font-manrope text-[#BA4440] text-left">We're happy to see you here! 🧡</div>
        <div className="mt-8 flex item-center justify-center">
          <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder = "Enter your name:"
                    autoComplete="name"
                    value={name}
                    required
                    className="name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                    onChange={(e) => {
                      setUser({
                        ...user,
                        name: e.target.value,
                      });
                      setName(
                          e.target.value
                      )
                    }}
                    />
          </div>
        <div className="mt-8 flex item-center justify-center">
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
        <div className="mt-8 flex item-center justify-center">
          <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder = "Create a password"
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
              <div className="form-content-wrapper ml-6 mt-6 text-sm text-center font-semibold font-manrope text-[#BA4440] text-left">Already have an account, Click here to <Link className="" to={"/Login"}><button className="underline"> Login </button> </Link>🧡
                </div>
        <div className="signup-btn-wrapper flex justify-center items-center mt-6">
        <button className="button-wrapper py-2 bg-white px-3 text-black border-2 rounded-sm border-slate-500 border-solid hover:bg-slate-50 w-fit mx-auto hover:text-green-900 transition-all" onClick={signupUser}>Join Us 🚀</button>
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

export default Signup;
