import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UpdateProduct = () => {

    const currentProduct = useLoaderData();
    const { _id, brand, model, photo, type, rating, price, description } = currentProduct[0];

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const model = form.model.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedProduct = {
            brand, model, photo, type, rating, price, description
        }

        console.log(updatedProduct)
    }
    
    return (
        <div className="max-w-screen-xl mx-auto mb-12 md:mb-20">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl my-10 lg:mt-16 font-lobstar font-bold">
                Update Current Product
            </h1>
            <div className="mx-auto  max-w-sm md:max-w-lg border-2 rounded-lg bg-[#f8f0e5b3] px-2 md:px-4 py-8">
                <form onSubmit={handleUpdateProduct}>
                    <label className="lg:text-lg font-ubuntu">Select a Brand:</label>
                    <select defaultValue={brand} name="brand" className="select select-bordered w-full  mb-4" required>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Hyundai</option>
                        <option>Mercedes</option>
                        <option>Nisaan</option>
                        <option>Toyota</option>
                    </select>
                    <label className="lg:text-lg font-ubuntu">Product Name:</label>
                    <input defaultValue={model} name="model" type="text" placeholder="Product name or Model" className="input input-bordered w-full mb-4" required />
                    <label className="lg:text-lg font-ubuntu">Photo URL:</label>
                    <input defaultValue={photo} name="photo" type="text" placeholder="Enter the photo url" className="input input-bordered w-full mb-4" required />
                    <label className="lg:text-lg font-ubuntu">Type:</label>
                    <input defaultValue={type} name="type" type="text" placeholder="Enter the type" className="input input-bordered w-full mb-4" required />
                    <div className="flex gap-2 flex-col md:flex-row">
                        <div className="flex gap-1  flex-col md:flex-row">
                            <label className="lg:text-lg font-ubuntu">Rating:</label>
                            <input defaultValue={rating} name="rating" type="text" placeholder="Enter the Rating" className="input input-bordered w-full mb-4" required />
                        </div>
                        <div className="flex gap-1  flex-col md:flex-row">
                            <label className="lg:text-lg font-ubuntu">Price:</label>
                            <input defaultValue={price} name="price" type="text" placeholder="Enter the Price" className="input input-bordered w-full mb-4" required />
                        </div>
                    </div>
                    <label  className="lg:text-lg font-ubuntu">Short description:</label>
                    <textarea defaultValue={description} name="description" className="textarea textarea-bordered w-full mb-4" placeholder="Enter short description here."></textarea>
                    <button name="submit" className="btn btn-active btn-neutral w-32 block mx-auto">Update</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;