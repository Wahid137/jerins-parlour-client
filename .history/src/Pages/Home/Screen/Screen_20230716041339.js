import React from 'react';
import face from '../../../assets/images/face.png'

const Screen = () => {
    return (
        <div className="hero py-20 bg-secondary">
            <div className="hero-content flex-col lg:flex-row">
                <img src={face} className="max-w-xl rounded-lg" alt="" />
                <div className='lg:w-1/2 ms-10'>
                    <h1 className="text-xl font-bold">Let us handle your <br /><span className='text-primary'>screen Professionally.</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Screen;