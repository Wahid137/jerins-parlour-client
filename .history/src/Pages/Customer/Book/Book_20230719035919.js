import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Book = () => {
    const service = useLoaderData();
    const { user, displayName } = useContext(AuthContext)
    const { _id, name, image, price } = service
    return (
        <div className='p-7'>
            <h2 className='text-lg font-bold'>Book</h2>
            <div>

            </div>
        </div>
    );
};

export default Book;