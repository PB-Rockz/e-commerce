"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import HeaderSearchBox from "./HeaderSearchBox";
import LoginButton from "./LoginButton";
import { useRouter } from "next/navigation";
import Basket from "./Basket";

type Props = {};

function Headers({}: Props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 space-x-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={"/logo.png"}
            width={150}
            height={60}
            alt={"Amazon"}
            className="object-fit h-[62] w-[152] cursor-pointer"
          />
        </div>
        <HeaderSearchBox />
        {/* RIght */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <LoginButton />
          <div onClick={() => router.push("/orders")} className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Basket />
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex bg-amazon_blue-light items-center text-white space-x-3 p-2 pl-6 text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Sell</p>
        <p className="link">Fresh</p>
        <p className="link">Amazon MiniTV</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Amazon Business</p>
        <p className="link hidden lg:inline-flex">Browsing History</p>
        <p className="link hidden lg:inline-flex">Baby</p>
        <p className="link hidden lg:inline-flex">Subscribe & Save</p>
        <p className="link hidden lg:inline-flex">
          {session ? `${session?.user?.name}'s Amazon.in` : "Sign In"}
        </p>
        <p className="link hidden lg:inline-flex">Gift Ideas</p>
      </div>
    </header>
  );
}

export default Headers;
