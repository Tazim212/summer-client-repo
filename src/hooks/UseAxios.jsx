/* eslint-disable no-unreachable */
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const UseAxios = () => {

    const { loggedOut } = useContext(AuthContext);
    const navigate = useNavigate();
  
        useEffect(() => {
            axiosSecure.interceptors.request.use((config) =>{
                const token = localStorage.getItem('access token')
                if(token){
                    config.headers.Authorization = `bearer ${token}`
                }
                return config;
            })
            axiosSecure.interceptors.response.use(
                response => response,
                async (error) => {
                    if (error.response && (error.response.status === 401 || (error.response.status) === 403)) {
                        {
                            await (loggedOut)
                            navigate('/login')
                        }
                        return Promise.reject(error)
                    }
                }
            )
        }, [loggedOut, navigate])

        return [axiosSecure]
};

export default UseAxios;