/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import { FaClipboard, FaPlus, FaHome, FaLayerGroup } from "react-icons/fa";

const Dashboard = () => {
    const [isAdmin] = UseAxios()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ? <>
                            <li className="pt-10 pb-4"><NavLink to='/dashboard/manageclasses'>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/manageusrs'>Manage Users</NavLink></li>
                        </> :
                            <>
                                <li className="pt-10 pb-5"><NavLink to='/dashboard/addclass'><FaPlus></FaPlus>Add A Class</NavLink></li>
                                <li><NavLink to='/dashboard/myclasses'><FaLayerGroup></FaLayerGroup>My Classes</NavLink></li>
                            </>
                    } 

                <div className="divider"></div>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to='/classes'><FaClipboard></FaClipboard>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;