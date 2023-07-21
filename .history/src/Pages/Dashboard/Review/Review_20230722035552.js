import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data.name)
        reset();

    }

    return (
        <div className="flex justify-center items-center p-10 ">
            <div className='card'>
                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl font-bold mb-12'>Review</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-primary w-full mb-5' type="submit" value="Login" />

                </form>

            </div>
        </div>
    );
};

export default Review;