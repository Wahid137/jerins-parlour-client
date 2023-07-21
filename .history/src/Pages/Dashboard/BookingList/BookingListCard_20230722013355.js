import React from 'react';

const BookingListCard = ({ payment }) => {
    const { name, img, details } = payment
    return (
        <div className="card w-96 bg-secondary mx-auto bg-base-100">
            <figure className="mt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
            </figure>
            <div className="card-body pt-2 items-center text-center">
                <h2 className="font-semibold">{name}</h2>
                <p className='text-primary font-bold'>{details}</p>
                <p>{details}</p>

            </div>
        </div>
    );
};

export default BookingListCard;