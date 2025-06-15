
import { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { FaUserCircle } from "react-icons/fa";
const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>



            <div className='justify-items-center'>
                {

                    user && user?.email ? <div>
                        <img className='w-2xs rounded-2xl mb-5' src={user.photoURL
                        } /> <p>Name : {user.displayName}</p>
                        <p>  
                            Email :  {user && user?.email}
                        </p>
                    </div> : <FaUserCircle className="text-3xl text-white w-10 h-10" />
                }
            </div>
        </div>
    );
};

export default UserProfile;