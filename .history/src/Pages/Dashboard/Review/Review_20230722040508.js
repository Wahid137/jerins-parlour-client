import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handleReview = (data) => {
        console.log(data.name)
        reset();

    }

    return (
        <div>
            <div className='w-[570px] p-7 card'>
                <h2 className='text-xl mb-10 font-bold'>Review</h2>
                <form onSubmit={handleSubmit(handleReview)}>

                    <div className="form-control w-full">
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <input type="text"
                            {...register("company", { required: "company's name is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>



                    <br />
                    <input className='btn btn-primary' type="submit" value="Submit" />

                </form>

            </div>
        </div>
    );
};

export default Review;