import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex justify-center items-center p-10 ">
            <div className='card'>
                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-xl font-bold mb-20'>Create an account</h2>


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
                    <p className='text-center'>Already have an Account? <Link to="/signup" className='text-primary'>Please Login</Link></p>
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

export default Login;