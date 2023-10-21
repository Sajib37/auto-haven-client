import { useState } from "react";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import SingleCart from "../../Shared/SingleCart/SingleCart";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyCart = () => {
    const [carts, setCarts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://auto-haven-server.vercel.app/carts/${user.email}`)
            .then((res) => res.json())
            .then((data) => setCarts(data));
    }, []);

    const handleCartDelet = (_id) => {
        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire("Deleted!", "Your cart has been deleted.", "success");
                fetch(`https://auto-haven-server.vercel.app/cart/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setCarts(carts.filter((cart) => cart._id !== _id));
                            Swal.fire(
                                "Deleted!",
                                "Your cart has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-screen-xl mx-auto px-1 my-10 md:my-16">
            <Helmet>
                <title>
                    Auto Haven || My cart
                </title>
            </Helmet>
            <h1 className="text-center text-3xl md:text-4xl  font-ubuntu font-semibold mb-4">
                Your order list here:{" "}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3">
                {carts !== null ? (
                    carts.map((cart) => (
                        <SingleCart
                            key={cart._id}
                            cart={cart}
                            handleCartDelet={handleCartDelet}
                        ></SingleCart>
                    ))
                ) : (
                    <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
                )}
            </div>
        </div>
    );
};

export default MyCart;
