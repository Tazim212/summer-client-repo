/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Classes = () => {

    const { user } = useContext(AuthContext);
    const {id} = useParams()
    const [classes, setClasses] = useState([])

    const [selected, setSelected] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])

    

    const handleClick = () => {
        user ? '' : Swal.fire('Please Log In First')
        fetch(`http://localhost:5000/classes/${id}`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selected)
        })
        .then(res=>res.json())
        .then(data =>{
            setSelected(data)
        })
    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-8 mb-16">
            {
                classes.map(cla => <div key={cla._id} cla={cla}>
                    <div className='card w-[95%] mx-2.5 md:mx-0 md:w-96 bg-slate-500 shadow-xl shadow-gray-700 mt-4'>
                        <figure><img src={cla.image} className="h-60 w-full" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-cyan-400">Class Name: {cla.name}</h2>
                            <h2 className="text-xl text-amber-300 font-semibold">Instructor Name: {cla.instructor_name}</h2>
                            <p className="text-amber-300">Available Seats: {cla.available_seats}</p>
                            <p className="text-amber-300">Price: {cla.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleClick(id)} className="btn btn-outline btn-success font-semibold px-6">Select</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Classes;