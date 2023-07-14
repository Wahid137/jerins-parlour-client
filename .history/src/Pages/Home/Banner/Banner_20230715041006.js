import React from 'react';
import woman from '../../../assets/images/woman.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero" >

            <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">
                <img src={woman} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;