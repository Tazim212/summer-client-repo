/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import UseAxios from "../../../../hooks/UseAxios";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_IMG_TOKEN;

const AddClass = () => {

    const [axiosSecure] = UseAxios()
    const {user} = useContext(AuthContext);
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const {
        register,
        handleSubmit,
        watch,
        reset,
    } = useForm()

    const onSubmit = (data) => {

        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imaging => {
                if (imaging.success) {
                    const imgUrl = imaging.data.display_url;
                    const { name, instructor_name, available_seats, price } = data;
                    const newData = { name, instructor_name, available_seats, price: parseFloat(price), image: imgUrl, status: "pending"}
                    axiosSecure.post('/dashboard/addclass', newData)
                        .then(data => {
                            console.log(data.data)
                            reset()
                        })
                }
            })
    }

    return (
        <div className="bg-orange-200 rounded-md shadow-lg">
            <SectionTitle heading='Add Class'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-12 py-10 px-6">
                <div className="flex flex-col gap-2">
                    <span>Class Name</span>
                    <input className="py-2 px-3 rounded-lg opacity-80" placeholder="Class Name" {...register("name")} />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Class Image</span>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" {...register("image")} />
                </div>

                <div className="flex flex-col gap-2">
                    <span>Instructor Name</span>
                    {
                      user &&<input defaultValue={user.displayName} className="py-2 px-3 rounded-lg opacity-80" placeholder="Instructor Name" {...register('instructor_name')} />
                    }
                     </div>

                <div className="flex flex-col gap-2">
                    <span>Instructor Email</span>
                  {
                    user&&<input defaultValue={user.email} className="py-2 px-3 rounded-lg opacity-80" placeholder="Instructor Email" {...register("instructorEmail")} />
                  }
                </div>

                <div className="flex flex-col gap-2">
                    <span>Available Seats</span>
                    <input className="py-2 px-3 rounded-lg opacity-80" placeholder="Available Seats" {...register("available_seats")} />
                     </div>

                <div className="flex flex-col gap-2">
                    <span>Price</span>
                    <input className="py-2 px-3 rounded-lg opacity-80" placeholder="Price" {...register("price")} />
                </div>
                <input className="btn btn-outline" type="submit" placeholder="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;