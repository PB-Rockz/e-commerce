"use client";
import CheckoutItem from "@/components/Checkout/CheckoutItem";
import { selectItems, selectTotal } from "@/slice/basketSlice";
import getStripe from "@/utils/get-stripejs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Product, TransformedItems } from "../../../typings";
type Props = {};

function Checkout({}: Props) {
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);
  const items: Product[] = useSelector(selectItems);
  const email = session?.user?.email;
  const transformed = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100 * 82,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));
  const transformedItems = transformed as unknown as TransformedItems[];

  const createCheckoutSession = async () => {
    const stripe = await getStripe();

    // Call backend to create session

    const getSession: any = await fetch!("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({
        transformedItems,
        email,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
    const checkoutSession = await getSession.json();

    if (checkoutSession.statusCode === 500) {
      return;
    }

    console.log(checkoutSession.id);

    // Redirect user to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result?.error) {
      alert(result.error.message);
    }
  };
  return (
    <main className="lg:flex space-x-2 max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="flex-grow m-5 mx-auto shadow-sm">
        <Image
          src={"https://links.papareact.com/ikj"}
          width={1020}
          height={250}
          style={{ objectFit: "contain" }}
          className="h-64 w-[1024] mx-auto"
          alt="Basket Page"
        />
        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Basket is empty!"
              : "Your Shopping Basket"}
          </h1>
          {items.map((item: Product, index: number) => (
            <CheckoutItem
              key={item.id}
              id={item.id}
              price={item.price}
              description={item.description}
              category={item.category}
              title={item.title}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col p-10 shadow-md">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">{"$" + total.toFixed(2)}</span>
            </h2>
            <button
              role={"link"}
              onClick={createCheckoutSession}
              disabled={!session}
              className={`button mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              {!session ? "Sign In to checkout" : "Proceed to Checkout"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Checkout;
