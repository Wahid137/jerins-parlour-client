import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, isLoading, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const navigate = useNavigate();
    useTitle("Add Service")

    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const service = {
                        name: data.name,
                        description: data.description,
                        image: imgData.data.url
                    }
                    console.log(service)
                    //save add service's information in database
                    fetch('http://localhost:5000/addservice', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(service)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/manageservice')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' p-5 '>
            <h2 className='text-2xl font-bold mb-10'>Add Service</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className='flex'>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Service Title</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered input-accent w-full"
                                placeholder='Enter service title' />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="textarea"
                                {...register("description", { required: "Description is required" })}
                                className='textarea textarea-accent text-my-4 h-24' placeholder="Enter Description" />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: "photo is required" })}
                            className="input input-bordered input-accent w-full" />
                        {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
                    </div>
                </div>


                <br />
                <input className='btn btn-primary btn-sm' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default AddService;