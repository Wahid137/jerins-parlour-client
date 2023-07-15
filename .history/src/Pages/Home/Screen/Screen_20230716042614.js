import React from 'react';
import face from '../../../assets/images/face.png'

const Screen = () => {
    return (
        <div className="hero py-20 bg-secondary">
            <div className="hero-content flex-col lg:flex-row">
                <img src={face} className="max-w-xl rounded-lg" alt="" />
                <div className='lg:w-1/2 ms-10'>
                    <h1 className="text-3xl font-semibold">Let us handle your <br /><span className='text-primary'>screen Professionally.</span></h1>

                </div>
            </div>
        </div>
    );
};

export default Screen;