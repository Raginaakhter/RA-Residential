import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to apply active styles
  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-fuchsia-600 px-2 py-1 rounded font-semibold"
      : "hover:bg-fuchsia-600 px-2 py-1 rounded";

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-emerald-600 px-4 py-2 rounded-2xl hover:bg-fuchsia-600 transition duration-300">
              RA Residential
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink className={activeClass} to="/">Home</NavLink>
            <NavLink className={activeClass} to="/userprofile">User Profile</NavLink>
            <NavLink className={activeClass} to="/contact">Contact</NavLink>
            <NavLink className={activeClass} to="/comments">Comments</NavLink>
            <NavLink className={activeClass} to="/properties">Properties</NavLink>

            {user && user.email ? (
              <>
                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User" />
                <button onClick={logOut} className="btn bg-emerald-600 hover:bg-red-500 text-white">Log Out</button>
              </>
            ) : (
              <Link to="/login" className="btn bg-emerald-600 hover:bg-emerald-700 text-white">Login</Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
          <NavLink className={activeClass} to="/">Home</NavLink>
          <NavLink className={activeClass} to="/userprofile">User Profile</NavLink>
          <NavLink className={activeClass} to="/contact">Contact</NavLink>
          <NavLink className={activeClass} to="/comments">Comments</NavLink>
          <NavLink className={activeClass} to="/properties">Properties</NavLink>

          {user && user.email ? (
            <>
              <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="User" />
              <button onClick={logOut} className="btn bg-emerald-600 hover:bg-red-500 text-white w-full">Log Out</button>
            </>
          ) : (
            <Link to="/login" className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navber;
