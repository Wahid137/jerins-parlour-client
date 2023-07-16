import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { name, img, price, details } = service;
    return (
        <Link>
            <div className="card w-96 bg-secondary mx-auto shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="font-semibold">{name}</h2>
                    <p className='text-primary font-bold'>${price}</p>
                    <p>{details}</p>
                </div>
            </div>
        </Link>

    );
};

export default ServicesCard;