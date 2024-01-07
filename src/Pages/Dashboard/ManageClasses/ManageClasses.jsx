/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import UseAxios from "../../../hooks/UseAxios";


const ManageClasses = () => {

    const [axiosSecure] = UseAxios()
    const [classes, setClasses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/dashboard/manageclasses')
        .then(res =>res.json())
        .then(data => {
            setClasses(data)
        })
    }, [])
    console.log(classes)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ClassName</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map(clas => <tr key={clas._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={clas.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{clas.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {clas.instructor_name}
                            </td>
                            <td>{clas.available_seats}</td>
                            <td>{clas.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageClasses;