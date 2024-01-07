/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const InstructorsCard = ({ instr }) => {

    const { name, image, email, classes_taken } = instr;
    return (
        <div className="card w-[95%] md:w-96 mx-2.5 md:mx-0 bg-lime-800 text-slate-200 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-60 w-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p><span className="font-semibold text-teal-300">Email: </span>{email}</p>
                <p className="text-orange-500"><span className="font-semibold text-teal-300">Classes_taken: </span>{classes_taken}</p>
                <div className="card-actions mt-3 justify-end">
                    <button className="btn bg-slate-500 text-fuchsia-500">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;
