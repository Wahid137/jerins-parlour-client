import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Book = () => {
    const service = useLoaderData();
    const { user, displayName } = useContext(AuthContext)
    const { _id, name, image, price } = service
    return (
        <div >
            <h2 className='text-2xl'>Book</h2>
            <div>

            </div>
        </div>
    );
};

export default Book;