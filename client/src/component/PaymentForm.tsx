
import { paymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { SubmitHandler, useForm } from "react-hook-form";


const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<paymentFormInputs>({
        resolver: zodResolver(paymentFormSchema)
    })

    const router = useRouter();

    const handlePaymentForm: SubmitHandler<paymentFormInputs> = () => {


    }





    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>

            {/* Name on card */}
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name on card</label>

                <input type="text" id="cardHolder" placeholder="Piryo Paul" {...register("cardHolder")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.cardHolder && (<p className="text-xs text-gray-500">{errors.cardHolder.message}</p>)
                }
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-1">
                <label htmlFor="cartNumber" className="text-sm text-gray-500 font-medium">Card Number</label>
                <input type="email" id="cardNumber" placeholder="123456789123" {...register("cardNumber")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.cardNumber && (<p className="text-xs text-gray-500">{errors.cardNumber.message}</p>)
                }
            </div>


            {/* Expiration date */}
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className="text-sm text-gray-500 font-medium">Expiration Date</label>
                <input type="text" placeholder="MM/YY" {...register("expirationDate")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.expirationDate && (<p className="text-xs text-gray-500">{errors.expirationDate.message}</p>)
                }
            </div>

            {/* cvv */}
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="text-sm text-gray-500 font-medium">cvv</label>
                <input type="text" id="cvv" placeholder="123" {...register("cvv")} className="text-xs border-b border-gray-200 outline-none py-2" />
                {
                    errors.cvv && (<p className="text-xs text-gray-500">{errors.cvv.message}</p>)
                }
            </div>
            <div className="flex items-center gap-2">
                <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
                <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
                <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
            </div>


            {/* button */}
            <button
                type="submit"
                className="text-sm font-medium text-white bg-black px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800"
            >
                Checkout <ShoppingCart className="w-3 h-3" />{" "}
            </button>


        </form>
    );
};

export default PaymentForm;