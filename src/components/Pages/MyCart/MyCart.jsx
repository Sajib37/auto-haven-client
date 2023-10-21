import { useState } from "react";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import SingleCart from "../../Shared/SingleCart/SingleCart";

const MyCart = () => {
    const [carts, setCarts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/carts/${user.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
        
    }, [])
    
    return (
        <div className="max-w-screen-xl mx-auto px-1 my-10 md:my-16">
            <h1 className="text-center text-3xl md:text-4xl  font-ubuntu font-semibold mb-4">Your order list here: </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3">
                {carts !== null ? (
                    carts.map(cart => <SingleCart key={cart._id} cart={cart}></SingleCart>)
                ) : (
                    <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
                )}
            </div>
        </div>
    );
};

export default MyCart;