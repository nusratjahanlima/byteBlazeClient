import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/SignUp/Register";
import Login from "../Pages/SignUp/Login";
import PrivateRoute from "./PrivateRoute";
import PleaseLogin from "../Pages/SignUp/PleaseLogin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/UserDashboard/UserHome";
import AddALaptop from "../Pages/AdminDashboard/AddALaptop";
import UpdateLaptop from "../Pages/AdminDashboard/UpdateLaptop";
import Laptops from "../Pages/Laptops/Laptops";
import SingleLaptop from "../Pages/Laptops/SingleLaptop";
import OrderdLaptops from "../Pages/UserDashboard/OrderdLaptops";
import AppleMacBook from "../Pages/AppleMacBook/AppleMacBook";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/latestThreeLaptops')
            },
           
            {
                path: '/laptops',
                element: <Laptops/>,
                loader: () => fetch('http://localhost:5000/allLaptops')
            },
            {
                path: '/singleLaptops/:_id',
                element: <PrivateRoute><SingleLaptop /></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/allLaptops/${params._id}`)
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/pleaseLogin',
                element: <PleaseLogin />
            },
            {
                path: '/appleMacBook',
                element: <AppleMacBook/>
            },
            {
                path: '*',
                element: <div>404</div>
            },





        ]
    },


    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            //admin
            {
                path: 'UserHome', 
                element: <UserHome></UserHome> //Common dashboard
            },
           
            {
                path: 'OrderdLaptops',
                element: <OrderdLaptops></OrderdLaptops>
            },


            {
                path: 'AddALaptop',
                element: <AddALaptop></AddALaptop>
            },
            {
                path: 'UpdateLaptop',
                element: <UpdateLaptop></UpdateLaptop>
            },
        ]
    }

])

