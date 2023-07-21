import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Review = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const handleReview = (data) => {
        const review = {
            name: data.name,
            company: data.company,
            description: data.description,
            email: user?.email
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Thanks for your review!")
                }
            })

    }
    console.log(review)
    reset();

}

return (
    <div>
        <div className='w-[570px] p-7 card'>
            <h2 className='text-xl mb-10 font-bold'>Review</h2>
            <form onSubmit={handleSubmit(handleReview)}>

                <div className="form-control w-full mb-5">
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered input-accent w-full"
                        placeholder='Your Name' />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full mb-5">
                    <input type="text"
                        {...register("company", { required: "company's name is required" })}
                        className="input input-bordered input-accent w-full"
                        placeholder="Company's name, Designation" />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <input type="textarea"
                        {...register("description", { required: "Description is required" })}
                        className='textarea textarea-accent text-my-4 h-24 w-full' placeholder="Description" />
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