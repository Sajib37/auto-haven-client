import React from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {googleLogin}=useAuth()

    // google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success(`Welcome ${result?.user?.displayName}`)
            })
            .catch(error => toast.error('Opps! Login Failed'))        
    }

    // Login with gamil and password
    return (
        <section className="max-w-md my-8 md:my-12 mx-auto px-1 md:max-w-lg lg:max-w-lg">
            <section className="border-2 rounded-lg px-4 py-8 md:py-12 ">
                <h1 className="text-2xl md:text-4xl mb-4 text-center font-ubuntu font-semibold">Login to your account</h1>

                <form action="">
                    <label className="text-lg font-ubuntu">Email</label>
                    <input
                        type="email"
                        required name="email"
                        placeholder="Enter your Email"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <label className="text-lg font-ubuntu">Password</label>
                    <input
                        type="password"
                        required name="password"
                        placeholder="Enter your password"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <p className="font-ubuntu text-red-500">Forgot Password?</p>
                    <button className="btn btn-active w-full mt-4 mb-2">Login</button>
                </form>
                <button onClick={handleGoogleLogin} className="btn btn-info w-full text-white"><BsGoogle className="text-xl"></BsGoogle> Login With Google</button>
                <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-green-500 " to='/register'>Register</Link></p>
            </section>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Login;
