function Footer() {
    return (
      <div className="footer-wrapper sm:container sm:mx-auto items-center mt-16">
        <div className="footer-box-wrapper mx-auto mt-16 transition-all flex flex-row justify-between">
        <div className="brand-name-wrapper  pl-24 pt-14 font-manrope text-[#BA4440] text-left">
                StreeVendors
            </div>
            <div className="social-wrapper pl-24 font-manrope font-semibold flex justify-around text-lg pt-16 mx-auto">
              <div>connect us on :</div>
              <div className="mx-12">twitter <span className="text-black">&</span> linkedIn</div>
            </div>
        </div>

      </div>
    );
  }
  
export default Footer;