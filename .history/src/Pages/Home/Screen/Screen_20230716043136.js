import React from 'react';
import face from '../../../assets/images/face.png'

const Screen = () => {
    return (
        <div className="hero py-20 bg-secondary">
            <div className="hero-content flex-col lg:flex-row">
                <img src={face} className="max-w-xl rounded-lg" alt="" />
                <div className='lg:w-1/2 ms-32'>
                    <h1 className="text-3xl font-semibold">Let us handle your <br /><span className='text-primary'>screen Professionally.</span></h1>
                    <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className='flex justify-between p-5'>
                        <div>
                            <p>500+</p>
                            <p>Happy Customer</p>
                        </div>
                        <div>
                            <p>16</p>
                            <p>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;