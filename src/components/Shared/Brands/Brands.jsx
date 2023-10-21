import bmw from '/logos/bmw.png'
import toyota from '/logos/toyota.png'
import nisaan from '/logos/nisaan.png'
import mercedes from '/logos/mercedes.png'
import hyundai from '/logos/hyundai.png'
import audi from '/logos/audi.png'
import { useNavigate } from 'react-router-dom'






const Brands = () => {

    const navigate = useNavigate();
    const handleShowProducts = (brand) => {
        navigate(`/products/${brand}`)
    }


    return (
        <div className="max-w-screen-xl mx-auto mb-10 lg:mb-20 mt-4">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl my-10 lg:my-16 font-lobstar font-bold">
                Brand Excellence Here
                <br />
                <span className='text-base font-ubuntu text-gray-400'> where quality meets passion to create an automotive masterpiece that drives beyond expectations</span>
            </h1>
            <div className=' grid grid-cols-2 px-2 md:px-4 lg:px-20 md:grid-cols-3 gap-2 '>
                
                {/* BMW */}
                <div onClick={()=>handleShowProducts('bmw')} className=" cursor-pointer card bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={bmw}
                            alt="bmw"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>BMW</h1>
                    </div>
                </div>
                
                {/* toyota */}
                <div onClick={()=>handleShowProducts('toyota')} className=" cursor-pointer card bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={toyota}
                            alt="toyota"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>TOYOTA</h1>
                    </div>
                </div>
                
                {/* hyundai */}
                <div onClick={()=>handleShowProducts('hyundai')} className=" cursor-pointer card bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={hyundai}
                            alt="hyundai"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>HYUNDAI</h1>
                    </div>
                </div>
                
                {/* audi */}
                <div onClick={()=>handleShowProducts('audi')} className="cursor-pointer card bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={audi}
                            alt="audi"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>AUDI</h1>
                    </div>
                </div>
                
                {/* mercedes */}
                <div onClick={()=>handleShowProducts('mercedes')} className="card cursor-pointer bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={mercedes}
                            alt="mercedes"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>MERCEDES</h1>
                    </div>
                </div>
                
                {/* nisaan */}
                <div onClick={()=>handleShowProducts('nisaan')} className="card cursor-pointer bg-base-200 mx-auto rounded-md w-full ">
                    <figure className="px-8 pt-8">
                        <img
                            src={nisaan}
                            alt="nisaan"
                            className="w-24 h-24 md:w-32 "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg font-ubuntu font-bold'>NISAAN</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
