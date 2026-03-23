"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const Filter = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname} ? ${params.toString}`, { scroll: false })
    }

    return (
        <div className='flex items-center justify-end text-sm text-gray-500 gap-4 mb-6'>

            <span>Sort by:</span>
            <select name="sort" id="sort" className='rounded-md ring-1 ring-gray-500 p-1 border-none' onChange={e => handleFilter(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="ase">Price: Low to High</option>
                <option value="des">Price: High to Low</option>
            </select>

        </div>
    );
};

export default Filter;