import { shippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


import { SubmitHandler, useForm } from "react-hook-form";


const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: shippingFormInputs) => void; }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<shippingFormInputs>({
        resolver: zodResolver(shippingFormSchema)
    })

    const router = useRouter();

    const handleShippingForm: SubmitHandler<shippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", { scroll: false });
    }





    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>

            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name</label>
                <input type="text" placeholder="Enter your name" {...register("name")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.name && (<p className="text-xs text-gray-500">{errors.name.message}</p>)
                }
            </div>


            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Email</label>
                <input type="email" placeholder="Enter your emial" {...register("email")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.email && (<p className="text-xs text-gray-500">{errors.email.message}</p>)
                }
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-gray-500 font-medium">Phone</label>
                <input type="text" placeholder="Enter your phone" {...register("phone")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.phone && (<p className="text-xs text-gray-500">{errors.phone.message}</p>)
                }
            </div>


            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-sm text-gray-500 font-medium">Address</label>
                <input type="text" placeholder="Enter your address" {...register("address")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.address && (<p className="text-xs text-gray-500">{errors.address.message}</p>)
                }
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm text-gray-500 font-medium">City</label>
                <input type="text" placeholder="Enter your city" {...register("city")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.city && (<p className="text-xs text-gray-500">{errors.city.message}</p>)
                }
            </div>



            <button
                type="submit"
                className="text-sm font-medium text-white bg-black px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800"
            >
                Continue <ArrowRight className="w-3 h-3" />{" "}
            </button>


        </form>
    );
};

export default ShippingForm;