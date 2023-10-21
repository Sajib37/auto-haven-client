import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import MyCart from "../Pages/MyCart/MyCart"
import PrivateRouter from "./PrivateRouter";
import ShowProduct from "../Pages/ShowProduct/ShowProduct";
import Details from "../Shared/Details/Details";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "add",
                element:<PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: "cart",
                element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                
            },
            {
                path: `/products/:item`,
                element: <ShowProduct></ShowProduct>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.item}`)
            },
            {
                path: `/details/:id`,
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            },
           

        ]
    }
])

export default router;