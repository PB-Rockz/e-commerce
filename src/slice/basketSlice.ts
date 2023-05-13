import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../typings";
interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // Item exists in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(`Item ${action.payload.id} found in basket`);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
// This is hot we pull info from global store
export const selectItems = (state: { basket: { items: Product[] } }) =>
  state.basket.items;

export const selectTotal = (state: { basket: { items: Product[] } }) =>
  state.basket.items.reduce(
    (total: number, item: Product) => total + item.price,
    0
  );

export default basketSlice.reducer;
