import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const customersInformation = [
        {
            "customer_id": "01",
            "name": "Awlad Hossain",
            "job": "Businessman",
            "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "rating": 5
        },
        {
            "customer_id": "02",
            "name": "Awlad Hossain",
            "job": "Businessman",
            "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "rating": 5
        }
    ]
    return (
        <div className='my-24'>
            <div className='mx-auto mb-5 text-center w-1/2'>
                <p className='text-2xl font-bold text-orange-600'>Testimonial</p>
                <h2 className="text-5xl font-semibold mb-3">What Customer Says</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    customersInformation.map(customerInformation => <TestimonialCard
                        key={customerInformation.customer_id}
                        customerInformation={customerInformation}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;