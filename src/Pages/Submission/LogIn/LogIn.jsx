/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const LogIn = () => {

    const { LoggedUser, googleSigned} = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from.pathname || '/';

    const [showpassword, setShowpassword] = useState(false);
    const ShowPass = () => {
        setShowpassword(!showpassword)
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        LoggedUser(data.email, data.password)
            .then(res => {
                const signedUser = res.user;
                console.log(signedUser)
                navigate(from, {replace: true})
                reset()
            })
            .catch(error => {
                console.log(error)
            })
    };

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
        <div className="md:hero min-h-screen w-[90%] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="input input-bordered" placeholder="Email" {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? 'text' : 'password'} className="input input-bordered" placeholder="Password" {...register("password")} />
                            <div className="relative left-48 -top-8 md:left-72 md:-top-8">
                                {showpassword ? <button onClick={ShowPass}><FaEye></FaEye></button> : <button onClick={ShowPass}><FaEyeSlash></FaEyeSlash></button>}
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Don't Have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Log In</button>
                        </div>
                    </div>
                    <div className="divider px-6">OR</div>
                    <button onClick={handleGoogleSigned} className="btn btn-circle btn-outline mx-auto my-4">
                        <FaGoogle></FaGoogle>
                    </button>
                    {/* <strong>{err}</strong> */}
                </form>
            </div>
        </div>
    );
};

export default LogIn;
