import { NavLink, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { MdMenu } from "react-icons/md";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user,logOut } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            setUserName(user.displayName);
            setPhoto(user.photoURL);
        }
    }, [user]);

    // logout handle
    const handleLogOut = () => {
        logOut()
            .then(async result => {
                toast.success('Log Out Successfully')
                setPhoto(null);
                setUserName(null);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate('/')
            })
        .catch(error=>toast.error('Log out Failed !!'))
    }

    const navList = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/cart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    My cart
                </NavLink>
            </li>

            {/* Login and Logout toggle here */}
            {user ? (
                <button onClick={handleLogOut} className="p-2 rounded-lg px-3  border-black active:bg-black active:text-white">Log out</button>
            ) : (
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
            )}
        </>
    );
    return (
        <div className="">
            <div className="navbar flex justify-between px-1 md:px-3 py-4 max-w-screen-xl mx-auto">
                <div className="navbar-start flex justify-between w-full lg:w-48">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <MdMenu className="text-3xl"></MdMenu>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-1 z-[1] p-1 shadow bg-base-100 font-ubuntu font-medium border rounded-md h-[50vh] w-52"
                        >
                            {navList}
                        </ul>
                    </div>

                    <div className="flex items-center md:gap-1">
                        <img className="w-12 md:w-14" src={logo}></img>
                        <h1 className="text-xl md:text-2xl font-lobstar font-bold">
                            Auto Haven
                        </h1>
                    </div>

                    {/* Login user for small device */}
                    <div className="mr-2 lg:hidden w-10 h-10 rounded-full">
                        {photo && (
                            <img
                                className="h-full w-full rounded-full"
                                src={photo}
                            ></img>
                        )}
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-ubuntu font-medium">
                        {navList}
                    </ul>
                </div>

                {/* Login user fro large device*/}
                <div className="hidden  lg:flex gap-2">
                    <h1 className="text-lg font-medium font-ubuntu">
                        {userName}
                    </h1>
                    {photo && (
                        <img
                            className="w-10 h-10 rounded-full"
                            src={photo}
                            alt=""
                        />
                    )}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Navbar;

//
