import React from 'react';

const HandleProject = () => {
    return (
        <div className='card border my-16 p-5 shadow-lg'>
            <form>
                <h2 className='text-4xl my-2'>Let us handle your
                    project, professionally.</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered' />
                    <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full input-bordered' />
                    <input name='email' type="email" placeholder='Your Email' className='input input-ghost w-full input-bordered' />
                    <input name='phone' type="text" placeholder='Phone Number' className='input input-ghost w-full input-bordered' />
                </div>
                <textarea name="message" className='textarea textarea-bordered my-4 h-24 w-full' placeholder='Your Message'></textarea>
                <input className="btn bg-orange-600" type="submit" value="Place your Order" />
            </form>
        </div>
    );
};

export default HandleProject;