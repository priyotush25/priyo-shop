"use client"

import { ProductType } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



const ProductInteraction = ({ product, selectedColor, selectedSize }: { product: ProductType, selectedColor: string, selectedSize: string }) => {


    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }






    return (
        <div className='flex flex-col gap-4'>
            {/* SIZE */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Size</span>
                <div className='flex items-center gap-2'>
                    {
                        product.sizes.map(size => <div onClick={() => handleTypeChange("size", size)} className={`cursor-pointer border-2 p-1 ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`} key={size}

                        >
                            <div className={`w-6 h-6 flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>{size.toUpperCase()}</div>

                        </div>)
                    }
                </div>
            </div>
            {/* COLOR */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Colour</span>
                <div className='flex items-center gap-2'>
                    {
                        product.colors.map(color => <div onClick={() => handleTypeChange("color", color)} className={`cursor-pointer border-2 p-1 ${selectedColor === color ? "border-gray-300" : "border-white"}`} key={color}

                        >
                            <div className={`w-6 h-6`} style={{ backgroundColor: color }}
                            ></div>

                        </div>)
                    }
                </div>
            </div>



            {/* GUANTITY */}

        </div>
    );
};

export default ProductInteraction;