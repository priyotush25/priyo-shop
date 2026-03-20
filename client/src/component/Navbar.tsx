import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
            <Link href="/" className="flex items-center">
                <Image src="/logo.png"
                    alt="PriyoShop"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9" />
                <p className="text-md font-medium">PriyoShop</p>
            </Link>
            <div>
                right
            </div>
        </nav>
    );
};

export default Navbar;