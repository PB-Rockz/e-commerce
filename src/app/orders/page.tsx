"use client";
import Order from "@/components/Order";
import { useSession } from "next-auth/react";
import React from "react";

async function Orders() {
  const { data: session, status } = useSession();
  const getOrders = await fetch("/api/fetchOrders");
  const orders = await getOrders.json();
  console.log(orders);

  return (
    <div>
      <main className="max-w-screen-lg mx-auto p-10">
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
}

export default Orders;
