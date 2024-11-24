
import cart from "../images/cart.png"
import wishlist from "../images/wishlist.png"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
      <div className="navbar bg-white/30 backdrop-blur-xl fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
            <Link to='/'>Home</Link>
            <Link to='/Statistics'>Statistics</Link>
            <Link to='/Dashboard'>Dashboard</Link>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-8">
            <Link to='/'>Home</Link>
            <Link to='/Statistics'>Statistics</Link>
            <Link to='/Dashboard'>Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end gap-2 flex items-center">
        <Link to ='/cart' className="cart w-8 h-8 "><img className="rounded-full p-2 bg-white"  src={cart} /> </Link>
        <Link to ='/wishlist' className="wishlist w-8 h-8 "><img className="rounded-full bg-white p-2" src={wishlist}/></Link>
      </div>
    </div>
    );
};

export default Navbar;