import React from 'react';

const ManageServiceCard = ({ name, description, image }) => {
    return (
        <div className="card w-96 bg-base-100">
            <div className="mt-10 flex justify-between mx-6">
                <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
                {
                    approve && <button className='btn btn-success'>Done</button>
                }
                {
                    !approve && <button className='btn btn-info'>Pending</button>
                }
            </div>
            <div className="card-body pt-2 items-center text-center">
                <h2 className="font-semibold">{treatName}</h2>
                <p>{details}</p>

            </div>
        </div>
    );

};

export default ManageServiceCard;