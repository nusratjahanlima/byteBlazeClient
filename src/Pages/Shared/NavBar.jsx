import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            {/* <li><NavLink to='/cars'>Cars</NavLink></li> */}
                            <li><NavLink to='/laptops'>Laptops</NavLink></li>
                            <li><NavLink to='/appleMacBook'>Apple MacBook</NavLink></li>
                            {
                                user ? <>
                                    <button onClick={handleLogOut}>LogOut</button>
                                    {/* <p>{user?.displayName}</p> */}
                                </> :

                                    <>
                                        <li><NavLink to='/login'>Login</NavLink></li>
                                    </>
                            }

                        </ul>
                    </div>
                    <a className="text-4xl font-semibold">ByteBlaze</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><NavLink to='/'>Home</NavLink></li>
                        {/* <li><NavLink to='/cars'>Cars</NavLink></li> */}
                        <li><NavLink to='/laptops'>Laptops</NavLink></li>
                        <li><NavLink to='/appleMacBook'>Apple MacBook</NavLink></li>
                        {
                            user ? <>
                                <button onClick={handleLogOut}>LogOut</button>
                                {/* <p>{user?.displayName}</p> */}
                            </> :

                                <>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                </>
                        }
                        
                        {/* <li><NavLink to="/dashboard/UserHome">Dashboard</NavLink></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/dashboard/UserHome" className="btn bg-slate-400">Dashboard</Link>
                    {/* <Link to='/appleMacBook' className="btn">Apple MacBook</Link> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
