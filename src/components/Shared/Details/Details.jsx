import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../../AuthProvider/AuthProvider";

const Details = () => {

    const product = useLoaderData()
    const { _id, brand, model, photo, type, rating, price, description } = product[0];
    const { user } = useAuth()

    const email = user.email;
    const id = _id;
    const cart = { id,email };
    const handleCart = () => {
        console.log(cart)
        fetch(`http://localhost:5000/carts`, {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
    }
    
    return (
        <div className="max-w-screen-xl mx-auto my-12">
            <div>
                <img src={photo} alt="" />
            </div>

            <div className="flex flex-col items-center px-2">
                <h1 className="text-center text-3xl md:text-4xl my-10 mb-6 lg:my-12 lg:mb-8 font-ubuntu font-bold underline underline-offset-8">Specification:</h1>
                <p className="text-gray-600 text-justify lg:px-16">Description: { description}</p>
                <ul className="mt-4">
                    <li className="font-serif font-semibold text-lg">Brand: { brand}</li>
                    <li className="font-ubuntu font-medium">Model: { model}</li>
                    <li className="font-ubuntu font-medium">Type: { type}</li>
                    <li className="font-semibold text-green-700">Rating: {rating}</li>
                    <li className="font-semibold text-red-400">Price: { price}$</li>
                </ul>
                <button onClick={handleCart} className="py-2 px-6 rounded-lg bg-[#0F2C59] text-white border-2 mt-4"> Add to cart</button>
            </div>
        </div>
    );
};

export default Details;

