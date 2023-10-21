import help from "/icons/help-desk.png";
import product from "/icons/products.png";
import quality from "/icons/quality.png";
const ChoosenUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-1 md:px-4 mb-12 md:mb-16 mt-20">
            <h1 className="text-center text-3xl md:text-4xl my-10 lg:my-16 font-lobstar font-bold">
                Why Choose Auto Haven?
            </h1>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className=" text-3xl md:text-4xl font-bold ">
                        Auto Haven Advantages: <br /> <span className="text-orange-400">Your Road to Exceptional Car
                        Buying</span>
                    </h1>
                    <p className="pt-4 text-gray-400 font-medium text-justify">
                        Discover a world of benefits and excellence at Auto
                        Haven. We pride ourselves on providing a seamless
                        car-buying experience with a wide selection of vehicles,
                        competitive pricing, and a commitment to quality. Our
                        dedicated team is ready to guide you on your journey to
                        the perfect vehicle, ensuring you enjoy every step of
                        the way.
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
                    <div className="flex gap-2 flex-col lg:flex-row">
                        <img className="w-24 mx-auto" src={help} alt="" />
                        <div>
                            <h1 className="text-xl font-bold">
                                Exceptional Customer Service
                            </h1>
                            <p className="font font-medium text-gray-400 text-justify">
                                Our dedicated team is committed to providing
                                exceptional customer service. We're here to
                                assist you at every step of the car-buying
                                process, from selection to financing and beyond.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col lg:flex-row">
                        <img className="w-24 mx-auto" src={product} alt="" />
                        <div>
                            <h1 className="text-xl font-bold">
                                Wide Selection
                            </h1>
                            <p className="font font-medium text-gray-400 text-justify">
                                Discover a vast range of cars from different
                                brands, models, and categories. Whether you're
                                looking for a family car, a sports car, or an
                                eco-friendly option, we have the perfect vehicle
                                for you
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col lg:flex-row">
                        <img className="w-24 mx-auto" src={quality} alt="" />
                        <div>
                            <h1 className="text-xl font-bold">
                                Competitive Pricing
                            </h1>
                            <p className="font font-medium text-gray-400 text-justify">
                                We offer competitive prices to ensure that you
                                get the best value for your money. Our
                                transparent pricing and financing options make
                                it easy to find a car that fits your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosenUs;
