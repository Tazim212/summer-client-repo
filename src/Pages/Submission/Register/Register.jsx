/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";


const Register = () => {

    const { registerUser, updateUser, googleSigned } = useContext(AuthContext)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from.pathname || '/';

    const confirmPass = watch('password', 'confirm Password')
    const onSubmit = data => {
        registerUser(data.email, data.password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        reset()
                        navigate(from, {replace: true})
                    })
            })
    }

    const handleGoogleSigned = () => {
        googleSigned()
            .then(res => {
                const users = res.user;
                console.log(users)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Morning Sun School || Register</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold pr-16">Register now!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-[500px] shadow-2xl text-white bg-stone-700 opacity-80">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span>Name</span>
                                </label>
                                <input className="input input-bordered text-black" placeholder="Name" {...register("name")} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Photo Url</span>
                                </label>
                                <input className="input input-bordered text-black" placeholder="Photo URL" {...register("photoURL")} />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input className="input input-bordered text-black" placeholder="Email" {...register("email", {required: true})} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Password</span>
                                </label>
                                <input type="password" className="input input-bordered text-black" placeholder="Password" {...register("password", { pattern: /(?=.*[A-Z])(?=.*[@$!%*#?&]){8,}/ }, {required: true})} />
                                {errors.password && <span className="text-red-400">Password must have less than 6 characters, one uppercase and one special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Confirm Password</span>
                                </label>
                                <input type="password" className="input input-bordered text-black" placeholder="Confirm Password" {...register("confirm Password", {
                                    validate: value => value === confirmPass || "password do not match"
                                })} />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover text-slate-100">Already Have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                        <div className="divider px-6 text-slate-100">OR</div>
                        <button onClick={handleGoogleSigned} className="btn btn-circle btn-outline hover:bg-cyan-500 text-slate-50 mx-auto my-4">
                            <FaGoogle></FaGoogle>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;