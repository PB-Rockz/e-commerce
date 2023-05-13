import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import BasketButtons from "./BasketButtons";
import { Rating } from "../../../typings";

type Props = {
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
export default function CheckoutItem({
  title,
  id,
  price,
  description,
  category,
  image,
  rating,
}: Props) {
  // const starArray = Array(Math.round(rating.rate));
  // console.log(starArray);
  return (
    <div className="grid grid-cols-5 bg-white rounded p-5">
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
        alt=""
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {/* {new Array(Math.round(rating.rate)).map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))} */}
          {Array(Math.round(rating.rate)).map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
          <StarIcon className="h-5 text-yellow-500" />
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>{"$ " + price.toFixed(2)}</p>
        {/* Prime */}
        <div className="flex items-center space-x-2">
          <img loading="lazy" className="w-12" src="/prime-tag.png" alt="" />
          <p className="text-xs text-gray-500">FREE next day delivery</p>
        </div>
      </div>
      {/* Buttons */}
      <BasketButtons
        title={title}
        id={id}
        price={price}
        description={description}
        category={category}
        image={image}
        rating={rating}
      />
    </div>
  );
}
