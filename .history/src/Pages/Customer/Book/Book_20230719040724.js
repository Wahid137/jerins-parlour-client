import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Book = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const { name, price } = service;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        console.log("ok")

    }
    return (
        <div className='p-7'>
            <h2 className='text-lg font-bold'>Book</h2>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                <input name="name" type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                <input name="treatName" type="text" defaultValue={name} disabled className="input input-bordered w-full" />
                <div>
                    <p>Your service charge will be ${price}</p>
                    <input type="submit" value="Submit" className="btn btn-accent w-full" />
                </div>

            </form>
        </div>
    );
};

export default Book;