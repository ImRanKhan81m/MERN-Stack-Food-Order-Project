import React from 'react';
import { Link, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import image from '../../../assets/image/food-7.png'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='mid-container mt-10 grid grid-cols-2'>
            <div>
                <img src={image} alt="" />
            </div>
                <div className="card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body border rounded-2xl">
                        <h1 className='text-3xl text-center font-bold'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered focus:outline-none"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    autoComplete='on'
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered focus:outline-none"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <input className='btn w-full btn-primary ' type="submit" value="LOGIN" />
                        </form>
                        <p className='py-3 text-center'>New Customer? <Link to="/signup" ><span className=' link text-primary'>Create New Account</span></Link></p>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>
    );
};

export default Login;