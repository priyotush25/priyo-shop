import { Bell, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between py-4 border-b border-gray-200">
            <Link href="/" className="flex items-center">
                <Image src="/logo.png"
                    alt="PriyoShop"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9" />
                <p className="text-md font-medium">PriyoShop</p>
            </Link>
            <div className="flex items-center gap-4 text-gray-500">
                <SearchBar />
                <Bell className="w-4 h-4 text-gray-600" />
                <ShoppingCart className="w-4 h-4 text-gray-600" />
                <Link href="/" className="text-gray-700 font-medium">Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;