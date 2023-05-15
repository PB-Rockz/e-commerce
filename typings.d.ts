import { IncomingMessage } from "http";
import Stripe from "stripe";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
type Rating = {
  rate: number;
  count: number;
};
interface FetchOptions extends BodyInit {
  method: String;
  body: {
    items: Product[];
    email: string;
  };
}
type TransformedItems = {
  description: string;
  quantity: number;
  price_data: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      images: string[];
    };
  };
};
interface CheckoutRequest extends Request {
  body: {
    items: TransformedItems[];
    email: String;
  };
}
type FireStoreOrder = {
  amount: number;
  id: string;
  images: string[];
  items: Stripe.LineItem[];
  timestamp: { _seconds: number; _nanoseconds: number };
};
interface WebhookSession
  extends Stripe.Event.Data.Object,
    Stripe.Checkout.Session {}
