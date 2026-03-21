import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";


const ProductCart = ({ product }: { product: ProductType }) => {
    console.log(product);
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            <Link href={`/product/${product.id}`}>
                <div className="relative aspect-2/3">
                    <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover"></Image>
                </div>

            </Link>
            productCart
        </div>
    );
};

export default ProductCart;