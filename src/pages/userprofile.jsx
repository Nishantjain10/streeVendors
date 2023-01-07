import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";

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
          <div className="sm:container sm:mx-auto text-right">
            <div className="profile-header-wrapper pt-12 flex justify-between">
              <div>
                <p className="button-wrapper  !w-[250px] text-sm bg-[#FFFEFE] text-center border-2 p-3 rounded-lg">
                  Hello, {userDetails.name}
                </p>
              </div>
              <div>
                <button
                  className="button-wrapper mt-1 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 inline-flex transition-all"
                  onClick={handleLogout}
                >
                  Logout🚪
                </button>
              </div>
            </div>
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
    </>
  );
}

export default Profile;
