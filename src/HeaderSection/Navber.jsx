import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';

import { AuthContext } from '../provider/Authprovider';


const Navber = () => {


    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='flex space-x-5'>
            <div>
                <header>
                    <h1 className='mt-4 ml-4 rounded-2xl text-center text-2xl bg-emerald-600 w-fit px-4 py-2 transition duration-300 ease-in-out hover:scale-110 border-b-blue-600 hover:bg-fuchsia-600'>
                        RA Residential
                    </h1>
                </header>
            </div>
            <div className='mt-5 flex gap-5 ml-10'>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/">Home</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/updateprofile">Update Profile</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/userprofile">User Profile</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/contact">Contact us</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/comments">Comments</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/properties">Properties</NavLink>
            </div>
            <div>
                <nav className='flex gap-2 mt-3 ml-10'>


                    {

                        user && user?.email ? <div>
                            <img className='w-12 rounded-full h-12' src={user.photoURL
                            } /> <p>{user.displayName}</p>
                        </div> : <FaUserCircle className="text-3xl text-white w-10 h-10" />
                    }


                    <span className="text-lg font-semibold"></span>
                    {
                        user && user.email ? (
                            <button onClick={logOut} className="btn btn-dash bg-emerald-600">Log-Out</button>
                        ) : (
                            <Link className="btn btn-dash bg-emerald-600" to="/login">Login</Link>
                        )
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navber;
