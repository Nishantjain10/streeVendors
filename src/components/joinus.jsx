import heartSvg from "../assets/heart.svg"

function Join() {
    return(
        <div className="joinus-content-box-wrapper sm:container sm:mx-auto justify-center flex flex-row justify-between items-center transition-all mt-20">
            <div className="content-wrapper w-[763px] mx-auto p-24 pt-28 font-manrope text-[#BA4440] text-left">
                <span className="font-poppins font-medium text-3xl">Join our community 🚀</span><br></br><br></br>
                Got “Jazba(Passion)” to support the active streevendors?We got your back! Join us! Check out the link and contribute to the unveiling of our streevendors.
            </div>
            <div className="content-wrapper scale-125 px-28 mx-auto">
                <img src={heartSvg} alt="" />
            </div>

        </div>
    )
}

export default Join;