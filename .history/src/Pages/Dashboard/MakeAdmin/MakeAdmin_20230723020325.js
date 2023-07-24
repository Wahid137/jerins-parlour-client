import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    useTitle("Make Admin")
    const from = location.state?.from?.pathname || '/'



    const handleAdmin = (data) => {
        console.log(data.email)

        reset();

    }

    return (
        <div className="">
            <div className='card'>
                <h2 className='text-xl font-bold'>Make Admin</h2>
                <form onSubmit={handleSubmit(handleAdmin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Service Title</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <input className='btn btn-primary w-full mb-5' type="submit" value="Submit" />

                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;