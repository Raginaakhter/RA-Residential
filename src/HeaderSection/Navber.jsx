// import { Link, NavLink } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../provider/Authprovider';

// const Navber = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to apply active styles
//   const activeClass = ({ isActive }) =>
//     isActive
//       ? "bg-fuchsia-600 px-2 py-1 rounded font-semibold"
//       : "hover:bg-fuchsia-600 px-2 py-1 rounded";

//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold bg-emerald-600 px-4 py-2 rounded-2xl hover:bg-fuchsia-600 transition duration-300">
//               RA Residential
//             </Link>
//           </div>

//           {/* Hamburger Menu - Mobile */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Menu items */}
//           <div className="hidden md:flex items-center space-x-6">
//             <NavLink className={activeClass} to="/">Home</NavLink>
//             <NavLink className={activeClass} to="/userprofile">User Profile</NavLink>
//             <NavLink className={activeClass} to="/contact">Contact</NavLink>
//             <NavLink className={activeClass} to="/comments">Comments</NavLink>
//             <NavLink className={activeClass} to="/properties">Properties</NavLink>

//             {user && user.email ? (
//               <>
//                 <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User" />
//                 <button onClick={logOut} className="btn bg-emerald-600 hover:bg-red-500 text-white">Log Out</button>
//               </>
//             ) : (
//               <Link to="/login" className="btn bg-emerald-600 hover:bg-emerald-700 text-white">Login</Link>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800 display-block">
//           <NavLink className={activeClass} to="/">Home</NavLink>
//           <NavLink className={activeClass} to="/userprofile">User Profile</NavLink>
//           <NavLink className={activeClass} to="/contact">Contact</NavLink>
//           <NavLink className={activeClass} to="/comments">Comments</NavLink>
//           <NavLink className={activeClass} to="/properties">Properties</NavLink>

//           {user && user.email ? (
//             <>
//               <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User" />
//               <button onClick={logOut} className="btn bg-emerald-600 hover:bg-red-500 text-white w-full">Log Out</button>
//             </>
//           ) : (
//             <Link to="/login" className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full">Login</Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navber;
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Active NavLink styling
  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-green-500 px-4 py-2 rounded-md font-bold text-white "
      : "hover:bg-gray-300 px-3 py-2 rounded-md";

  // Menu items (reused in mobile + desktop)
  const navLinks = (
    <>
      <li className="mr-2"><NavLink className={activeClass} to="/">Home</NavLink></li> 
      <li className="mr-2"><NavLink className={activeClass} to="/userprofile">User Profile</NavLink></li>
      <li className="mr-2"><NavLink className={activeClass} to="/contact">Contact</NavLink></li>
      <li className="mr-2"><NavLink className={activeClass} to="/comments">Comments</NavLink></li>
      <li className="mr-2"><NavLink className={activeClass} to="/properties">Properties</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left / Brand */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}

            {/* Auth Buttons (Mobile) */}
            <li className="mt-2">
              {user && user.email ? (
                <div className="flex flex-col gap-2">
                  <img
                    className="w-10 h-10 rounded-full border border-gray-600"
                    src={user.photoURL}
                    alt="User"
                  />
                  <button
                    onClick={logOut}
                    className="btn btn-sm bg-green-500 hover:bg-gray-300 text-white"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-sm bg-green-500 hover:bg-gray-300 text-white"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Brand */}
        <Link to="/" className="btn bg-green-500 normal-case text-xl font-bold text-amber-100 ">
          RA Residential
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right (Desktop Auth Buttons) */}
      <div className="navbar-end hidden lg:flex">
        {user && user.email ? (
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full border border-gray-600"
              src={user.photoURL}
              alt="User"
            />
            <button
              onClick={logOut}
              className="btn bg-green-500 hover:bg-gray-500 text-white"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-green-500 hover:bg-gray-300 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
