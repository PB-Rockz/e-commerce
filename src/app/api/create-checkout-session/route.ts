import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { TransformedItems } from "../../../../typings";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });
  const { transformedItems, email } = await req.json();

  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      // shipping_rates: [
      //   "shr_1N4Rp6SISgKihe9CrddIVLld",
      //   "shr_1N4RoGSISgKihe9Ct4RGEhQY",
      // ],
      // shipping_address_collection: {
      //   allowed_countries: ["GB", "US", "CA"],
      // },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(
          transformedItems.map(
            (item: TransformedItems) => item.price_data.product_data.images[0]
          )
        ),
      },
    };

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
