"use client";
import Order from "@/components/Order";
import { getServerSession } from "next-auth";
import { server } from "@/utils/config";
import { authOptions } from "@/utils/auth";
import { getSession } from "next-auth/react";

export default async function Orders() {
  // const session = await getServerSession(authOptions);
  try {
    const session = await getSession();
    const getOrders = await fetch(`${server}/api/get-orders`, {});
    const orders = await getOrders.json().catch();
    // console.log(orders);

    return (
      <div>
        <main className="max-w-screen-lg mx-auto p-10 bg-white">
          <h1 className="text-3xl border-b mb-2 pb-1 border-teal-700">
            Your Orders
          </h1>
          {session ? (
            <h2>{orders.length} Orders</h2>
          ) : (
            <h2>Please sign in to see your Orders.</h2>
          )}
          <div className="mt-5 space-y-4">
            {orders.map(({ id, amount, items, timestamp, images }: any) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            ))}
          </div>
        </main>
      </div>
    );
  } catch (error) {}
}
