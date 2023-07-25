import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    useTitle("SignUp")
    const handleSignUp = (data) => {
        setSignUpError("")
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("User Created Successfully!")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setSignUpError(error.message)
            })

        reset();

    }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://jerins-parlour-server-sepia.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className="flex justify-center items-center p-10 ">
            <div className='card'>
                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-xl font-bold mb-20'>Create an account</h2>
                    <div className="form-control w-full mb-5">

                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Your Name' />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-5">

                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mb-5">

                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Must be 6 character or more" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong"
                                }
                            })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Password' />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-primary w-full mb-5' type="submit" value="Sign Up" />
                    <p className='text-center'>Already have an Account? <Link to="/login" className='text-primary'>Please Login</Link></p>
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <div className='divider'>OR</div>

                <div className='px-10 mb-5'>
                    <button className='btn btn-outline hover:bg-primary rounded-3xl w-full'><FaFacebookF className='w-10 ms-4 h-5 text-[#3076FF]'></FaFacebookF> CONTINUE WITH FACEBOOK</button>
                </div>
                <div className='px-10'>
                    <button className='btn btn-outline hover:bg-primary rounded-3xl w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;