import React from 'react';

const BookingListCard = ({ payment }) => {
    const { name, img, details, approved } = payment
    return (
        <div className="card w-96 bg-base-100">
            <figure className="mt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
                {
                    approved && <button className='btn btn-secondary btn-sm'>Done</button>
                }
                {
                    approved && <button className='btn btn-secondary btn-sm'>Done</button>

                }
            </figure>
            <div className="card-body pt-2 items-center text-center">
                <h2 className="font-semibold">{name}</h2>
                <p>{details}</p>

            </div>
        </div>
    );
};

export default BookingListCard;