import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {

    const { user, loading} = useContext(AuthContext)
    const [axiosSecure] = UseAxios()

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`users/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;