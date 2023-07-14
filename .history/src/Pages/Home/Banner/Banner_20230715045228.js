import React from 'react';
import woman from '../../../assets/images/woman.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero" >
            <div className="hero-content w-[1440px] flex-col lg:flex-row-reverse min-h-screen">

                <img src={woman} className="rounded-lg lg:w-1/2 W-[484px] h-[478px]" alt="" />

                <div className='me-32'>
                    <h1 className="text-5xl font-bold mb-5">BEAUTY SALON</h1>
                    <h1 className="text-5xl font-bold">FOR EVERY WOMAN</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the</p>
                    <PrimaryButton>Get an Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;