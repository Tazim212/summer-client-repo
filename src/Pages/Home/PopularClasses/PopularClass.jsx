/* eslint-disable no-unused-vars */
import { useState } from "react";
import Popular_2 from "./Popular_2";

const PopularClass = () => {

    const [classs, setClasss] = useState([])

    fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data => {
        setClasss(data)
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">

            {
                classs.slice(0, 3).map(cls => <Popular_2 key={cls._id} cls={cls}></Popular_2>)
            }
        </div>
    );
};

export default PopularClass;