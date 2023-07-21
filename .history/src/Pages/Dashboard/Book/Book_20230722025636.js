import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import creditCard from '../../../assets/icons/credit-card 1.png'
import paypal from '../../../assets/icons/image 17.png'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Payment/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Book = () => {
    const service = useLoaderData();
    const [paymentType, setPaymentType] = useState('')
    const { user } = useContext(AuthContext)
    const { name, price } = service;

    console.log(paymentType)

    return (
        <div className='p-7'>
            <h2 className='text-lg font-bold'>Book</h2>
            <form className='grid grid-cols-1 gap-3 mt-10 w-[570px]'>
                <input name="name" type="text" defaultValue={user?.displayName} disabled className="input input-bordered max-w-md" />
                <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered max-w-md" />
                <input name="treatName" type="text" defaultValue={name} disabled className="input input-bordered max-w-md" />
                <h2 className='font-bold ms-2 mt-2'>Pay with</h2>
                <div className='flex ms-2 my-5'>
                    <div className="items-center flex me-20">
                        <input type="radio" value="creditCard" onChange={e => setPaymentType(e.target.value)} name="creditCard" className="radio" checked={paymentType === "creditCard"} />
                        <img src={creditCard} alt="" className='w-8 ms-5' />
                        <span className="label-text">Credit Card</span>

                    </div>
                    <div className="items-center flex">
                        <input type="radio" value="paypal" onChange={e => setPaymentType(e.target.value)} name="paypal" className="radio" checked={paymentType === "paypal"} />
                        <img src={paypal} alt="" className='w-8 ms-5' />
                        <span className="label-text">Credit Card</span>
                    </div>
                </div>
            </form>
            <div className='w-96 ms-2'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        service={service}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Book;