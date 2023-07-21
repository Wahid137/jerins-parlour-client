import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import creditCard from '../../../assets/icons/credit-card 1.png'
import paypal from '../../../assets/icons/image 17.png'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Book = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const { name, price } = service;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const treatName = form.treatName.value;

        console.log(name, email, treatName)

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
                        <input type="radio" name="creditCard" className="radio checked:bg-black" />
                        <img src={creditCard} alt="" className='w-8 ms-5' />
                        <span className="label-text">Credit Card</span>

                    </div>
                    <div className="items-center flex">
                        <input type="radio" name="paypal" className="radio checked:bg-black" />
                        <img src={paypal} alt="" className='w-8 ms-5' />
                        <span className="label-text">Credit Card</span>
                    </div>
                </div>
                <div className='w-96 my-12'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            service={service}
                        />
                    </Elements>
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