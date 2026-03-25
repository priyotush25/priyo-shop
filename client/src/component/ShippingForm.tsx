import { shippingFormSchema, shoppingFormInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const ShippingForm = () => {
    const { register, handleSubmit } = useForm<shoppingFormInputs>({
        resolver: zodResolver(shippingFormSchema)
    })
    return (
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name</label>
                <input type="text" placeholder="Enter your name" {...register("name")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.name && (<p>{errors.name.message}</p>)
                }
            </div>
        </form>
    );
};

export default ShippingForm;