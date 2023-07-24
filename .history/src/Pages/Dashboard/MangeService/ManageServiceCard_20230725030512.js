import React from 'react';

const ManageServiceCard = ({ addservice, setDeletingService }) => {
    const { name, description, image } = addservice;
    return (
        <div className="card w-96 bg-base-100">
            <div className="mt-10 flex justify-between mx-6">
                <img src={image} alt="Shoes" className="rounded-xl w-16 h-16" />
                <button onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className='btn btn-info'>Remove</button>
            </div>
            <div className="card-body pt-2 items-center text-center">
                <h2 className="font-semibold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );

};

export default ManageServiceCard;