import React from 'react';

const SignUp = () => {
    return (
        import React, { useContext, useState } from 'react';
    import { useForm } from 'react-hook-form';
    import { FcGoogle } from 'react-icons/fc';
    import { Link, useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../Context/AuthProvider';
    import { toast } from 'react-hot-toast';
    import useToken from '../../hooks/useToken';
    import UseTitle from '../../hooks/useTitle';

    const SignUp = () => {
        const { register, reset, handleSubmit, formState: { errors } } = useForm();
        const { createUser, updateUser } = useContext(AuthContext)
        const [signUpError, setSignUpError] = useState('');
        const [createdUserEmail, setCreatedUserEmail] = useState('');
        const [token] = useToken(createdUserEmail)
        const navigate = useNavigate();
        UseTitle("SignUp")
        if (token) {
            navigate('/');
        }

        const handleSignUp = (data) => {
            setSignUpError('');
            createUser(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    toast.success('User Created Successfully.')
                    reset();
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
                    console.log(error)
                    setSignUpError(error.message)
                })

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
            <div className="h-[700px] flex justify-center items-center">
                <div className='w-96 p-7 card shadow-xl'>
                    <h2 className='text-xl text-center font-bold'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered input-accent w-full"
                                placeholder='Email Address' />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
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
                        <input className='btn btn-accent w-full' type="submit" value="Sign Up" />
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>
                    <p>Already have an Account? <Link to="/login" className='text-secondary'>Please Login</Link></p>
                    <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        );
    };

    export default SignUp;
    );
};

export default SignUp;