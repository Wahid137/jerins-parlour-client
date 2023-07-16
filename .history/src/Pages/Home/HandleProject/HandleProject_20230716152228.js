import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const HandleProject = () => {
    return (
        <div className='card my-16'>
            <form className=''>
                <h2 className='text-4xl mb-20 text-center'>Let us handle your <br />
                    project, professionally.</h2>
                <div className='w-[760px]  mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='firstName' type="text" placeholder='First Name' className='input bg-base-100 input-ghost w-full input-bordered' />
                        <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full  input-bordered' />
                        <input name='email' type="email" placeholder='Your Email' className='input input-ghost w-full input-bordered' />
                        <input name='phone' type="text" placeholder='Phone Number' className='input input-ghost w-full  input-bordered' />
                    </div>
                    <textarea name="message" className='textarea textarea-bordered my-4 h-24 w-full' placeholder='Your Message'></textarea>
                    <div className='text-center'>
                        <PrimaryButton>Send Message</PrimaryButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HandleProject;