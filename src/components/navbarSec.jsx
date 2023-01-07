import "./btn-style.css"
import { Link } from "react-router-dom";
import shoppingBag from "../assets/shopping-bag.svg"

function Navbar() {
    return (
      <div className="sm:container sm:mx-auto nav-wrapper flex justify-center items-center">
        <ul className="list-wrapper flex flex-row justify-around align-center mt-12">
          <li className="list-items mx-12">
          <Link className="" to={"/"}>
            <button className="button-wrapper py-2 bg-white px-3 text-black border-2 rounded-sm border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all">Home🏠</button>
          </Link>
            </li>
          <li className="list-items mx-12">
          <Link className="" to={"/Store"}>
            <button className="button-wrapper py-2 px-3 rounded-sm bg-white hover:bg-slate-50 inline-flex transition-all">Store<img src={shoppingBag} className = "w-[30px] px-1" alt="" /></button>
            </Link>
            </li>
          <li className="list-items mx-12">
          <Link className="" to={"/Featured"}>
            <button className="button-wrapper py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Featured📃</button>
          </Link>
          </li>
          <li className="list-items mx-12">
          <Link className="" to={"/Signup"}>
            <button className="button-wrapper py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Join Us🚀</button>
            </Link>
            </li>
        </ul>
        </div>
    );
  }
  
export default Navbar;