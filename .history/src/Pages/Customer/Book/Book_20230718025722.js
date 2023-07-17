import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    const service = useLoaderData();
    const { _id, name, image, price } = service
    return (
        <div className='bg-third'>
            <h1>{name} Booking</h1>
        </div>
    );
};

export default Book;