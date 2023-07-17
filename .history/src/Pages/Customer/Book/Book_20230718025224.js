import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Book = () => {
    const service = useLoaderData()
    return (
        <div>
            <h1>This is Booking</h1>
        </div>
    );
};

export default Book;