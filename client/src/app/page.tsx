import ProductList from "@/component/ProductList";
import Image from "next/image";

const Homepage = async ({ searchParams }: { searchParams: { category: string } }) => {


  const category = searchParams.category;

  return (
    <div>
      <div className="relative aspect-3/1 mb-12">
        <Image src="/featured.png" alt="Feature Product" fill />
      </div>
      <div>
        <ProductList category={category} />
      </div>
    </div>
  );
};

export default Homepage;