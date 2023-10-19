import React from "react";
const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] bg-error-bg bg-cover flex items-center justify-center">
            <div>
                <h1 className="text-red-700 font-bold md:text-7xl text-5xl text-center">
                    Opps! <br/> <span className="text-orange-400 md:text-5xl text-3xl">Page not Found</span>
                </h1>
                <h1 className="text-black font-bold text-xl mt-4 text-center">Sorry, the page you are looking for does not exist.</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
