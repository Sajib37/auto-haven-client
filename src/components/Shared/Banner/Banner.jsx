import bannerImg from "/banner-image.png"
const Banner = () => {
    return (
        <div className="bg-[#F8F0E5] w-full py-8 lg:py-0 h-[80vh] lg:h-[60vh]">
            <div className="max-w-screen-xl  mx-auto px-2 flex items-center gap-4 justify-center lg:justify-between flex-col lg:flex-row">
                <div className=" h-full space-y-2 ">
                    <h1 className="md:text-5xl text-4xl font-ubuntu font-bold text-center">Discover Your Ideal Vehicle at <br /> <span className="text-orange-600">Auto Haven</span></h1>
                    <p className="text-base text-center font-ubuntu font-semibold text-gray-500">Where Quality Meets Affordability.</p>
                    <p className="text-center font-ubuntu text-gray-400">Your Perfect Ride from a Wide Selection of Premium Cars and Drive Your Dreams into Reality</p>
                </div>
                <div className="">
                    <img className=" md:max-w-md lg:max-w-2xl" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;