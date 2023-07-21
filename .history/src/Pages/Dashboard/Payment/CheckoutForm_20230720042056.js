import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const CheckoutForm = ({ service }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");//25
    const [success, setSuccess] = useState(' ');
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, name, _id } = service;
    const { user } = useContext(AuthContext)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setSuccess(' ')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user?.email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            //store payment info in the database
            const payment = {
                name,
                price,
                transactionId: paymentIntent.id,
                email: user?.email,
                bookingId: _id,
                paid: true
            }
            console.log(payment)
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id)
                    }
                })

        }
        setProcessing(false)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className='flex justify-between items-center'>
                    <p className=' mt-5'>Your service charge will be <span className='font-bold'>${price}</span></p>
                    <button
                        className="btn btn-sm mt-4 btn-primary"
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>

            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500 ms-2 mt-5'>{success}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;