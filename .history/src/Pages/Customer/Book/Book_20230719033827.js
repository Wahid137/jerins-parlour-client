import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Book = () => {
    const service = useLoaderData();
    const { user, displayName } = useContext(AuthContext)
    const { _id, name, image, price } = service
    return (
        <div >
            <h2>Book</h2>
            <h1>{name} Booking</h1>
            <h2>{user?.email}</h2>
            <h2>{user?.displayName}</h2>
        </div>
    );
};

export default Book;