import { useEffect } from "react";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const SingleCart = ({ cart }) => {
    const { id } = cart;
    const [cartProduct, setCartProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/carts/cart/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setCartProduct(data);
                }, 1000);
            });
    }, []);

    if (cartProduct.length > 0) {
        const { brand, model, photo, type, rating, price, description } =
            cartProduct[0];
        return (
            <div className="card card-compact bg-base-100 shadow-xl relative rounded-md">
                <figure>
                    <img
                        src={photo}
                        alt={model}
                        className="h-32"
                    />
                </figure>
                <div className="card-body">
                    <h1 className="text-lg font-semibold">Brand: {brand}</h1>
                    <h1 className="font-medium">Model: {model}</h1>
                    <p className="font-medium text-orange-400">Price: { price} $</p>
                </div>
                <AiTwotoneDelete className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer"></AiTwotoneDelete>
            </div>
        );
    } else {
        return (
            <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
        );
    }
};

export default SingleCart;
