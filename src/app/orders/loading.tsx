import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
type Props = {};

function loading({}: Props) {
  return (
    <main className="max-w-screen-lg mx-auto p-10 bg-white">
      <h1 className="text-3xl border-b mb-2 pb-1 border-teal-700">
        Getting Orders...
      </h1>
      <div className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
          <div className="space-y-2">
            <p className="font-bold text-xs animated-text-loading">
              {"\u00A0".repeat(35)}
            </p>
            <div className=" animated-text-loading">{"\u00A0".repeat(35)}</div>
          </div>
          <div className="space-y-2">
            <p className="font-bold  animated-text-loading text-xs">
              {"\u00A0".repeat(35)}
            </p>
            <p className=" animated-text-loading">{"\u00A0".repeat(35)}</p>
          </div>
          <p className="text-sm whitespace-nowrap  animated-text-loading sm:text-xl self-end flex-1 text-right text-teal-500">
            {"\u00A0".repeat(20)}
          </p>
          <p className="absolute top-2 right-2 w-40 lg:w-72   animated-text-loading truncate text-xs whitespace-nowrap">
            {"\u00A0".repeat(20)}
          </p>
        </div>
        <div className="p-5 sm:p10">
          <div className="flex space-x-6 overflow-x-auto ">
            <Image
              src={"/Empty.png"}
              alt="loading"
              width={200}
              height={300}
              className="animated-text-loading"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default loading;
