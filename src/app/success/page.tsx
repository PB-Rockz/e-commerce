"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Success({}: Props) {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank You, your order has been confirmed !
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has been shipped. If you like to check status of your order(s)
            click the button below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders.
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
