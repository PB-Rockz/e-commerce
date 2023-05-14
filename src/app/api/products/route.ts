import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());

  return NextResponse.json(products);
}
