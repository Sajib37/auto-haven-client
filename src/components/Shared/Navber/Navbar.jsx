import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
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
                        <img className="w-12 md:w-16" src={logo}></img>
                        <h1 className="text-xl md:text-2xl font-lobstar font-bold">
                            Auto Haven
                        </h1>
                    </div>

                    {/* Login user for small device */}
                    <div className="mr-2 lg:hidden ">
                        <h1>user</h1>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-ubuntu font-medium">{navList}</ul>
                </div>

                {/* Login user fro large device*/}
                <div className="hidden lg:flex">
                    <h1>user</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//
