/* eslint-disable no-unused-vars */
import { useState } from "react";
import InstructorsCard from "../InstructorsCard/InstructorsCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    fetch('http://localhost:5000/instructors')
    .then(res => res.json())
    .then(data => {
        setInstructors(data)
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {
                instructors.map(instr =><InstructorsCard key={instr._id} instr={instr}></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;