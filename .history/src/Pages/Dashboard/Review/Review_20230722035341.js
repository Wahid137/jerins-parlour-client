import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, reset, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data.name)
        reset();

    }

    return (
        <div className="flex justify-center items-center p-10 ">
            <div className='card'>
                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl font-bold mb-12'>Review</h2>
                    <div className="form-control w-full mb-5">
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Email Address' />
                    </div>

                    <br />
                    <input className='btn btn-primary w-full mb-5' type="submit" value="Login" />

                </form>

            </div>
        </div>
    );
};

export default Review;