import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/UserContext';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            event.target.reset()
            navigate('/');
        })
        .then(error => {
            console.error('error:', error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col ">
                    <div className="text-center text-black">
                        <h1 className="text-5xl font-bold ">Please Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;