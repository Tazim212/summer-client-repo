/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Popular_2 = ({ cls }) => {
  // eslint-disable-next-line no-unused-vars
  const { image, name, available_seats } = cls;

  const hudai = () =>{
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  }

  return (
    <div className="mb-32 sm:pl-24">
      <div
        className="card max-w-full max-h-32 bg-base-100 shadow-xl image-full
        transition-ease-in hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent btn-outline" onClick = {hudai}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular_2;
