import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const UserHome = () => {

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

    return (
        <div>
            {userData.map(b => <div
                key={b._id}
            >
                <div className="font-bold flex flex-col justify-center items-center p-10 m-10 bg-slate-300">
                    <p>Name: {b.name}</p>
                    <p>User Email: {b.email}</p>
                    <p>Role: {b.role}</p>
                </div>
            </div>)}
        </div>
    );
};

export default UserHome;