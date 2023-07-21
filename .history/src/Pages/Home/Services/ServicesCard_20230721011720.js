import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../Dashboard/Book/Book';

const ServicesCard = ({ service }) => {
    const [testingState, setTestingState] = useState(false);
    const { name, img, price, details, _id } = service;
    useMemo(() => {
        setTestingState(false);
    }, [setTestingState]);
    return (
        <Link to={`/dashboard/book/${_id}`}>
            <div className="card w-96 bg-secondary mx-auto hover:bg-base-100">
                <figure className="mt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-16 h-16" />
                </figure>
                <div className="card-body pt-2 items-center text-center">
                    <h2 className="font-semibold">{name}</h2>
                    <p className='text-primary font-bold'>${price}</p>
                    <p>{details}</p>
                </div>
            </div>
        </Link >

    );
};

export default ServicesCard;
const Book = () => {
    return (

    )
};
export default Book;