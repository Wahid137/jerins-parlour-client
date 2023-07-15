import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, img, price, details } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="font-semibold">{name}</h2>
                <p className='text-primary font-bold'>${price}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServicesCard;