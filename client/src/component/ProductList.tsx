import { ProductsTypes } from "@/types";
import Category from "./Category";
import ProductCart from "./ProductCart";

const products: ProductsTypes = [

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
    },
    {
        "id": 2,
        "name": "Nike Flex Run Shorts",
        "shortDescription": "Flexible running shorts with breathable mesh.",
        "description": "Designed for runners, these shorts provide maximum comfort and flexibility.",
        "price": 29.5,
        "sizes": ["s", "m", "l", "xl"],
        "colors": ["black", "blue", "red"],
        "images": {
            "black": "/products/2b.png",
            "blue": "/products/2bl.png",
            "red": "/products/2r.png"
        }
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
        }
    },
    {
        "id": 4,
        "name": "Under Armour Tank Top",
        "shortDescription": "Sleeveless tank for intense training sessions.",
        "description": "Lightweight and sweat-wicking fabric keeps you cool and dry.",
        "price": 24.99,
        "sizes": ["s", "m", "l"],
        "colors": ["black", "green", "yellow"],
        "images": {
            "black": "/products/4b.png",
            "green": "/products/4g.png",
            "yellow": "/products/4y.png"
        }
    },
    {
        "id": 5,
        "name": "Reebok Training Pants",
        "shortDescription": "Comfortable pants for gym and casual wear.",
        "description": "Stretchable fabric with a tapered fit for style and performance.",
        "price": 44.0,
        "sizes": ["m", "l", "xl"],
        "colors": ["black", "gray"],
        "images": {
            "black": "/products/5b.png",
            "gray": "/products/5g.png"
        }
    },
    {
        "id": 6,
        "name": "New Balance Sports Jacket",
        "shortDescription": "Lightweight jacket for outdoor activities.",
        "description": "Wind-resistant material with a sleek athletic design.",
        "price": 59.9,
        "sizes": ["s", "m", "l", "xl"],
        "colors": ["blue", "black"],
        "images": {
            "blue": "/products/6bl.png",
            "black": "/products/6b.png"
        }
    },
    {
        "id": 7,
        "name": "Asics Running Shoes",
        "shortDescription": "Comfortable running shoes with great support.",
        "description": "Engineered for long-distance running with cushioning and stability.",
        "price": 89.99,
        "sizes": ["40", "41", "42", "43", "44"],
        "colors": ["black", "white", "blue"],
        "images": {
            "black": "/products/7b.png",
            "white": "/products/7w.png",
            "blue": "/products/7bl.png"
        }
    },
    {
        "id": 8,
        "name": "Fila Sports Cap",
        "shortDescription": "Classic cap for sun protection and style.",
        "description": "Adjustable strap with breathable fabric for everyday comfort.",
        "price": 19.99,
        "sizes": ["one-size"],
        "colors": ["black", "red", "white"],
        "images": {
            "black": "/products/8b.png",
            "red": "/products/8r.png",
            "white": "/products/8w.png"
        }
    },
]


const ProductList = () => {
    return (
        <div className="w-full">
            <Category />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map(product => <ProductCart key={product.id} product={product} />)}
            </div>

        </div>
    );
};

export default ProductList;