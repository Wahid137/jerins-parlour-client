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
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10 w-[570px]'>
                <input name="name" type="text" defaultValue={user?.displayName} disabled className="input input-bordered max-w-md" />
                <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered max-w-md" />
                <input name="treatName" type="text" defaultValue={name} disabled className="input input-bordered max-w-md" />
                <h2 className='font-bold ms-2 mt-2'>Pay with</h2>
                <div className='flex ms-2 my-5'>
                    <div className="items-center flex me-20">
                        <input type="radio" name="radio-10" className="radio checked:bg-black" checked />
                        <span className="label-text ms-5">Credit Card</span>
                    </div>
                    <div className="items-center flex">
                        <input type="radio" name="radio-10" className="radio checked:bg-black" checked />
                        <span className="label-text ms-5">Credit Card</span>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='ms-2'>Your service charge will be <span className='font-bold'>${price}</span></p>
                    <input type="submit" value="Pay" className="btn btn-primary me-32" />
                </div>

            </form>
        </div>
    );
};

export default Book;