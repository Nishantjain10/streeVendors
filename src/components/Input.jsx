import React from "react";

function Input(props){
    return(
            <input
              type={props.type}
              name={props.name}
              value={props.value}
              onChange={props.handleInput}
              placeholder={props.placeholder}
              className="profile-name-input-wrapper px-4 mx-auto mt-4 outline-[#BA4440] placeholder-[#BA4440] placeholder:font-medium placeholder:font-manrope placeholder:text-sm "
            />
    );
}
export default Input;
