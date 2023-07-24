import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='w-96 p-7 card shadow-lg'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        < className="label-text">Image</ span>
                    </label>
                    <input type="file"
                        {...register("image", { required: "photo is required" })}
                        className="input input-bordered input-accent w-full" />
                    {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
                </div>
                <br />
                <input className='btn btn-accent w-full' type="submit" value="Add DOCTOR" />
                <div>
                </div>
            </form >
        </div >
    );
};

export default MakeAdmin;