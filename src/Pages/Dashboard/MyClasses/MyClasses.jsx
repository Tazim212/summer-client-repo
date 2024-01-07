/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

const MyClasses = () => {

    const [myclass, setMyclass] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/dashboard/myclasses')
            .then(res => res.json())
            .then(data => {
                setMyclass(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
              
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ClassName</th>
                        <th>InstructorName</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Total Enrolled Students</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myclass.map((cls, index) =><tr key={cls._id} cls={cls}>
                        <th>{index + 1}</th>
                        <td>{cls.name}</td>
                        <td>{cls.instructor_name}</td>
                        <td>{cls.available_seats}</td>
                        <td>{cls.price}</td>
                        <td>{cls.status}</td>
                        <td>{cls.feedback}</td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary ms-2">Update</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;