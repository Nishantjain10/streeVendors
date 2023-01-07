import './styles.css'
import vectorImg from '../assets/vector-bg.png'
import { Link } from "react-router-dom";


function Hero() {
    return (
      <div className="sm:container sm:mx-auto hero-wrapper flex justify-center items-center mt-12 mb-24">
        <div className='content-wrapper flex flex-row'>
        <div className="title-wrapper mt-60 ml-8 w-[28rem] ">Empowering women, supporting local businesses.
        <p className='sub-text-wrapper mt-4 ml-1 text-sm w-[22rem] font-light'>"A platform connecting women-owned local stores with shoppers looking to support small businesses in their community."</p>
        <div className='button-container  mt-12'>
        <Link className="" to={"/signup"}>
        <button className="button-secondary-wrapper text-center  py-1 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Get Started💕</button>
        </Link>
        <Link className="" to={"/featured"}>
        <button className="button-secondary-wrapper mx-8 py-1 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Our Stories📃</button>
        </Link>
        </div>
        </div>
        <img className="img-wrapper w-[40%] mt-36 font-alice flex items-center" src={vectorImg} alt="" />
        </div>
      </div>
    );
  }
  
export default Hero;