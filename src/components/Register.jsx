import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Register = () => {
    const navigate = useNavigate(); // Fixed: removed extra `navigatee`
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();

    const handlesubmit = (e) => {
        e.preventDefault();
        setError({});
        const form = new FormData(e.target);
        const name = form.get("Name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Name validation
        if (name.length < 5) {
            setError({ name: "Name must be at least 5 characters long" });
            return;
        }

        // Password validation
        if (password.length < 6) {
            setError({ password: "Password must be at least 6 characters long" });
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state ? location.state : "/");
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-2xl font-semibold text-center'>Create a new Account</h1>
                            <form onSubmit={handlesubmit}>
                                <fieldset className="fieldset space-y-2">
                                    {error.name && (
                                        <label className="text-red-500 mb-2 block">{error.name}</label>
                                    )}

                                    <label className="label">Name</label>
                                    <input name="Name" type="text" className="input input-bordered w-full" placeholder="Name" required />

                                    <label className="label">Photo URL</label>
                                    <input name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />

                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />

                                    {error.password && (
                                        <label className="text-red-500 mb-2 block">{error.password}</label>
                                    )}

                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />

                                    <div>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>

                                    <button className="btn btn-neutral mt-4 w-full">Register</button>
                                </fieldset>
                            </form>

                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link className='text-red-500 font-semibold' to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
