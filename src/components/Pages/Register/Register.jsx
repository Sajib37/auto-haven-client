import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const { googleLogin, createUser } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
            toast.success(`Welcome ${result?.user?.displayName}`)
            })
        .catch(error=>toast.error('Login Failed!!'))
    }

    // Create user with email and password
    const handleCreateuser =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        if (password !== confirmPassword) {
            toast.error(`Passwords do not match.`)
            return;
        }
        else if(password.length < 6) {
            toast.error('password must be at least six character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('password must be contain Upper Case');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('password must be contain Lower Case');
            return;
        }
        else if(!/\d/.test(password)){
            toast.error('password must be contain a number');
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            toast.error('password must be contain a special Character');
            return;
        }
        else {
            createUser(email, password)
                .then(async result => {
                    toast.success('Account created successfully');
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    navigate('/login')
                })
                .catch(error => {
                    if (error == `FirebaseError: Firebase: Error (auth/email-already-in-use).`) {
                    toast.error("Your Email already in use.")
                    }
                    else {
                        toast.error('Account created Failed!')
                    }
            })
        }
    }

    return (
        <section className=" my-8 md:my-12 mx-auto px-1 max-w-sm md:max-w-lg lg:max-w-lg">
            <section className="border-2 rounded-lg px-4 py-8 md:py-12 ">
                <h1 className="text-2xl md:text-4xl mb-4 text-center font-ubuntu font-semibold">Create  a new account</h1>

                <form onSubmit={handleCreateuser}>
                    <label className="text-lg font-ubuntu">Your name</label>
                    <input
                        type="text"
                        name='name'
                        required
                        placeholder="Enter your name"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <label className="text-lg font-ubuntu">Email</label>
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder="Enter your Email"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <label className="text-lg font-ubuntu">Password</label>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Enter your password"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <label className="text-lg font-ubuntu">Confirm password</label>
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        placeholder="Confirm your password"
                        className="input mb-4 input-bordered input-primary w-full"
                    />
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" required className="checkbox" />
                        <p>Accept our <a className='font-ubuntu font-medium text-green-700' href="#">terms & consitions</a></p>
                    </div>
                    <button className="btn btn-active w-full mt-4 mb-2">register</button>
                </form>
                <button onClick={handleGoogleLogin} className="btn btn-info w-full text-white"><BsGoogle className="text-xl"></BsGoogle> Login With Google</button>
                <p className="font-ubuntu font-medium mt-4">Already have an account? Please, <Link className="text-green-500 " to='/login'>login</Link></p>
            </section>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Register;