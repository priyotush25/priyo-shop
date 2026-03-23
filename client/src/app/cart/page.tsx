"use client"

import { CartItemsType } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";


const steps = [
    {
        id: 1,
        title: "Shipping Cart"
    },
    {
        id: 2,
        title: "Shipping Address"
    },
    {
        id: 3,
        title: "Payment Mehod"
    }
]

const cartItems: CartItemsType = [
    {
        "id": 1,
        "name": "Adidas CoreFit T-Shirt",
        "shortDescription": "Lightweight performance t-shirt for everyday workouts.",
        "description": "Breathable and moisture-wicking fabric designed for comfort during training or casual wear.",
        "price": 39.9,
        "sizes": ["s", "m", "l", "xl", "xxl"],
        "colors": ["gray", "purple", "green"],
        "images": {
            "gray": "/products/1g.png",
            "purple": "/products/1p.png",
            "green": "/products/1gr.png"
        },
        quantity: 1,
        selectedSize: "m",
        selectedColor: "gray"
    },
    {
        "id": 2,
        "name": "Nike Flex Run Shorts",
        "shortDescription": "Flexible running shorts with breathable mesh.",
        "description": "Designed for runners, these shorts provide maximum comfort and flexibility.",
        "price": 29.5,
        "sizes": ["s", "m", "l", "xl"],
        "colors": ["gray", "blue", "red"],
        "images": {
            "gray": "/products/2g.png",
            "blue": "/products/2gr.png",
            "red": "/products/2r.png"
        },
        quantity: 1,
        selectedSize: "xl",
        selectedColor: "blue"
    },
    {
        "id": 3,
        "name": "Puma Active Hoodie",
        "shortDescription": "Warm and stylish hoodie for active days.",
        "description": "Soft fleece interior with a modern fit, perfect for workouts or lounging.",
        "price": 49.99,
        "sizes": ["m", "l", "xl", "xxl"],
        "colors": ["black", "gray", "white"],
        "images": {
            "black": "/products/3b.png",
            "gray": "/products/3g.png",
            "white": "/products/3w.png"
        },
        quantity: 1,
        selectedSize: "l",
        selectedColor: "black"
    }
]

const CartPage = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const activeStep = parseInt(searchParams.get("step") || "1")

    return (
        <div className="flex flex-col gap-8 items-center justify-center mt-12">
            {/* TITLE */}
            <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

            {/* STEP */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                {
                    steps.map(step => (
                        <div key={step.id} className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}>
                            <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}>{step.id}</div>
                            <p className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>

                        </div>
                    ))
                }

            </div>
            {/* STEP & DETAILS */}
            <div className="w-full flex flex-col lg:flex-row gap-16">

                {/* STEP */}
                <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">1</div>

                {/* DETAILS */}
                <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    <h2 className="font-semibold">Cart Details</h2>

                    <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                        <p>Subtotal</p>
                        <p className="text-gray-800">$
                            {
                                cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
                            }
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                        <p>Discount(10%)</p>
                        <p className="text-gray-800">$10
                        </p>
                    </div>


                    <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                        <p>Shipping Fee</p>
                        <p className="text-gray-800">$
                            10
                        </p>
                    </div>

                    <hr className="border border-gray-200" />


                    <div className="flex items-center justify-between text-sm text-gray-800 font-medium">
                        <p>Total</p>
                        <p>$
                            {
                                cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
                            }
                        </p>
                    </div>

                    <div>
                        <button onClick={() => router.push("/cart?step=2", { scroll: false })}
                            className="text-sm font-medium text-white bg-black px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800">Continue <ArrowRight className="w-3 h-3" /> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartPage;