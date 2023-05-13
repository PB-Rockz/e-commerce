import Banner from "@/components/Banner";
import ProductFeed from "@/components/HomePageProduct/ProductFeed";
import Image from "next/image";

export default async function Home() {
  const products = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
  return (
    <div>
      <main className="max-w-screen-2xl">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
