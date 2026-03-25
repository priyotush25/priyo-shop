"use client"

import useCartStore from "@/store/cartStore";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";


const ProductCart = ({ product }: { product: ProductType }) => {
    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0]
    })

    const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
        setProductTypes(prev => ({ ...prev, [type]: value }))
    }

    // add to cart
    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        addToCart(
            {
                ...product,
                quantity: 1,
                selectedSize: productTypes.size,
                selectedColor: productTypes.color,
            }
        );
        toast.success("Product add to cart")
    }


    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* image */}
            <Link href={`/product/${product.id}`}>
                <div className="relative aspect-2/3">
                    <Image src={product.images[productTypes.color]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"></Image>
                </div>

            </Link>
            {/* detail */}
            <div className="flex flex-col gap-4 text-xs p-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>


                <div className="flex items-center gap-4 text-xs">
                    {/* SIZE */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1"
                            onChange={e => handleProductType({ type: "size", value: e.target.value })}
                        >
                            {
                                product.sizes.map(size => (
                                    <option key={size} value={size}>{size.toUpperCase()}</option>
                                ))
                            }
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Colors</span>
                        <div className="flex items-center gap-2">
                            {
                                product.colors.map(color => (
                                    <div key={color} className={`cursor-pointer border rounded-full p-0.5 ${productTypes.color === color ? "border-gray-400" : "border-gray-200"}`} onClick={() => handleProductType({ type: "color", value: color })}>

                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* PRICE AND ADD TO CART */}
                <div className="flex items-center justify-between">

                    <p className="font-medium text-lg">${product.price.toFixed(2)}</p>

                    <button
                        onClick={handleAddToCart}
                        className="flex items-center gap-1 ring cursor-pointer ring-gray-200 px-2 py-1 rounded-md hover:bg-black hover:text-white transition-all duration-300"><ShoppingCart className="w-4 h-4" /> Add to cart</button>

                </div>

            </div>
        </div>
    );
};

export default ProductCart;