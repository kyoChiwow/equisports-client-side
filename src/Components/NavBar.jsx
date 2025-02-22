import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Tooltip } from "react-tooltip";
import Loading from "../Pages/Loading";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const { user, signOutUser, loading } = useContext(AuthContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    signOutUser();
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const links = user ? (
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
        to={"/addequipment"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Add Equipment
      </NavLink>
      <NavLink
        to={"/myequipment"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        My Equipment
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to={"/support"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Support
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        About Us
      </NavLink>
    </>
  ) : (
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
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to={"/support"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        Support
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "text-black shadow-xl font-extrabold bg-gray-500 p-3 rounded-lg transition-colors duration-500 ease-in-out"
            : "font-semibold text-white hover:bg-gray-600 p-3 rounded-lg transition-colors ease-in-out duration-500"
        }
      >
        About Us
      </NavLink>
    </>
  );

  return (
    <div className="fixed z-10 bg-base-300 bg-opacity-80 w-full py-4">
      <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img className="w-[90px] rounded-full" src={logo} alt="" />
        </div>
        {/* Logo and Name */}
        {/* Items  */}
        <div className="items-center gap-8 hidden lg:flex justify-between mx-auto">
          {links}
        </div>
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
            className="menu menu-md dropdown-content rounded-box z-[1000] mt-3 w-52 p-2 shadow bg-[#222222] bg-opacity-95"
          >
            {links}
          </ul>
        </div>
        {/* Items  */}
        {/* Login and Register and theme */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <img
                data-tooltip-id="username-tooltip"
                data-tooltip-content={user?.displayName || "Anonymous"}
                data-tooltip-place="bottom"
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt="User Profile Picture here"
              />
              <button
                onClick={handleLogOut}
                className="btn btn-error btn-outline"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to={"/auth/login"}>
                <button className="btn text-white btn-success">Login</button>
              </Link>
              <Link to={"/auth/register"}>
                <button className="btn text-white btn-outline btn-secondary">
                  Register
                </button>
              </Link>
            </>
          )}
          <label className="swap swap-rotate" onClick={handleThemeChange}>
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              onChange={handleThemeChange}
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {/* Login and Register and theme */}
        <Tooltip id="username-tooltip"></Tooltip>
      </div>
    </div>
  );
};

export default NavBar;
