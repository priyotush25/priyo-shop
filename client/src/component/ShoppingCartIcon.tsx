"use client"

import useCartStore from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
    const { cart } = useCartStore();
    return (
        <Link href="/cart" className="relative">
            <ShoppingCart className="w-4 h-4 text-gray-600" />
            <span className="bg-amber-300 text-gray-500 text-xs p-1 rounded-full absolute -right-3 -top-3 w-4 h-4 flex items-center justify-center">{cart.length}</span>
        </Link>
    );
};

export default ShoppingCartIcon;