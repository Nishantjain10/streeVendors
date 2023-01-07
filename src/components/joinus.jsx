import heartSvg from "../assets/heart.svg"

function Join() {
    return(
        <div className="joinus-content-box-wrapper sm:container sm:mx-auto justify-center flex flex-row justify-between items-center transition-all mt-20">
            <div className="content-wrapper w-[763px] mx-auto p-24 pt-28 font-manrope text-[#BA4440] text-left">
                <span className="font-manrope font-medium text-3xl">Join our team 🚀</span><br></br>
                Lorem ipsum dolor sit amet.<br></br>
            </div>
            <div className="content-wrapper scale-125 p-28 mx-auto">
                <img src={heartSvg} alt="" />
            </div>

        </div>
    )
}

export default Join;