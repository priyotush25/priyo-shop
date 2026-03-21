"use client"

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


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

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    const selectCategory = searchParams.get("category");
    const handleChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams)
        params.set("category", value || "all")
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-xl text-sm mb-12">
            {categories.map((category, idx) => <div key={idx}
                onClick={() => handleChange(category.slug)}

                className={`flex items-center justify-center px-2 py-1 rounded-md gap-2 cursor-pointer ${category.slug === selectCategory ? "bg-white" : "text-gray-500"} `}>

                {category.icon}
                {category.name}


            </div>)}
        </div>
    );
};

export default Category;