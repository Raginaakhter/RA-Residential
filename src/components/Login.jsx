import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Login = () => {
  const [error, setError] = useState({});
  const [emailInput, setEmailInput] = useState("");
  const { userlogin, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setEmailInput(email);
    setError({});

    userlogin(email, password)
      .then(result => {
        const user = result.user;
        navigate(location?.state || "/");
        form.reset();
      })
      .catch(err => {
        setError({ ...error, login: err.code });
      });
  };

  const handleResetPassword = () => {
    if (!emailInput) {
      alert("Please enter your email to reset the password.");
      return;
    }

    resetPassword(emailInput)
      .then(() => {
        alert("Password reset email sent! Please check your inbox.");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send reset email. Please try again later.");
      });
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
            <div className="card-body">
              <h1 className='text-2xl font-semibold text-center'>Login to Your Account</h1>
              <form onSubmit={handleSubmit}>
                <fieldset className="space-y-2">
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmailInput(e.target.value)}
                  />

                  <label htmlFor="password" className="label">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                  />

                  {error.login && (
                    <p className='text-sm text-red-500 text-center'>{error.login}</p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="link link-hover text-sm text-green-500"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button type="submit" className="btn bg-green-500 hover:bg-gray-300 w-full mt-4 text-amber-50">Login</button>
                </fieldset>
              </form>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/register" className='text-green-500 font-semibold hover:underline'>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
