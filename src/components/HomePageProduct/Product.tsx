import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import AddToBasket from "./AddToBasket";
import { Rating } from "../../../typings";
import RatingStars from "../RatingStars";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

function Product({
  title,
  id,
  price,
  description,
  category,
  image,
  rating,
}: Props) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="">
        <Image
          width={200}
          height={200}
          className="object-contain h-52 w-52 mx-auto"
          src={image}
          alt="product"
        />
      </div>
      <h4>{title}</h4>
      <div className="flex">
        {/* <StarIcon className="h-5 text-teal-500" /> */}
        <RatingStars rate={rating.rate} count={rating.count} />
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2 -mt-4 mb-2">
        <CheckBadgeIcon className="text-teal-500 w-4" />
        <p className="text-xs text-gray-500 mt-[6]">certified</p>
      </div>
      <AddToBasket
        id={id}
        price={price}
        description={description}
        category={category}
        title={title}
        image={image}
        rating={rating}
      />
    </div>
  );
}

export default Product;
