import React from 'react';
import ellipse1 from '../../../assets/images/Ellipse 90.png';
import ellipse2 from '../../../assets/images/Ellipse 91.png';
import ellipse3 from '../../../assets/images/Ellipse 92.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const customersInformation = [
        {
            "customer_id": "01",
            "name": "Nash Patrik",
            "job": "CEO, Manpol",
            "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            "img": ellipse1,
            "rating": 5
        },
        {
            "customer_id": "02 ",
            "name": "Nash Patrik",
            "job": "CEO, Manpol",
            "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            "img": ellipse1,
            "rating": 5
        },
        {
            "customer_id": "01",
            "name": "Nash Patrik",
            "job": "CEO, Manpol",
            "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            "img": ellipse1,
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