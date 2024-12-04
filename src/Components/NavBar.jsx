import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const NavBar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/allequipments"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        All Equipments
      </NavLink>
      <NavLink
        to={"/auth/addequipment"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Add Equipment
      </NavLink>
      <NavLink
        to={"/auth/myequipment"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        My Equipment
      </NavLink>
    </>
  );
  return (
    <div className="bg-[#343434]">
      <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img className="w-[90px] rounded-full" src={logo} alt="" />
          <h1 className="text-3xl font-bold text-white hidden lg:flex">EquiSports</h1>
        </div>
        {/* Logo and Name */}
        {/* Items  */}
        <div className="items-center gap-8 hidden lg:flex">{links}</div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Items  */}
        {/* Login and Register */}
        <div className="flex gap-4">
          <Link>
            <button className="btn text-white btn-success">Login</button>
          </Link>
          <Link>
            <button className="btn text-white btn-secondary">Register</button>
          </Link>
        </div>
        {/* Login and Register */}
      </div>
    </div>
  );
};

export default NavBar;
