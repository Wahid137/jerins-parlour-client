import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate()
    useTitle("Login")
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token])

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
                <form className="border border-black w-[500px] p-12 pb-5" onSubmit={handleSubmit(handleLogin)}>
                    <img className='w-32 mx-auto mb-10' src={logo} alt="jerins parlour" />
                    <h2 className='text-xl font-bold mb-12'>Login</h2>
                    <div className="form-control w-full mb-5">

                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="border-b-2 border-neutral bg-secondary w-full focus:outline-none h-10"
                            placeholder='Email Address' />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>


                    <input className='btn btn-primary w-full mb-5' type="submit" value="Login" />

                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;