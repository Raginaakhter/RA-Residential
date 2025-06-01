
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Navber = () => {
    return (
        <div className='grid grid-cols-3 space-x-5 '>
            <div>
                <header>
                    <h1 className=' mt-4 ml-4 rounded-2xl text-center text-2xl bg-emerald-600 w-50 h-10 transition duration-300 ease-in-out hover:scale-110 border-b-blue-600 hover:bg-fuchsia-600'>
                        RA Residentail
                    </h1>
                </header>
            </div>
            <div className='space-x-5 mt-5'>

                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/">Home</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/updateprofile">Update Profile</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/userprofile">User Profile</NavLink>
                <NavLink className="hover:bg-fuchsia-600 hover:rounded-b-sm p-1" to="/contact">Contact</NavLink>


            </div>
            <div>

               <nav className='flex gap-2 mt-3 ml-30'>
                  <FaUserCircle className="text-3xl text-white w-20 h-12" />
                <span className="text-lg font-semibold"></span>
                 <button className="btn btn-dash bg-emerald-600">Login</button>
              
               </nav>

            </div>



        </div>
    );
};

export default Navber;