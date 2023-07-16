import React from 'react';
import Rating from '../../../Shared/Rating/Rating';

const TestimonialCard = ({ customerInformation }) => {
    const { img, name, job, quote, rating } = customerInformation;
    return (
        <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <div className='flex justify-between'>
                <div className='flex'>
                    <figure><img className="rounded-full w-14 h-14 me-3" src={img} alt="Shoes" /></figure>
                    <div>
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <p className='font-semibold'>{job}</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <p className='mb-2'>{quote}</p>
                <Rating stars={rating}></Rating>
            </div>
        </div>
    );
};

export default TestimonialCard;