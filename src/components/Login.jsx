import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';


const Login = () => {
  const [error,setError]= useState({});
  const { userlogin } = useContext(AuthContext); 
  const location= useLocation();
  const navigate =useNavigate();
  console.log(location)
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Trying to login:", email, password);

    userlogin(email, password)
      .then(result => {
        const user = result.user;
        navigate(location?.state?location.state :"/");
        console.log("Login successful:", user);
        form.reset();
      })
      .catch(err => {
       setError( {...error , login : err.code });
       
      });
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className='text-2xl font-semibold text-center'>Login Your Account</h1>
              <form onSubmit={handlesubmit}>
                <fieldset className="fieldset">
                  <label htmlFor="email" className="label">Email</label>
                  <input id="email" name="email" type="email" className="input input-bordered" placeholder="Email" />

                  <label htmlFor="password" className="label">Password</label>
                  <input id="password" name="password" type="password" className="input input-bordered" placeholder="Password" />

                {

                  error.login && (
                    <label className='label text-sm text-center'>
                    {error.login}
                    </label>
                  )
                }



                  <div>
                    <Link to="/reset-password" className="link link-hover">Forgot password?</Link>
                  </div>

                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p>Don't have an account? <Link className='text-red-500 font-semibold' to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
