import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)

    }

    return (
        <div className="flex justify-center items-center p-10">
            <div className='card'>
                <form className="border border-black w-[570px]" onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-xl font-bold'>Create an account</h2>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Must be 6 character or more" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"
                                }
                            })}
                            className="input input-bordered input-accent w-full"
                            placeholder='Password' />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-primary w-full' type="submit" value="Sign Up" />
                    <p>Already have an Account? <Link to="/login" className='text-primary'>Please Login</Link></p>
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;