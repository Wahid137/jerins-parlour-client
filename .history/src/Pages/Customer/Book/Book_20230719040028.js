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
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                <input type="submit" value="Submit" className="btn btn-accent w-full" />
            </form>
        </div>
    );
};

export default Book;