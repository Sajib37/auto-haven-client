import slider1 from "/sliders/slide1.jpg";
import slider2 from "/sliders/slide2.jpg";
import slider3 from "/sliders/slide3.jpg";
import slider4 from "/sliders/slide4.jpg";

const Carosol = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={slider1}
                    className="h-[50vh] md:h-[60vh] lg:h-[75vh] w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-red-600 text-2xl font-bold btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="text-red-600 text-2xl font-bold btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={slider2}
                    className="h-[50vh] md:h-[60vh] lg:h-[75vh] w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-red-600 text-2xl font-bold btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="text-red-600 text-2xl font-bold btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={slider3}
                    className="h-[50vh] md:h-[60vh] lg:h-[75vh] w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-red-600 text-2xl font-bold btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="text-red-600 text-2xl font-bold btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={slider4}
                    className="h-[50vh] md:h-[60vh] lg:h-[75vh] w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className=" text-red-600 text-2xl font-bold btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className=" text-red-600 text-2xl font-bold btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Carosol;
