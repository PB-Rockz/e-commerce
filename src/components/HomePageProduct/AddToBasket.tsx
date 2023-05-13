"use client";

import { useDispatch } from "react-redux";
import { addToBasket } from "@/slice/basketSlice";

type Props = {
  title: string;
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

function AddToBasket({
  title,
  id,
  price,
  description,
  category,
  image,
  rating,
}: Props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { title, id, price, description, category, image, rating };
    // sending action as product to REDUX store...the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <button onClick={addItemToBasket} className="mt-auto button">
      Add to Basket
    </button>
  );
}

export default AddToBasket;
