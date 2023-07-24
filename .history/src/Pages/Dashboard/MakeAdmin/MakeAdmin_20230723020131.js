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



    const handleLogin = (data) => {
        setLoginError('')
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                toast.success("Login Successfully!")

            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
        reset();

    }

    return (
        <div className="flex justify-center items-center p-10 ">
            <div className='card'>
                <h2 className='text-xl font-bold mb-12'>Login</h2>

                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleLogin)}>

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