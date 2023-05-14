import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  rate: number;
  count: number;
};

function RatingStars({ rate, count }: Props) {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<StarIcon key={`full-${i}`} />);
  }
  // console.log("Hi");

  // console.log(fullStars);

  return <div>{starIcons}</div>;
}

export default RatingStars;
