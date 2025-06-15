import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Register = () => {
    const navigate = useNavigate();
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        const form = new FormData(e.target);
        const name = form.get("Name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Validation
        if (name.length < 5) {
            setError({ name: "Name must be at least 5 characters long." });
            return;
        }

        if (password.length < 6) {
            setError({ password: "Password must be at least 6 characters long." });
            return;
        }

        // Create new user
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state || "/");
                    })
                    .catch((err) => console.error("Profile update failed:", err));
            })
            .catch((error) => {
                console.error("Registration error:", error.code, error.message);
            });
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-2xl font-semibold text-center'>Create a New Account</h1>

                            <form onSubmit={handleSubmit}>
                                <fieldset className="space-y-2">
                                    {error.name && <p className="text-red-500">{error.name}</p>}

                                    <label className="label">Name</label>
                                    <input name="Name" type="text" className="input input-bordered w-full" placeholder="Full Name" required />

                                    <label className="label">Photo URL</label>
                                    <input name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" required />

                                    <label className="label">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="input input-bordered w-full"
                                        placeholder="Email"
                                        required
                                    />

                                    {error.password && <p className="text-red-500">{error.password}</p>}

                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" required />

                                    {/* Removed Forgot Password Button */}

                                    <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
                                </fieldset>
                            </form>

                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link to="/login" className="text-red-500 font-semibold">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
