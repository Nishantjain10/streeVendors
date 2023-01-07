import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import '../components/styles.css'
import Footer from "../components/footer";



function Profile() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
        //console.log(userDetails);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
        <div className="sm:container sm:mx-auto nav-wrapper flex justify-center items-center">
        <ul className="list-wrapper flex flex-row justify-around align-center mt-12">
          <li className="list-items mx-12">
          <p className="button-wrapper  !w-[250px] text-sm bg-[#FFFEFE] text-center border-2 p-3 transition-all rounded-lg">
                  Hello, {userDetails.name}👋
                </p>
            </li>
          <li className="list-items mx-12">
          <Link className="" to={"/"}>
            <button className="button-wrapper mt-1 py-2 px-3 rounded-lg bg-white hover:bg-slate-50 inline-flex transition-all">Home🏠</button>
          </Link>
            </li>
          <li className="list-items mx-12">
                <button
                  className="button-wrapper mt-1 py-2 px-3 rounded-lg bg-white hover:bg-slate-50 inline-flex transition-all"
                  onClick={handleLogout}
                >
                  Logout🚪
                </button>
            </li>
        </ul>
        </div>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
      <div className="profile-wrapper w-fit mx-auto mt-12">
      <div className="profile-input-wrapper w-fit mx-auto pt-8 pl-6">
            <div className="font-manrope font-medium text-base ml-2">name</div>
            <div>
                <input className="profile-name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                placeholder="your name"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required>
                </input>
                </div>
        </div>
        <div className="profile-input-wrapper w-fit mx-auto pt-8 pl-6">
            <div className="font-manrope font-medium text-base ml-2">email</div>
            <div>
                <input className="profile-name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                placeholder="your email address"
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required>
                </input>
                </div>
        </div>
        <div className="profile-input-wrapper w-fit mx-auto pt-8 pl-6">
            <div className="font-manrope font-medium text-base ml-2">address</div>
            <div>
                <input className="profile-name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                placeholder="your address"
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required>
                    
                </input>
                </div>
        </div>
        <div className="profile-input-wrapper w-fit mx-auto pt-8 pl-6">
            <div className="font-manrope font-medium text-base ml-2">contact number</div>
            <div>
                <input className="profile-name-input-wrapper px-4 mx-auto outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
                placeholder=" your phone number"
                id="number"
                name="number"
                type="number"
                autoComplete="mobile-number"
                required>
                </input>
                </div>
        <div className="btn-wrapper flex justify-center ">
        <button className="button-wrapper !w-[150px] !h-[40px] mt-8 py- px-3  rounded-sm bg-white hover:bg-slate-50 transition-all">Update</button>
        </div>
        </div>
        <div className="updated-profile-wrapper w-fit mx-auto m-12 rounded-md">
        <div className="flex flex-row justify-between px-24 py-4">
            <div className="flex flex-col py-4">
                <span className="name-wrapper font-manrope text-lg font-semibold">Nishant Jain</span>
                <span className="email-wrapper font-manrope font-medium  text-base">Nishant.jain@gmail.com</span>
                <span className="address-wrapper font-manrope text-lg font-medium">Indore</span>
                <span className="contact-wrapper font-manrope text-lg font-medium">9109211234</span>
            </div>
            <div className="flex flex-col items-center ">
            <Link className="" to={"/store"}>
            <button className="button-wrapper  py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Add a Store</button>
            </Link>
            <Link className="" to={"/featured"}>
            <button className="button-wrapper mt-8 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Feature a Story</button>
            </Link>
            </div>
        </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Profile;
