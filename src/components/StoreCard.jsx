import React from "react";

function StoreCard(props){

    return(
        <div className="content-wrapper flex flex-row justify-center mt-16">
          <div className="card-secondary-wrapper transition-all bg-white mx-12">
            <div className="banner-wrapper-secondary bg-[#FFF1F3] mx-auto mt-6"></div>
            <div className="card-title-wrapper ml-6 mt-2 text-xl  font-semibold font-manrope text-[#BA4440] text-left">
              {props.title}
            </div>
            <div className="card-description-wrapper ml-6 mt-1 w-[250px] pb-2 text-base font-medium font-manrope text-[#BA4440] text-left">
              {props.category}
            </div>
            <div className="card-description-wrapper ml-6 mt- w-[200px] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              {props.address}
            </div>
            <div className="card-description-wrapper ml-6 mt-1 ] pb-2 text-xs font-semibold font-manrope text-[#BA4440] text-left">
              {props.description}
            </div>
          </div>
          </div>
    );
}

export default StoreCard;