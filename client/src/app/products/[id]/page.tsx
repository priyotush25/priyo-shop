
import ProductInteraction from "@/component/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType =
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
    }
}

const ProductPage = async ({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ color: string; size: string }> }) => {

    const { size, color } = await searchParams;

    const selectedSize = (size || product.sizes[0] as string);
    const selectedColor = (color || product.colors[0] as string);


    return (
        <div className="flex flex-col gap-4 md:gap-8 lg:flex-row mt-12">
            {/* IMAGE */}
            <div className="w-full lg:w-5/12 relative aspect-2/3">
                <Image
                    src={product.images[selectedColor]}
                    alt={product.name}
                    fill
                    className="object-contain rounded-md"
                />
            </div>
            {/* PRODUCT DETAILS */}
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
                <h1 className="text-2xl font-medium">{product.name}</h1>
                <p className="text-gray-500">{product.description}</p>
                <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>

                {/* PRODUCT INTERACTION */}
                <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />

                {/* BOTTOM */}
                <div className="flex items-center gap-2">
                    <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
                    <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
                    <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
                </div>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus beatae nihil fugiat eum, alias hic incidunt harum pariatur in!</p>
            </div>
        </div>
    );
};

export default ProductPage;