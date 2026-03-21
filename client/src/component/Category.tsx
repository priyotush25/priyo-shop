"use client"

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all"

    },
    {
        name: "T-Shirt",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "t-shirt"
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes"
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories"
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags"
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses"
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets"
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves"
    }
]


const Category = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-xl text-sm mb-12">
            {categories.map((category, idx) => <div key={idx} className="flex items-center justify-center px-2 py-1 rounded-md gap-2 cursor-pointer hover:bg-gray-200"> {category.icon} {category.name}</div>)}
        </div>
    );
};

export default Category;