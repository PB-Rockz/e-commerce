"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
type Props = {};

function HeaderSearchBox({}: Props) {
  return (
    <div className="hidden sm:flex flex-grow items-center h-10 cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
      <input
        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
        type="text"
        name=""
        id=""
        placeholder="Search amazon.in"
      />
      <MagnifyingGlassIcon className="h-12 p-4" />
    </div>
  );
}

export default HeaderSearchBox;
