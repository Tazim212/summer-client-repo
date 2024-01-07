/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxios from "../../hooks/UseAxios";


const Navbar = () => {

    const { user, loggedOut } = useContext(AuthContext)
    const [isAdmin] = UseAxios();

    const [userName, setUserName] = useState('')

    const handleLogOut = () =>{
        loggedOut()
        .then( () =>{})
    }

    const lists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li>
            <NavLink to='/instructors'>Instructors</NavLink>
        </li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        {
            isAdmin ? <li><Link to='/dashboard/admin'>Dashboard</Link></li> : <li><Link to='dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

        const handleName = () =>{
            // console.log(user.displayName)
            setUserName(user.displayName);
        }

    return (
        <div className="navbar bg-orange-300 opacity-70 rounded-sm mb-16" style={{zIndex: 10}}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg-red-900 text-gray-200 font-bold rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <img src={logo} className="w-14 h-14 my-1 ms-5 rounded-full" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex text-fuchsia-950 font-semibold">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <img className="w-10 h-10 mr-12 rounded-full" onMouseOver={handleName} src={user.photoURL} title={userName} alt="" /> : ''
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>:<Link to="/login"><button className="btn btn-primary mr-5">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;