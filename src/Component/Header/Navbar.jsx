import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/allArt">All Art & craft Items</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/addCraft">Add Craft Item</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/myArt">My Art&Craft List</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:ml-0 -ml-5">DrawNook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-1">
          <div className="tooltip tooltip-left" data-tip="name">
            <div tabIndex={0} className="btn  btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-ghost hidden sm:inline-block lg:inline-block md:inline-block font-bold">
            <NavLink to={"/register"}>Registration</NavLink>
            </button>
          </div>
          <div>{/* <button className="btn">Login</button> */}</div>
          <div className="dropdown dropdown-end">
            <button className="m-1 btn btn-ghost font-bold">
              {" "}
              <NavLink to={"/login"}>Login</NavLink>{" "}
            </button>
            <ul className="p-2 lg:hidden shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-">
              <li>
                <NavLink to={"/register"}>Registration</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
