/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([]);

   useEffect( ()=>{
    fetch('http://localhost:5000/instructors')
    .then(res => res.json())
    .then(data => {
        setInstructors(data)
    })
   }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-slate-300 my-7 rounded-lg shadow-lg">
            {
                instructors.slice(0, 6).map(item =><div key={item._id} item={item} className="mx-auto my-5">
                    <img src={item.image} className="rounded-full w-32 h-32 shadow-2xl" alt="" />
                </div>
             )
            }
        </div>
    );
};

export default PopularInstructor;