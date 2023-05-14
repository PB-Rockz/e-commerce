import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import BasketButtons from "./BasketButtons";
import { Rating } from "../../../typings";
import RatingStars from "../RatingStars";

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
          <RatingStars rate={rating.rate} count={rating.count} />
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>{"$ " + price.toFixed(2)}</p>
        {/* Prime */}
        <div className="flex items-center space-x-2">
          <CheckBadgeIcon className="text-teal-500 w-4" />
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
