import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";

const Login = () => {
    const {googleLogin,emailLogin ,resetPassword}=useAuth()
    const emailRef = useRef()
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    // google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(async result => {
                toast.success(`Welcome ${result?.user?.displayName}`)
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => toast.error('Opps! Login Failed.'))        
    }

    // Login with gamil and password
    const handleEmailLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email,password)
            .then(async result => {
                toast.success('Login Successfully !!!')
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate(location?.state ? location.state : '/');
                
            })
            .catch(error => {
            toast.error('Invalid Email or Password !!')
        })
    }

    // reset password
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Please, Enter your email..')
        }
        else {
            resetPassword(email)
                .then(result => {
                    toast.success('Please, check your email for new password')
                })
                .catch(error => console.log(error));
        }
    }    

    return (
        <section className="max-w-md my-8 md:my-12 mx-auto px-1 md:max-w-lg lg:max-w-lg">
            <section className="border-2 bg-[#f8f0e5b3] rounded-lg px-4 py-8 md:py-12 ">
                <h1 className="text-2xl md:text-4xl mb-4 text-center font-ubuntu font-semibold">Login to your account</h1>

                <form onSubmit={handleEmailLogin}>
                    <label className="text-lg font-ubuntu">Email</label>
                    <input
                        type="email"
                        required name="email"
                        placeholder="Enter your Email"
                        ref={emailRef}
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <label className="text-lg font-ubuntu">Password</label>
                    <input
                        type="password"
                        required name="password"
                        placeholder="Enter your password"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <p onClick={handleResetPassword} className="font-ubuntu text-red-500">Forgot Password?</p>
                    <button name="submit" className="btn btn-active w-full mt-4 mb-2">Login</button>
                </form>
                <button onClick={handleGoogleLogin} className="btn btn-info w-full text-white"><BsGoogle className="text-xl"></BsGoogle> Login With Google</button>
                <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-green-500 " to='/register'>Register</Link></p>
            </section>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Login;
