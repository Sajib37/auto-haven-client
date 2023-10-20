
const Product = ({ product }) => {
    const { brand, model, photo, type, rating, price, description } = product;
    
    return (
        <div className="flex flex-col md:flex-row border-2 border-[#DAC0A3] rounded-xl gap-4">
            <div className="w-72 md:w-80 md:h-52 h-44 mx-auto md:mx-0 p-2">
                <img className=" w-full h-full" src={photo} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-1">
                <h1 className="font-serif font-semibold text-lg">Brand: {brand}</h1>
                <h1 className="font-ubuntu font-medium">Model: {model}</h1>
                <p className="text-gray-500 font-ubuntu">Type: {type}</p>
                <div className="flex justify-between font-ubuntu text-gray-500">
                    <p>Rating: {rating}</p>
                    <p className="text-red-400">Price: {price}$</p>
                </div>
                <div className="flex gap-2 my-2">
                    <button className="py-2 px-6 rounded-lg bg-[#0F2C59] text-white border-2">Details</button>
                    <button className="py-2 px-6 rounded-lg bg-[#0F2C59] text-white border-2">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;