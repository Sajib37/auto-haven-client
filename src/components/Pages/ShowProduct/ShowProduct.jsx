import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../Shared/Product/Product";
import Carosol from "../../Shared/Carosol/Carosol";

const ShowProduct = () => {
    const products = useLoaderData();
    const [productsLength, setProductsLength] = useState(4);
    const handlShowAll = () => {
        const dl = products.length;
        setProductsLength(dl)
    }
    return (
        <div className="">
            <Carosol></Carosol>
            <div className="py-10 md:py-16 px-1">
                <h1 className="text-center text-3xl md:text-5xl font-semibold font-serif">
                    Explore {products[0].brand} collection <br />{" "}
                    <span className="text-xl font-semibold text-gray-500">
                        And find the perfect {products[0].brand} for you
                    </span>
                </h1>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
                    {products.slice(0,productsLength).map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button className={`mx-auto border-2 bg-green-800 p-2 px-4 text-white rounded-lg ${productsLength === products.length ||productsLength >= products.length? 'hidden' : ''}`} onClick={handlShowAll}>Show all</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
