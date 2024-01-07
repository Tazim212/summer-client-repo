/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";

const UseAdminData = () => {

    const {user, loading} = useContext(AuthContext);

    const [axiosSecure] = UseAxios()

    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users', users?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure(`/users?email=${user?.email}`)
            return res.data;
        }
    })
    return [users, refetch]
};

export default UseAdminData;