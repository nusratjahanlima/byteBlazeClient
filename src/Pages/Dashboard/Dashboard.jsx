import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCarRear } from "react-icons/fa6";


const Dashboard = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email)

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // Fetch user data from the API
        axios.get(`http://localhost:5000/email?email=${user?.email}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, [user?.email]);
    console.log(userData)
    const isAdmin = userData.some(a => a.role === "admin");


    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content "> {/* flex flex-col items-center justify-center */}
                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>Open Dashboard</span>
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side" data-aos="fade-right">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 min-h-full bg-gray-600 text-white border-e-8 border-green-300">

                        {
                            isAdmin ? (
                                <>
                                    <li><NavLink to="/dashboard/UserHome"><CgProfile /> Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/AddACar"><MdLibraryAdd /> Add A Car</NavLink></li>
                                    <li><NavLink to="/dashboard/UpdateCar"><FaCarRear /> Update Car</NavLink></li>
                                    <li><NavLink to="/dashboard/AddALaptop"><MdLibraryAdd /> Add A Laptop</NavLink></li>
                                    <li><NavLink to="/dashboard/UpdateLaptop"><FaCarRear /> Update Laptop</NavLink></li>
                                    <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to="/dashboard/UserHome"><CgProfile /> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/OrderdCars"><FaCarRear /> Order Cars</NavLink></li>
                                    <li><NavLink to="/dashboard/OrderdLaptops"><FaCarRear /> Order Laptops</NavLink></li>
                                    <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>

                                </>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
