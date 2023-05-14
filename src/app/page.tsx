import Banner from "@/components/Banner";
import ProductFeed from "@/components/HomePageProduct/ProductFeed";
import { server } from "@/utils/config";
import Image from "next/image";

export default async function Home() {
  // const products = await fetch("https://fakestoreapi.com/products", {
  //   next: {
  //     revalidate: 60,
  //   },
  // }).then((res) => res.json());
  try {
    const test = await fetch(`${server}/api/products`);
    const testProducts = await test.json();

    return (
      <div>
        <main className="max-w-screen-2xl">
          <Banner />
          <ProductFeed products={testProducts} />
        </main>
      </div>
    );
  } catch (error) {}
}
