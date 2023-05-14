import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as EmptyStarIcon } from "@heroicons/react/24/outline";

type Props = {
  rate: number;
  count: number;
};

function RatingStars({ rate, count }: Props) {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const emptystars = totalStars - fullStars;
  const starIcons = [];
  const emptystarIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(i);
  }
  for (let i = 0; i < emptystars; i++) {
    emptystarIcons.push(i);
  }
  // console.log("Hi");

  // console.log(fullStars);

  return (
    <div className="flex mt-2 mb-2">
      {starIcons.map(() => (
        <StarIcon className=" w-4 text-teal-500" />
      ))}
      {emptystarIcons.map(() => (
        <EmptyStarIcon className="w-4 text-teal-500" />
      ))}
    </div>
  );
}

export default RatingStars;
