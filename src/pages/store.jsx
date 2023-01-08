import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import '../components/styles.css'
import Footer from "../components/footer";
import AddStore from "../components/Addstore";
import stores from "../backend/stores";
import StoreCard from '../components/StoreCard'


function Store() {
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


    console.log(stores[0].address);
    
    const titles=[];
    for(let i=0; i<stores.length; i++){
      titles.push(stores[i].title);
    }

    const address=[];
    for(let i=0; i<stores.length; i++){
      address.push(stores[i].address);
    }

    const category=[];
    for(let i=0; i<stores.length; i++){
      category.push(stores[i].title);
    }
      
      // storeList.push(
      //   <ListItem props = {stores[i]}/>
      // )



  return (

    <div className="featured-wrapper min-h-screen bg-sober-pink sm:container sm:mx-auto">
      <div className="sm:container sm:mx-auto nav-wrapper flex justify-center items-center">
        <ul className="list-wrapper flex flex-row justify-around w-fit mx-auto align-center mt-12">
          <li className="list-items mx-12">
          <Link className="" to={"/"}>
            <button className="button-wrapper mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Home🏠</button>
          </Link>
            </li>
          <li className="list-items mx-12">
          <Link className="" to={"/featured"}>
            <button className="button-wrapper mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Features📃</button>
          </Link>
            </li>
          <li className="list-items mx-12">
          <li className="list-items mx-12">
          {userDetails ? (
          <Link className="font-serif" to={"/"}>
            <button
              className="button-wrapper mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all"
              onClick={handleLogout}
            >
             Logout🚪
            </button>
          </Link>
        ) : (
          <Link className="font-serif" to={"/login"}>
            <button className=" button-wrapper mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">
               Join Us🚀
            </button>
          </Link>
        )}
            </li>
            </li>
        </ul>
        </div>
      <div className="heading-wrapper text-[#782224] font-alice text-4xl mt-28 items-center flex justify-center">
        Local Listed Stores 🏪
      </div>
      <div className="sub-heading-wrapper text-[#BA4440] mt-5 w-[584px] text-center font-manrope font-semibold text-base mx-auto items-center flex justify-center">
        “The platform allows women to list their stores online, which helps to promote the local stores and potentially increase sales.”
      </div>
        <div className="content-wrapper flex flex-row justify-center mt-24">
          <div className="card-secondary-wrapper transition-all bg-white mx-12">
            <div className="banner-wrapper-secondary bg-[#FFF1F3] mx-auto mt-6"><img className="card-img-store" src="https://cdn.discordapp.com/attachments/1046322779877822475/1061571933923180635/19dfb62ca09eed3aba06a02e4dbb82b6.jpg" alt="" /></div>
            <div className="card-title-wrapper ml-6 mt-2 text-xl  font-semibold font-manrope text-[#BA4440] text-left">
            Sneha's Store
            </div>
            <div className="card-description-wrapper ml-6 mt-1 w-[250px] pb-2 text-base font-medium font-manrope text-[#BA4440] text-left">
              Category - Fashion & Wearables
            </div>
            <div className="card-description-wrapper ml-6 mt- w-[200px] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              28, Shanti Avenue Apartment, Shri-krishna Avenue, Indore
            </div>
            <div className="card-description-wrapper ml-6 mt-1 ] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam in recusandae voluptates ex corrupti sint reiciendis ea ad autem.
            </div>
          </div>
          
        

          <div className="card-secondary-wrapper transition-all bg-white mx-12">
            <div className="banner-wrapper-secondary bg-[#FFF1F3] mx-auto mt-6"><img className="card-img-store" src="https://cdn.discordapp.com/attachments/1046322779877822475/1061571933923180635/19dfb62ca09eed3aba06a02e4dbb82b6.jpg" alt="" /></div>
            <div className="card-title-wrapper ml-6 mt-2 text-xl  font-semibold font-manrope text-[#BA4440] text-left">
             Sneha's Store
            </div>
            <div className="card-description-wrapper ml-6 mt-1 w-[250px] pb-2 text-base font-medium font-manrope text-[#BA4440] text-left">
              Category - Fashion & Wearables
            </div>
            <div className="card-description-wrapper ml-6 mt- w-[200px] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              28, Shanti Avenue Apartment, Shri-krishna Avenue, Indore
            </div>
            <div className="card-description-wrapper ml-6 mt-1 ] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam in recusandae voluptates ex corrupti sint reiciendis ea ad autem.
            </div>
            </div>
        </div>
        <div className="content-wrapper flex flex-row justify-center mt-16">
          <div className="card-secondary-wrapper transition-all bg-white mx-12">
            <div className="banner-wrapper-secondary bg-[#FFF1F3] mx-auto mt-6"><img className="card-img-store" src="https://cdn.discordapp.com/attachments/1046322779877822475/1061571933923180635/19dfb62ca09eed3aba06a02e4dbb82b6.jpg" alt="" /></div>
            <div className="card-title-wrapper ml-6 mt-2 text-xl  font-semibold font-manrope text-[#BA4440] text-left">
            Sneha's Store
            </div>
            <div className="card-description-wrapper ml-6 mt-1 w-[250px] pb-2 text-base font-medium font-manrope text-[#BA4440] text-left">
              Category - Fashion & Wearables
            </div>
            <div className="card-description-wrapper ml-6 mt- w-[200px] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              28, Shanti Avenue Apartment, Shri-krishna Avenue, Indore
            </div>
            <div className="card-description-wrapper ml-6 mt-1 ] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam in recusandae voluptates ex corrupti sint reiciendis ea ad autem.
            </div>
          </div>
        

          <div className="card-secondary-wrapper transition-all bg-white mx-12">
            <div className="banner-wrapper-secondary bg-[#FFF1F3] mx-auto mt-6"><img className="card-img-store" src="https://cdn.discordapp.com/attachments/1046322779877822475/1061571933923180635/19dfb62ca09eed3aba06a02e4dbb82b6.jpg" alt="" /></div>
            <div className="card-title-wrapper ml-6 mt-2 text-xl  font-semibold font-manrope text-[#BA4440] text-left">
              Sneha's Store
            </div>
            <div className="card-description-wrapper ml-6 mt-1 w-[250px] pb-2 text-base font-medium font-manrope text-[#BA4440] text-left">
              Category - Fashion & Wearables
            </div>
            <div className="card-description-wrapper ml-6 mt- w-[200px] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              28, Shanti Avenue Apartment, Shri-krishna Avenue, Indore
            </div>
            <div className="card-description-wrapper ml-6 mt-1 ] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam in recusandae voluptates ex corrupti sint reiciendis ea ad autem.
            </div>
            </div>
              
            {/* <ul>
      {stores.map((temp) =>
        <StoreCard key={temp.id} />
      )}
    </ul> */}
            
        </div>
        <div className="card-btn-wrapper mx-auto w-fit flex flex-col items-end justify-start">
        <div className="btn-wrapper flex justify-end ">
        <AddStore/> 
          <button className="button-wrapper mt-20 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">
            🧡 LIKE
          </button>
        </div>
      </div>
      <div className="sub-heading-wrapper quote-wrapper text-[#BA4440] mt-40 w-[584px] text-center font-manrope font-semibold text-lg mx-auto items-center">
      "A woman with a voice is by definition a strong woman. But the search to find that voice can be remarkably difficult."  <br></br>
        <p className="sub-quote-wrapper mt-12">-- Melinda Gates</p>
      </div>
      <div className="secondary-footer-wrapper mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default Store;
