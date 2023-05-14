import React from "react";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
type Props = {};

function loading({}: Props) {
  return (
    <main className="max-w-screen-lg mx-auto p-10 bg-white">
      <h1 className="text-3xl border-b mb-2 pb-1 border-teal-700 flex items-center">
        Getting Orders
        <div className="flex items-center animate-spin ml-6">
          <img src="/throbber_icon.png" alt="loading..." className="w-6" />
        </div>
      </h1>
      <div className="relative border rounded-md mt-10 ">
        <div className="  p-5 bg-gray-100 bg-gradient-to-tr from-gray-100 to-gray-200 via-gray-400 animate-gradient-xy">
          <Image src={"/Empty.png"} alt="empty" height={40} width={40} />
        </div>
        <div className="p-5 sm:p10 bg-gradient-to-tr from-slate-300 to-gray-400 via-white animate-gradient-xy">
          <div className="flex space-x-6 overflow-x-auto ">
            <Image src={"/Empty.png"} alt="empty" height={200} width={200} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default loading;
