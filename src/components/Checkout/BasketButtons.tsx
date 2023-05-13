"use client";

import { addToBasket, removeFromBasket } from "@/slice/basketSlice";
import { useDispatch } from "react-redux";
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

function BasketButtons({
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
  const removeItemFromBasket = () => {
    const product = { title, id, price, description, category, image, rating };

    dispatch(removeFromBasket(product));
  };

  return (
    <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button onClick={addItemToBasket} className="button mx-auto">
        Add to Basket
      </button>
      <button onClick={removeItemFromBasket} className="button mx-auto">
        Remove from Basket
      </button>
    </div>
  );
}

export default BasketButtons;
