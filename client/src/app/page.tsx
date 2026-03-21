import ProductList from "@/component/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div>
      <div className="relative aspect-3/1 mb-12">
        <Image src="/featured.png" alt="Feature Product" fill />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Homepage;