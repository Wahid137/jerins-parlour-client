import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handleReview = (data) => {
        console.log(data.name)
        reset();

    }

    return (
        <div className="h-[700px] flex justify-center items-center">
            <div className='w-96 p-7 card shadow-xl'>
                <h2 className='text-xl text-center font-bold'>Review</h2>
                <form onSubmit={handleSubmit(handleReview)}>
                    <div className="form-control w-full max-w-xs">

                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>



                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Sign Up" />

                </form>

            </div>
        </div>
    );
};

export default Review;