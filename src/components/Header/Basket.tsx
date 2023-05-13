"use client";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectItems } from "@/slice/basketSlice";

type Props = {};

function Basket({}: Props) {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <div
      onClick={() => router.push("/checkout")}
      className="link relative flex items-center"
    >
      <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
        {items.length}
      </span>
      <ShoppingCartIcon className="h-10" />
      <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
    </div>
  );
}

export default Basket;
