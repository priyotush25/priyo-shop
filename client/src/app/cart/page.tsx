"use client"


const step = [
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


const cartItems = [
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
        "colors": ["gray", "blue", "red"],
        "images": {
            "gray": "/products/2g.png",
            "blue": "/products/2gr.png",
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
    }
]



const CartPage = () => {
    return (
        <div>
            <h1>Cart Page</h1>
        </div>
    );
};

export default CartPage;